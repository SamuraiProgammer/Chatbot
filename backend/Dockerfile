# Backend Dockerfile - Node.js Express app
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm ci --omit=dev

# Copy app source
COPY . .

# Expose and run
ENV PORT=4000
EXPOSE 4000

# Use node directly in container (avoid nodemon in production)
CMD ["node", "index.js"]
