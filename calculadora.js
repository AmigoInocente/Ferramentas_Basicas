let tela = document.getElementById('tela')
let dadosDaTela = []

inserir0.addEventListener('click', function(){ 
    dadosDaTela.push("0")
    tela.innerHTML = dadosDaTela
    console.log(dadosDaTela)
})

inserir0.addEventListener("keydown", function(evento) {
    const teclaPressionada = evento.key;
  
    if (teclaPressionada === "0") { // Exemplo: tecla "0"
      dadosDaTela.push("0");
      tela.innerHTML = dadosDaTela;
      console.log(dadosDaTela);
    }
  });
inserir1.addEventListener('click', function(){ 
    dadosDaTela.push("1")
    tela.innerHTML = dadosDaTela
    console.log(dadosDaTela)
})
inserir2.addEventListener('click', function(){ 
    dadosDaTela.push("2")
    tela.innerHTML = dadosDaTela
    console.log(dadosDaTela)
})
inserir3.addEventListener('click', function(){ 
    dadosDaTela.push("3")
    tela.innerHTML = dadosDaTela
    console.log(dadosDaTela)
})
inserir4.addEventListener('click', function(){ 
    dadosDaTela.push("4")
    tela.innerHTML = dadosDaTela
    console.log(dadosDaTela)
})
inserir5.addEventListener('click', function(){ 
    dadosDaTela.push("5")
    tela.innerHTML = dadosDaTela
    console.log(dadosDaTela)
})
inserir6.addEventListener('click', function(){ 
    dadosDaTela.push("6")
    tela.innerHTML = dadosDaTela
    console.log(dadosDaTela)
})
inserir7.addEventListener('click', function(){ 
    dadosDaTela.push("7")
    tela.innerHTML = dadosDaTela
    console.log(dadosDaTela)
})
inserir8.addEventListener('click', function(){ 
    dadosDaTela.push("8")
    tela.innerHTML = dadosDaTela
    console.log(dadosDaTela)
})
inserir9.addEventListener('click', function(){ 
    dadosDaTela.push("9")
    tela.innerHTML = dadosDaTela
    console.log(dadosDaTela)
})
inserirDivisao.addEventListener('click', function(){ 
    dadosDaTela.push("/")
    tela.innerHTML = dadosDaTela
    console.log(dadosDaTela)
})
inserirMultiplicacao.addEventListener('click', function(){ 
    dadosDaTela.push("*")
    tela.innerHTML = dadosDaTela
    console.log(dadosDaTela)
})
inserirSubtracao.addEventListener('click', function(){ 
    dadosDaTela.push("-")
    tela.innerHTML = dadosDaTela
    console.log(dadosDaTela)
})
inserirAdição.addEventListener('click', function(){ 
    dadosDaTela.push("+")
    tela.innerHTML = dadosDaTela
    console.log(dadosDaTela)
})
inserirVirgula.addEventListener('click', function(){ 
    dadosDaTela.push(".")
    tela.innerHTML = dadosDaTela
    console.log(dadosDaTela)
})
Calcular.addEventListener('click', function(){ 
    tela.innerHTML = dadosDaTela
    console.log(dadosDaTela)
})
