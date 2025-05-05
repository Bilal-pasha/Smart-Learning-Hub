# Check if .env file exists, otherwise throw an error
ifneq (,$(wildcard .env))
	include .env
	export $(shell sed 's/=.*//' .env)
else
	$(error "Error: .env file not found! Please create a .env file at the root level.")
endif

# Docker service names (from docker-compose.yml)
DB_CONTAINER=e-learn-db
APP_CONTAINER=e-learn-backend
SERVICE=e-learn-backend

# Smart setup: start containers, wait for DB, run migrations if needed
setup:
	docker-compose -f docker-compose.yml up --build -d
	@echo "Waiting for all services to be healthy..."
	@until docker exec $(DB_CONTAINER) pg_isready -U $(POSTGRES_USER) -d $(POSTGRES_DB); do \
		echo "Waiting for $(DB_CONTAINER)..."; \
		sleep 2; \
	done
	@until docker exec $(APP_CONTAINER) curl -sf http://localhost:5000/api/health > /dev/null; do \
		echo "Waiting for $(APP_CONTAINER)..."; \
		sleep 2; \
	done
	@if docker exec $(DB_CONTAINER) psql -U $(POSTGRES_USER) -d $(POSTGRES_DB) -t -c \
		"SELECT EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'migrations' AND table_schema = 'public');" | grep -q "f"; then \
		echo "Fresh database detected. Running migrations and seeds..."; \
	    make migrate-run; \
	fi
	@echo "All services are up and running!"
	@echo "Backend: http://localhost:5000/api/health"
	@echo "PgAdmin: http://localhost:$(PGADMIN_PORT)"

# Start the Docker containers
start:
	docker-compose -f docker-compose.yml up --build

# Stop and remove the Docker containers
stop:
	docker-compose -f docker-compose.yml down

# Build the Docker images
build:
	docker-compose -f docker-compose.yml build

# Clean up Docker resources
clean:
	docker-compose -f docker-compose.yml down -v
	docker system prune -f

# Restart the Docker containers
restart:
	docker-compose -f docker-compose.yml down
	docker-compose -f docker-compose.yml build
	docker-compose -f docker-compose.yml up -d

# Run database migrations manually
migrate-run:
	docker exec -it $(APP_CONTAINER) npm run migration:run

# Show logs from the backend container
logs:
	docker-compose -f docker-compose.yml logs -f $(SERVICE)

# Open a shell into the backend container
shell:
	docker exec -it $$(docker ps -qf "name=$(SERVICE)") sh

# Create a new migration file
migrate-create:
	npm run migration:create --name=$(MIGRATION_NAME)