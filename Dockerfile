FROM node:12-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM node:12-alpine AS server
WORKDIR /app
COPY --from=builder ./app/public ./public
COPY --from=builder ./app/dist ./dist
COPY --from=builder ./app/package* ./
RUN npm install --production
CMD ["npm", "start"]
