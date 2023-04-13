var location = document.querySelector('location');
var display = document.querySelector('pre');
let url;

const baseURL = 'https://api.weatherstack.com/current';
const key = 'b1791ffb12a04e6011cbb08f8186e847';

function fetchResults(event){
    event.preventDefault();
    url = `${baseURL}?access_key=${key}&query=${location.value}&forecast=1`;
    fetch(url).then(function (result){
        return result.json();
    }).then(function (json){
        displayResults(json);
    })
};

function displayResults(json) {
    console.log(json);
}