// XMLHttpRequest na rota search capturando informação do input
// trazer 10 imagens
// apresentar as imagens na div #root

const input = document.querySelector('#gifInput');
// console.log(input);

const botao = document.querySelector('#gifButton');
// console.log(button);

const div = document.querySelector('#root')

botao.addEventListener('click', function (evento)  {
     fazerAlgoDepoisDeClicar(evento)
    
    });

function fazerAlgoDepoisDeClicar(evento) {
    evento.preventDefault();
    div.innerHTML= "";
  
//  console.log('sera que eu cliquei')
const valorDoInput = input.value;
//  console.log(valorDoInput);
input.value= "";
const minhaChave = 'dc6zaTOxFJmzC';
const oQueQueroBuscar = valorDoInput;
const enderecoAPI = `http://api.giphy.com/v1/gifs/search?&api_key=${minhaChave}&q=${oQueQueroBuscar}&limit=3`;
console.log(enderecoAPI);

    const requisicaoHttp = new XMLHttpRequest()
    requisicaoHttp.open('GET', enderecoAPI);
    requisicaoHttp.send();
    requisicaoHttp.onreadystatechange = function pegandoResposta() {
        if (requisicaoHttp.readyState === 4) {
            if (requisicaoHttp.status === 200) {
                console.log('a resposta esta pronta');
                
            }else{
                // console.log('deu ruim na requisicao e nao tem resposta');
                const statusCode = requisicaoHttp.status;
                const statusMensagem = requisicaoHttp.statusText;
                // console.log('Este é ,meu console log' , statusCode , statusMensagem);
                console.error('Esse é meu console error ', statusCode , statusMensagem);
                div.innerHTML + `<h1>Falha${statusCode}: ${statusMensagem}</h1>`

            }
            
            const resposta = requisicaoHttp.response;
            const respTransobj  = JSON.parse(resposta);
            // console.log(respTransobj.data);
            const arrData = respTransobj.data;
            // console.log(arrData[1].images.original.url);

            for (const iterator of arrData) {
                console.log(iterator.images.original.url);
                div.innerHTML += `<img src=${iterator.images.original.url}>`


            }

            // div.innerHTML = `
            // <img src=${arrData[0].images.original.url}>
            // <img src=${arrData[1].images.original.url}>
            // <img src=${arrData[2].images.original.url}>
            // `


        
    } 
    // console.log(requisicaoHttp.response);
}

}