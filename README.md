## fc-challenge-docker

### 1st Challenge - Full Cycle Rocks

Image: https://hub.docker.com/repository/docker/luizgustavoob/fc-challenge-docker-golang

### How to use

```
docker container run --rm luizgustavoob/fc-challenge-docker-golang:latest
```

And the output should be:

```
Full Cycle Rocks!
```

### 2st Challenge - Nginx + Node + MySQL

### How to use

```
docker-compose up --build
```

With all containers running, in your browser access the address `http://localhost:8080` and the output should be:

```
Full Cycle

    Name
Luiz Gustavo
```