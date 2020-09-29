#!/bin/bash

# protoc -I ./proto_files --go_out=plugins=grpc:go-service/pb ./proto_files/*.proto

TYPE=$1


# if [[ -z $TYPE ]]; then
#     $TYPE="go";
# fi

function generateGoProtoDefs() {
    PROTOC_GEN_PATH=$(which protoc-gen-go)

    if [[ -z $PROTOC_GEN_PATH ]]; then
        echo "protoc-gen-go command not found"
        exit 1
    fi
    echo "Generating proto defs for go"
    GEN=$(protoc -I ./proto_files --go_out=plugins=grpc:go-service/lib ./proto_files/*.proto)
}

function generateNodeProtoDefs() {
    PROTOC_GEN_PATH=$(which protoc-gen-go)

    if [[ -z $PROTOC_GEN_PATH ]]; then
        echo "protoc-gen-go command not found"
        exit 1
    fi

    echo "Generating proto defs for node"


    GEN=$(./node-service/node_modules/.bin/grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./node-service/lib --grpc_out=./node-service/lib ./proto_files/*.proto)

}

if [[ $TYPE == "--all" ]]; then
    generateNodeProtoDefs
    generateGoProtoDefs
fi

if [[ $TYPE == "--go" ]]; then
    generateGoProtoDefs
fi

if [[ $TYPE == "--node" ]]; then
    generateNodeProtoDefs
fi
