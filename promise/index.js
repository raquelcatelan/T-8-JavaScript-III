function criaTexto(texto) {
    const div = document.querySelector('#root');
    div.innerHTML += `<h1>${texto}</h1>`
}

const sabao = true;
const agua = true;

function ensaboar() {
    return new Promise((resolve , reject) => {
        if (sabao) {
            setTimeout(() => {
                resolve('terminou de ensaboar');
            }, 5000);
        } else {
            reject('nao consigo ensaboar')
        }
       
     })
}


function enxaguar() {
    return new Promise((resolve, reject) => {
        if (agua) {
           
            setTimeout(() => {
                resolve('terminou de enxaguar')
            }, 5000);
            
        } else{
          
            setTimeout(() => {
                reject('nao consigo enxaguar') 
            }, 2000);
        }
    })

}

// ensaboar().then (res => criaTexto(res))
// enxaguar().then(res => criaTexto(res))



ensaboar()
.then(res =>{
    criaTexto(res)  
    enxaguar()
     .then(res2 => criaTexto(res2))
     .catch(res2 => criaTexto(res2) )
})
.catch(err => criaTexto(err))

// Promise.all([ensaboar() , enxaguar()])
// .then(resAll => resAll.forEach(res => criaTexto(res)))
// .catch(err => criaTexto(err))
