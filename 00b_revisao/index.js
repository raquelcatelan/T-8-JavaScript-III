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
console.log(body);


 body.style.backgroundColor = 'purple';
 


 //  console.log(intRandom);
 
 const btn= document.getElementById('trocaCor');
 console.log(btn);
 btn.addEventListener('click' ,()=>{
   
    const r =geraInteiro(255); 
    const g = geraInteiro(255); 
    const b =geraInteiro(255); 

    body.style.backgroundColor = 'rgb('+r+',' +g+ ',' +b+')'
    
    
    
});

  geraInteiro = num =>  parseInt(Math.random() * num);
     
 
 
 
 
