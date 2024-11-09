const meuObservatorio = new IntersectionObserver((entradas) => {
   entradas.forEach((entrada) => {
       if(entrada.isIntersecting){
            entrada.target.classList.remove('esconder')
           entrada.target.classList.add('mostrar')
       }else{
           entrada.target.classList.remove('mostrar')
           entrada.target.classList.add('esconder')
       }
   })
})

const elements = document.querySelectorAll('.esconder');

elements.forEach((observatorio) => meuObservatorio.observe(observatorio))

const transicaoInicial = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
            entrada.target.classList.add('aparecerNome')
            entrada.target.classList.remove('mostrar')
            entrada.target.classList.remove('esconder')
        }
    })
 })
 
 const foto = document.querySelectorAll('.fotoDePerfil');
 
 foto.forEach((observatorio) => transicaoInicial.observe(observatorio))