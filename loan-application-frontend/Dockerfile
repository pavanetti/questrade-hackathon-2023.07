FROM node:18-alpine3.17 as build-env

ARG VITE_API_BASE_URL
ENV VITE_API_BASE_URL=${VITE_API_BASE_URL}

WORKDIR /app
COPY . /app

RUN npm install
RUN npm run build

# Final image
FROM nginx:1.25.1
COPY --from=build-env /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx","-g","daemon off;"]
