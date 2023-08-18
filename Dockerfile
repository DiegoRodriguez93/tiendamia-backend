# Use the official Node.js 16 image as the base image
FROM node:16

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN yarn

# Copy the rest of the application code to the working directory
COPY . .

# Build the application
RUN yarn build

# Expose the application port
EXPOSE 80

# Start the application
CMD ["yarn", "start:prod"]