let { client, messages} = require("./lib/grpc");

let call = client.sort(function (error, response) {
    if(error){
        console.log(error)
        return
    }
    console.log("the sorted array is ", response.array[0])
})

function main() {
    process.argv.splice(2).forEach(number => {
        number = parseInt(number, 10)
        let request = new messages.SortRequest()
        request.setNum(number)
        call.write(request)
    })
    call.end();
}

main()