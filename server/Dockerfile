# Use Node.js official image
FROM node:20.11.1

# Set working directory inside the container
WORKDIR /app

# Copy package.json and lock file
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of your source code
COPY . .

# Run the app
CMD [ "npm", "run", "start:dev" ]
