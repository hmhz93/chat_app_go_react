FROM golang:1.16.4
RUN mkdir /app
ADD . /app/
WORKDIR /app
RUN go mod download
RUN go build
CMD ["/app/main"]
