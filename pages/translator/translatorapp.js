const inputText = document.getElementById("inputText");
const translateButton = document.getElementById("translate");
const inputText2 = document.getElementById("inputText2");

document.addEventListener("DOMContentLoaded", function() {
   

    translateButton.addEventListener("click", function(event) {
        event.preventDefault(); 

        const text = inputText.value;

		const url = 'https://google-translate113.p.rapidapi.com/api/v1/translator/text';

		const options = {
			method: 'POST',
			headers: {
				'content-type': 'application/x-www-form-urlencoded',
				'X-RapidAPI-Key': '0867224395mshe473d86d0165d87p1cc26ajsnd312a3df309b',
				'X-RapidAPI-Host': 'google-translate113.p.rapidapi.com'
			},
			body: new URLSearchParams({
				from: 'tr',
				to: 'en',
				text: text
			})
		};

		getData(url, options)
		.then(data => inputText2.value = data.trans)
		.catch(err => console.log(err));
		
		}
	);
			
});

function getData(url, options) {
    return fetch(url, options)
        .then(response => response.json())
        .catch(err => console.log(err));
}
