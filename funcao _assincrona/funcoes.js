// function lavarLouca() {
//     ensaboar();
//     enxaguar();
// }

ensaboar = () => {
    return new Promise ((resolve, reject) =>{
    console.log('comecou a ensaboar');

    setTimeout(() => {

        resolve(console.log('terminou de ensaboar'));



    }, 5000);

})

}


enxaguar = () => {
    console.log('comecou a enxaguar');
    setTimeout(() => {
        console.log('terminou de enxaguar');

    }, 2000);
}


function lavarLouca (callback1, callback2) {
    callback1().then(() => {
        callback2()
    })
}
