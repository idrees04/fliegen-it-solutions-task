# Use official Node.js image as the base image
FROM node:lts-alpine3.19 AS build

# Set working directory
WORKDIR /app

# Copy package files to install dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the application using Vite
RUN npm run build

# Stage 2: Serve React application with Nginx
FROM nginx:alpine

# Copy build files from the previous stage to Nginx directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx configuration file if needed
# COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
