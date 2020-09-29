// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_files_demo_pb = require('../proto_files/demo_pb.js');

function serialize_greet_HelloReply(arg) {
  if (!(arg instanceof proto_files_demo_pb.HelloReply)) {
    throw new Error('Expected argument of type greet.HelloReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greet_HelloReply(buffer_arg) {
  return proto_files_demo_pb.HelloReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greet_HelloRequest(arg) {
  if (!(arg instanceof proto_files_demo_pb.HelloRequest)) {
    throw new Error('Expected argument of type greet.HelloRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greet_HelloRequest(buffer_arg) {
  return proto_files_demo_pb.HelloRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greet_SortRequest(arg) {
  if (!(arg instanceof proto_files_demo_pb.SortRequest)) {
    throw new Error('Expected argument of type greet.SortRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greet_SortRequest(buffer_arg) {
  return proto_files_demo_pb.SortRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greet_SortResponse(arg) {
  if (!(arg instanceof proto_files_demo_pb.SortResponse)) {
    throw new Error('Expected argument of type greet.SortResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greet_SortResponse(buffer_arg) {
  return proto_files_demo_pb.SortResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The greeting service definition.
var GreeterService = exports.GreeterService = {
  // Sends a greeting
sayHello: {
    path: '/greet.Greeter/SayHello',
    requestStream: false,
    responseStream: false,
    requestType: proto_files_demo_pb.HelloRequest,
    responseType: proto_files_demo_pb.HelloReply,
    requestSerialize: serialize_greet_HelloRequest,
    requestDeserialize: deserialize_greet_HelloRequest,
    responseSerialize: serialize_greet_HelloReply,
    responseDeserialize: deserialize_greet_HelloReply,
  },
  sayHelloStream: {
    path: '/greet.Greeter/SayHelloStream',
    requestStream: false,
    responseStream: true,
    requestType: proto_files_demo_pb.HelloRequest,
    responseType: proto_files_demo_pb.HelloReply,
    requestSerialize: serialize_greet_HelloRequest,
    requestDeserialize: deserialize_greet_HelloRequest,
    responseSerialize: serialize_greet_HelloReply,
    responseDeserialize: deserialize_greet_HelloReply,
  },
  sort: {
    path: '/greet.Greeter/Sort',
    requestStream: true,
    responseStream: false,
    requestType: proto_files_demo_pb.SortRequest,
    responseType: proto_files_demo_pb.SortResponse,
    requestSerialize: serialize_greet_SortRequest,
    requestDeserialize: deserialize_greet_SortRequest,
    responseSerialize: serialize_greet_SortResponse,
    responseDeserialize: deserialize_greet_SortResponse,
  },
};

exports.GreeterClient = grpc.makeGenericClientConstructor(GreeterService);
