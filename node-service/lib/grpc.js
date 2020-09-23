let grpc = require('grpc');
let path = require('path');
let protoLoader = require('@grpc/proto-loader');
let service = require("./proto_files/demo_grpc_pb");
let messages = require("./proto_files/demo_pb");


const PROTO_PATH = path.resolve(__dirname, "../../proto_files/demo.proto")

const protoDefs = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
})



const client = new service.GreeterClient('localhost:9001', grpc.credentials.createInsecure())

const request = new messages.HelloRequest()

module.exports = {client, request}