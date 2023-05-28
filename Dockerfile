# Base image
FROM node:14-alpine

ENV REACT_APP_API_IP=16.16.255.11 \
    REACT_APP_API_PORT=8081

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the React app
#CMD ["npm", "run", "build"]
RUN npm run build

#Install serve
RUN npm install -g serve

# Set the command to start the app
CMD ["npm", "run", "server"]
