let {client, messages} = require('./lib/grpc');


function main(){
    let name = process.argv[2];

    let request = new messages.HelloRequest();
    request.setName(name);

    let call = client.sayHelloStream(request)

    call.on('data', function(response){
        console.log(response.array[0])
    })

    call.on('end', function(response){
        console.log("end")
    });

    call.on('error', err => {
        console.log(err, "asdfasfd")
    })
}

main()