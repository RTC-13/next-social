# Use official Node.js image as base
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy application files
COPY . .

# Install Prisma CLI
RUN npm install prisma --save-dev

# Expose application port
EXPOSE 3000

# Run the application
CMD ["npm", "run", "start"]
