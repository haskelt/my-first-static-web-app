function update () {
    console.log('in update');
    fetch(`https://v-thaskell-func.azurewebsites.net/api/HttpExample?name=foo`)
	.then(response => {
	    if (!response.ok) {
		console.log(response.status);
		console.log(response.statusText);
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

