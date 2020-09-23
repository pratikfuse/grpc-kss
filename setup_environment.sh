#!/bin/bash

GO_ZIP=go1.15.2.src.tar.gz
PROTOC_ZIP=protoc-3.7.1-linux-x86_64.zip

echo "Downloading Go Lang binaries"
wget https://dl.google.com/go/$GO_ZIP

if [ $? -eq 0 ]
then 
    echo "Downloaded go binaries"
    sudo tar -C /opt -xzf $GO_ZIP
    echo 'export PATH=$PATH:/usr/local/go/bin' >> hello
else
    echo "Error: could not download go binaris" 
    exit 1
fi


echo "Installing protobuf compilers...."

wget https://github.com/protocolbuffers/protobuf/releases/download/v3.7.1/$PROTOC_ZIP

sudo unzip -o $PROTOC_ZIP -d /usr/local bin/protoc
sudo unzip -o $PROTOC_ZIP -d /usr/local 'include/*'

echo "Cleaning up..."
rm -f $PROTOC_ZIP
rm -f $GO_ZIP
