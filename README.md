# GRPC Demo

## Objective

Communication between a go and node service using [gRPC](https://grpc.io/) framework

### Steps
1. Download and install [go runtime](https://golang.org/dl/)
2. Download and install [node and npm](https://nodejs.org/en/download/) 
3. Install [protobuf compiler](https://grpc.io/docs/protoc-installation/)
4. ```cd node-service``` folder and run npm install to install node service dependencies
5. ```cd go-service``` folder and run go mod download to install go service dependencies
6. Run ```./gen_proto.sh --all``` to generate grpc code bindings for go and node service
6. ```cd go-service``` and run go run grpc_server.go to run the go grpc server 
7. ```cd node-service``` to run the node client grpc stubs
    * unary grpc ```node app.js```
    * client streaming grpc ```node sort.js```
    * server streaming grpc  ```node client.js```
8. Complain to me if it doesn't work