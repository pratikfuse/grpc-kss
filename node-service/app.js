let express = require("express");
const grpc = require("./lib/grpc");
let {request,client} = require('./lib/grpc')


function sendGrpcRequest(name, cb){
    request.setName(name)
    client.sayHello(request, cb)
}

let app = express()

app.get("/hello", function(request, response){

    let name = request.query.name || "Anonymous";

    sendGrpcRequest(name, function(err, grpcRes){
        if(err){
            response.status(500).json({
                success: false,
                error: "Something went wrong"
            })
            console.log(err)
            return;
        }
        console.log(grpcRes)
        response.status(200).send({
            success: true,
            message: grpcRes.array[0]
        })
    })
})


app.listen(9000)