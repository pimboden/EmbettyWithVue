#Build Image
FROM node:lts-alpine

#Install http-server for static content
RUN yarn global add http-server

WORKDIR /usr/src/web
# copy the app, note .dockerignore
COPY . /usr/src/web
#Install all npm packages
RUN yarn install

# build necessary, even if no static files are needed,
# since it builds the server as well
ENV PORT=8081
ENV HOST=0.0.0.0
RUN yarn build


EXPOSE 8081
CMD ["http-server", "dist"]