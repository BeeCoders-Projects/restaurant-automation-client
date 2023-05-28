# Base image
FROM node:14-alpine

# Set up enviroments
ARG REACT_APP_API_IP
ARG REACT_APP_API_PORT
ENV REACT_APP_API_IP=${REACT_APP_API_IP} \
    REACT_APP_API_PORT=${REACT_APP_API_PORT}

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the React app
RUN npm run build

#Install serve
RUN npm install -g serve

# Set the command to start the app
CMD ["npm", "run", "server"]
