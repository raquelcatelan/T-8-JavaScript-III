// 1.
// [x] adicionar a tag <script> no html
// [x] verificar se está lendo index.js
// [x] alterar cor de <body>
// [x] escutar o clique do botão
// [x] criar função de alterar a cor usando rgb()
// [x] usar Math.random() e Math.floor() ou parseInt()


// console.log('ola');


// const body = document.querySelector('body');
// const body = document.getElementsByTagName('body');
const body = document.body;
console.log(body);


 body.style.backgroundColor = 'purple';


 //  console.log(intRandom);
 
 const btn= document.getElementById('trocaCor');
 console.log(btn);
 btn.addEventListener('click' , mudaCor);

 function geraInteiro() {
     const n= parseInt(Math.random() * 255);
     console.log(n);
     return n;
     
 }
 
 function mudaCor(){
   
    const r =geraInteiro(); 
    const g = geraInteiro(); 
    const b =geraInteiro(); 

    body.style.backgroundColor = 'rgb('+r+',' +g+ ',' +b+')'
    // console.log('entrei na function eeee');
    // console.log(r,g,b);
    // console.log('rgb(' +r+ ',' +g+ ',' +b+ ')');
    
    
}
 
