function update () {
    console.log('in update');
    fetch(`https://v-thaskell-func.azurewebsites.net/api/HttpExample?name=foo`, { mode: 'no-cors'})
	.then(response => response.text())
	.then(setMessage);
};

function setMessage(message) {
    console.log(message);
    document.querySelector("#message").innerHTML = message;
};

update();

