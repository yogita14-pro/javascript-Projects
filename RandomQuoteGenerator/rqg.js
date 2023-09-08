let quote=document.getElementById("quote");
let author= document.getElementById("author");
let btn= document.getElementById("btn");
// envoking api url
const url="https://api.quotable.io/random";
// Fetching quote from this api
let getQuote = () =>{
    fetch(url)
    .then(Response=>Response.json())
    .then(data=>{
        quote.innerHTML=data.content;
        author.innerHTML=data.author;
    });
};
// random color generation
const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
}

window.addEventListener("load", getQuote, setBg);
btn.addEventListener("Click", getQuote, setBg);