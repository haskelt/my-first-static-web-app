function update () {
    console.log('in update');
    fetch(`https://v-thaskell-func.azurewebsites.net/api/HttpExample?name=foo`, { mode: 'no-cors'})
	.then(response => {
	    if (!response.ok) {
		throw new Error('Network response was not OK');
	    }
	    return response.text()})
	.then(data => {
	    console.log('Success:', data);
	})
	.catch((error) => {
	    console.error('Error:', error);
	});
};

function setMessage(message) {
    console.log(message);
    document.querySelector("#message").innerHTML = message;
};

update();

