1. Execute the following two `docker exec` commands to install [jq](https://stedolan.github.io/jq/) inside consul container
     ```
     docker exec -ti consul apk update
     docker exec -ti consul apk add jq
     docker-compose  scale http=5
     ```


 2. 