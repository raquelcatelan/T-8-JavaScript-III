// 1.
// [] adicionar a tag <script> no html
// [] verificar se está lendo index.js
// [] alterar cor de <body>
// [] escutar o clique do botão
// [] criar função de alterar a cor usando rgb()
// [] usar Math.random() e Math.floor() ou parseInt()

// ------------------------------------------------------------------------
// 2. melhorando o código
// [x] remover repetição de código
// [] anonymous function
// [] arrow function
// [] template string



const body = document.body;
const botao = document.getElementById('trocaCor');

body.style.backgroundColor = 'purple';
botao.addEventListener('click', mudaBody);

function mudaBody() {
  
  const mudaC = new mudaCor()
  body.style.backgroundColor = mudaC.geraRGB();
  
}

// // console.log('mudaC' , mudaC);
// const mudaC = new mudaCor()
// // const numerov= mudaCor.r
// console.log('r' , mudaC.r());