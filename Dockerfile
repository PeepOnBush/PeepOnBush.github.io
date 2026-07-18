# STAGE 1: Build the TypeScript code
FROM node:20-alpine AS build
WORKDIR /app
# Copy package files and install dependencies
COPY package*.json ./
RUN npm install
# Copy the rest of your code and build it
COPY . .
RUN npm run build

# STAGE 2: Serve the app using Nginx
FROM nginx:alpine
# Copy the compiled files from Stage 1 into Nginx's HTML folder
COPY --from=build /app/dist /usr/share/nginx/html
# Expose port 80 (default web port)
EXPOSE 80
# Start Nginx
CMD ["nginx", "-g", "daemon off;"]