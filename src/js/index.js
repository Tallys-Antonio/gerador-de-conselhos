async function gerarConselhos() {
    const resposta = await fetch('https://api.adviceslip.com/advice');
    const conselhoEId = await resposta.json();

    const id = conselhoEId.slip.id
    const conselho = conselhoEId.slip.advice

    document.querySelector('.id').innerHTML = `ADVICE #${id}`
    document.querySelector('.conselho').innerHTML = `${conselho}`
}
gerarConselhos()

const botao = document.querySelector('.botao')

botao.addEventListener('click', ()=> {
    gerarConselhos()
})
