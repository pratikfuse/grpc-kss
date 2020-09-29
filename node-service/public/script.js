
let nameEl = document.getElementById("name");
let buttonEl = document.getElementById("btn");
let responseEl = document.getElementById("response");

buttonEl.addEventListener("click", send)

async function send() {
    const name = nameEl.value;
    try {
        const body = await fetch(`/api/hello?name=${name}`)
        const json = await body.json();
        responseEl.innerText = json.message
    } catch (error) {

        alert(error)
    }

}
