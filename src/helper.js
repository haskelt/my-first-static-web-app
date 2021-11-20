function update () {
    console.log('in update');
    fetch(`https://v-thaskell-func.azurewebsites.net/api/HttpExample?name=foo`, { mode: 'no-cors'})
	.then(function parse(resp){ return response.text()})
	.then(setMessage);
};

function setMessage(resp) {
    console.log(resp);
    document.querySelector("#message").innerHTML = resp;
};

