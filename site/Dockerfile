FROM node:gallium-buster
# Installing libvips-dev for sharp Compatability
RUN apt-get update && apt-get install libvips-dev -y
ENV NODE_ENV=production
WORKDIR /opt/
ENV PATH /opt/node_modules/.bin:$PATH
EXPOSE 1337
ENTRYPOINT ["./get_build_run.sh"]
