// [] instanciar XMLHttpRequest()
// [] o que fazer depois que receber a resposta
// [] fazer a requisição com open() e send()
// [] tratar response



// [] iterar sobre o array e mostrar as três imagens usando for()
// [] iterar sobre o array e mostrar as três imagens usando for...of
// [] iterar sobre o array e mostrar as três imagens usando forEach



const request = new XMLHttpRequest()
const url = './data/dados.json';
const img = document.createElement('img');
const div = document.querySelector('#root');


request.open('GET' ,  url)
request.send()

request.onreadystatechange = mostrarImg;

function mostrarImg() {
    
    
    if (request.status ===200 && request.readyState===4) {
    
        const response = request.response;
        console.log( response);
        
        const json = JSON.parse(response);
        const data = json.data;
        console.log(data);
        
        const obj = data[0];
        const obj1 = data[1];
        const obj2 = data[2];
        console.log(data[0].nome);

        // criarImagens(data);
        // for (let i = 0; i < data.length; i++) {
        //     const element = data[i];
        //     console.log(element.imagem);
        //     const img = ` <img src=${element.imagem}>`;
        //     div.innerHTML+= img
            
       
            
            const body = document.body;
             body.innerHTML += `
            <img src=${data[0].imagem}>
                <img src=${data[1].imagem}>
             <img src=${data[2].imagem}>
             `
             
            //  criarImagensForEach(data);

            for(const posicao of data){
                console.log(posicao);
                const img = `<img src=${posicao.imagem}>`;
                div.innerHTML = img ;
            }
            
            } 
        }
        
        
        function criarImagensForEach (array) {
            
            array.forEach(element => {
                console.log(element);
                const img = `<img src=${element.imagem}>`;
                div.innerHTML+= img;
                
            });
        }
        
