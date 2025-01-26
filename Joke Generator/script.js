const jokeDisplay = document.getElementById("joke");
const apiKey = "API-KEY-HERE"


function generateJoke(){
    fetch('https://api.api-ninjas.com/v1/jokes', {
        method: 'GET',
        headers: {
            'X-Api-Key': apiKey,
            'Content-Type': 'application/json'
        } 
    })
        .then(response => {
            if(!response.ok){
                throw new Error("Could not fetch resource");
            }
            return response.json();
        })
        .then(data => {
            joke = data[0].joke;
            jokeDisplay.textContent = `${joke}`
        })
        .catch(error => console.log(error))
}