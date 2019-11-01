// fetch da imagem
// [] adicionar a tag <script> no html
// [] verificar se está lendo index.js
// [] usar o método fetch() para a url da API Giphy
// [] transformar o dado recebido
// [] apresentar <img>
// [] usar async/await, then(), .catch(), arrow function

const request = new XMLHttpRequest()

const busca = 'movies'

const url = `http://api.giphy.com/v1/gifs/search?q=${busca}&api_key=dc6zaTOxFJmzC&limit=3&offset=0`
const img = document.querySelector('#imagem')
// const body  = document.querySelector('body')
// const img1 = document.createElement('img')
// const img2 = document.createElement('img')
// const imagem1 = body.appendChild(img1)
// const imagem2 = body.appendChild(img2)

request.open('GET' , url);
request.send();


request.onreadystatechange = mostraGif;



function mostraGif () {
    if (request.status ===200 && request.readyState == 4) {
        
        const response =  request.response;
        console.log(typeof response);
        
        const json = JSON.parse(response)
        const body = document.body 
        body.innerHTML = `
         <img src= ${json.data[0].images.original.url}>
         <img src= ${json.data[1].images.original.url}>
         <img src= ${json.data[2].images.original.url}>
        `
    } else{



    }




    
}

