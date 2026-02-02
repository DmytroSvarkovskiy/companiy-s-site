FROM node:20.2.0

WORKDIR /kit-global-site-dev

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY . .

RUN npm run build

CMD ["npm", "run", "start"]
