

const url = `https://api.github.com/users/raquelcatelan`


async function buscarApi(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const json = await response.json();
            criaImagem(json.avatar_url);

        } else {
            const err = `${response.status}: ${response.statusText}`
            //    console.log(response.statusText);
            criaErro(err)
            // console.error('nao foi possivel carregar a imagem');
        }

    } catch (error) {
        criaErro('Falha na aquisição da API')
    }
    // .then(response => response.json())
    // .then(json => criaImagem(json.data))
    // .catch(erro => console.error(erro))
}


function criaImagem(src) {


    // console.log(lista);
    document.body.innerHTML = `
    <img src=${src}> 
    `
}


criaErro = (erro) => {
    document.body.innerHTML = `<h1 style='color:red' >${erro}</1>`

}

buscarApi(url)