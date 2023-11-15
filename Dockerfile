FROM node:18.15.0

WORKDIR /app
 
COPY package.json package.json
 
RUN npm install
 
COPY . .

EXPOSE 3000
 
CMD [ "node", "index.js" ]