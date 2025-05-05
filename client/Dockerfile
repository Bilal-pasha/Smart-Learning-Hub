# Use Node.js 20 (removing the first FROM node:alpine)
FROM node:20.10.0-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json first (to leverage Docker caching)
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the entire project
COPY . .

# Command to start your application
CMD ["yarn", "dev", "--host"]
