# Use official lightweight NGINX image
FROM nginx:alpine

# Set working directory inside container
WORKDIR /app

# Copy all project files into /app
COPY . .

# Copy files into NGINX's default html directory
COPY . /usr/share/nginx/html

# Expose port 80 for web traffic
EXPOSE 80

# NGINX runs automatically with the base image
