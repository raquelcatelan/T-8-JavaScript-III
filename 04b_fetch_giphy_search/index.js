// fetch da imagem
// [] adicionar a tag <script> no html
// [] verificar se está lendo index.js
// [] usar o endpoint de busca
// [] usar o método fetch() para a url da API Giphy
// [] transformar o dado recebido
// [] apresentar <img>


const input = document.querySelector('#gifInput');
// console.log(input);
const botao = document.querySelector('#gifButton');
// console.log(botao);
const div = document.querySelector('#root')

botao.addEventListener('click' , (e) => fazerFetc(e));

function fazerFetc (event) {
    event.preventDefault();
    const valorInput = input.value;
    div.innerHTML = "";
    input.value= "";
    // console.log(valorInput);
    const url = `http://api.giphy.com/v1/gifs/search?q=${valorInput}&api_key=dc6zaTOxFJmzC&limit=4&offset=0`


    fetch(url)
    .then(resposta => {
        if (!resposta.ok) {
            console.error(resposta.statusText);
            mostrarErro(resposta.statusText);
        }
    })
    .then(json => mostarResultado(json))
    .catch(erro => mostrarErro(erro))


}

mostrarErro = (erro) => {
    div.innerHTML= `<h1>${erro}</h1>`
}

function mostarResultado (json) {

    const arr  = json.data
    console.log(json.data);
    arr.forEach(element => {
        const srcImg =  element.images.original.url
        div.innerHTML += `
        <img src=${srcImg}>
        `
    });
    
}
