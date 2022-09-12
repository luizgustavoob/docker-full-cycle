FROM    golang:1.18-buster AS builder
WORKDIR /go/src/github.com/luizgustavoob/fc-docker
COPY    go.mod main.go ./
RUN     go build -o ./app .

FROM alpine:latest
COPY --from=builder /go/src/github.com/luizgustavoob/fc-docker/app /app
ENTRYPOINT [ "/app" ]