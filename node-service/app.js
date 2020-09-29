let express = require("express");
let {client, messages} = require('./lib/grpc')


function sendGrpcRequest(name, cb){
    let request = new messages.HelloRequest();
    request.setName(name)
    client.sayHello(request, cb)
}

let app = express()

app.get("/api/hello", function(request, response){

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
        response.status(200).send({
            success: true,
            message: grpcRes.array[0]
        })
    })
})


app.use("/", express.static("./public"))


app.listen(9000)