const meuObservatorio = new IntersectionObserver((entradas) => {
    console.log(entradas);
})

const elements = document.querySelectorAll('.esconder');

elements.forEach((observatorio) => meuObservatorio.observe(observatorio))