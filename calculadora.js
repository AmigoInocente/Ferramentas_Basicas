let tela = document.getElementById('tela')
let dadosDaTela = [];

inserir0.addEventListener('click', function(){ 
    dadosDaTela.push("0")
    tela.innerHTML = dadosDaTela
    console.log(dadosDaTela)
})
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

document.addEventListener('keydown', function(evento) {
  const teclaPressionada = evento.key;

  if (teclaPressionada === "0") { //Exemplo: tecla "0"
      dadosDaTela.push("0");
      tela.innerHTML = dadosDaTela.join('');
      console.log(dadosDaTela);
  }

  if (teclaPressionada === "1") { // Exemplo: tecla "0"
    dadosDaTela.push("1");
    for (let i = 0; i < dadosDaTela.length; i++) {
      if (i==0) {
          tela.innerHTML = dadosDaTela[i];
      }
      tela.innerHTML += dadosDaTela[i];
    }
    console.log(dadosDaTela);
  }
});

inserir0.addEventListener('keydown', function(evento) {
    const teclaPressionada = evento.key;
  
    if (teclaPressionada === "0") { // Exemplo: tecla "0"
      dadosDaTela.push("0");
      for (let i = 0; i < dadosDaTela.length; i++) {
        if (i==0) {
            tela.innerHTML = dadosDaTela[i];
        }
        tela.innerHTML += dadosDaTela[i];
      }
      console.log(dadosDaTela);
    }
});
inserir1.addEventListener('keydown', function(evento){ 
    const teclaPressionada = evento.key;
  
    if (teclaPressionada === "1") { // Exemplo: tecla "0"
      dadosDaTela.push("1");
      for (let i = 0; i < dadosDaTela.length; i++) {
        if (i==0) {
            tela.innerHTML = dadosDaTela[i];
        }
        tela.innerHTML += dadosDaTela[i];
      }
      console.log(dadosDaTela);
    }
});
inserir2.addEventListener('keydown', function(evento){ 
    const teclaPressionada = evento.key;
  
    if (teclaPressionada === "2") { // Exemplo: tecla "0"
      dadosDaTela.push("2");
      for (let i = 0; i < dadosDaTela.length; i++) {
        if (i==0) {
            tela.innerHTML = dadosDaTela[i];
        }
        tela.innerHTML += dadosDaTela[i];
      }
      console.log(dadosDaTela);
    }
});
inserir3.addEventListener('keydown', function(evento){ 
    const teclaPressionada = evento.key;
  
    if (teclaPressionada === "3") { // Exemplo: tecla "0"
      dadosDaTela.push("3");
      for (let i = 0; i < dadosDaTela.length; i++) {
        if (i==0) {
            tela.innerHTML = dadosDaTela[i];
        }
        tela.innerHTML += dadosDaTela[i];
      }
      console.log(dadosDaTela);
    }
});
inserir4.addEventListener('keydown', function(evento){ 
    const teclaPressionada = evento.key;
  
    if (teclaPressionada === "4") { // Exemplo: tecla "0"
      dadosDaTela.push("4");
      for (let i = 0; i < dadosDaTela.length; i++) {
        if (i==0) {
            tela.innerHTML = dadosDaTela[i];
        }
        tela.innerHTML += dadosDaTela[i];
      }
      console.log(dadosDaTela);
    }
});
inserir5.addEventListener('keydown', function(evento){ 
    const teclaPressionada = evento.key;
  
    if (teclaPressionada === "5") { // Exemplo: tecla "0"
      dadosDaTela.push("5");
      for (let i = 0; i < dadosDaTela.length; i++) {
        if (i==0) {
            tela.innerHTML = dadosDaTela[i];
        }
        tela.innerHTML += dadosDaTela[i];
      }
      console.log(dadosDaTela);
    }
});
inserir6.addEventListener('keydown', function(evento){ 
    const teclaPressionada = evento.key;
  
    if (teclaPressionada === "6") { // Exemplo: tecla "0"
      dadosDaTela.push("6");
      for (let i = 0; i < dadosDaTela.length; i++) {
        if (i==0) {
            tela.innerHTML = dadosDaTela[i];
        }
        tela.innerHTML += dadosDaTela[i];
      }
      console.log(dadosDaTela);
    }
});
inserir7.addEventListener('keydown', function(evento){ 
    const teclaPressionada = evento.key;
  
    if (teclaPressionada === "7") { // Exemplo: tecla "0"
      dadosDaTela.push("7");
      for (let i = 0; i < dadosDaTela.length; i++) {
        if (i==0) {
            tela.innerHTML = dadosDaTela[i];
        }
        tela.innerHTML += dadosDaTela[i];
      }
      console.log(dadosDaTela);
    }
});
inserir8.addEventListener('keydown', function(evento){ 
    const teclaPressionada = evento.key;
  
    if (teclaPressionada === "8") { // Exemplo: tecla "0"
      dadosDaTela.push("8");
      for (let i = 0; i < dadosDaTela.length; i++) {
        if (i==0) {
            tela.innerHTML = dadosDaTela[i];
        }
        tela.innerHTML += dadosDaTela[i];
      }
      console.log(dadosDaTela);
    }
});
inserir9.addEventListener('keydown', function(evento){ 
    const teclaPressionada = evento.key;
  
    if (teclaPressionada === "9") { // Exemplo: tecla "0"
      dadosDaTela.push("9");
      for (let i = 0; i < dadosDaTela.length; i++) {
        if (i==0) {
            tela.innerHTML = dadosDaTela[i];
        }
        tela.innerHTML += dadosDaTela[i];
      }
      console.log(dadosDaTela);
    }
});
inserirDivisao.addEventListener('keydown', function(evento){ 
    const teclaPressionada = evento.key;
  
    if (teclaPressionada === "/") { // Exemplo: tecla "0"
      dadosDaTela.push("÷");
      tela.innerHTML = dadosDaTela;
      console.log(dadosDaTela);
    }
});
inserirMultiplicacao.addEventListener('keydown', function(evento){ 
    const teclaPressionada = evento.key;
  
    if (teclaPressionada === "*") { // Exemplo: tecla "0"
      dadosDaTela.push("*");
      tela.innerHTML = dadosDaTela;
      console.log(dadosDaTela);
      
    }
});
inserirSubtracao.addEventListener('keydown', function(evento){ 
    const teclaPressionada = evento.key;
  
    if (teclaPressionada === "-") { // Exemplo: tecla "0"
      dadosDaTela.push("-");
      tela.innerHTML = dadosDaTela;
      console.log(dadosDaTela);
    }
});
inserirAdição.addEventListener('keydown', function(evento){ 
    const teclaPressionada = evento.key;
  
    if (teclaPressionada === "+") { // Exemplo: tecla "0"
      dadosDaTela.push("+");
      tela.innerHTML = dadosDaTela;
      console.log(dadosDaTela);
    }
});
inserirVirgula.addEventListener('keydown', function(evento){ 
    const teclaPressionada = evento.key;
  
    if (teclaPressionada === ".") { // Exemplo: tecla "0"
      dadosDaTela.push(".");
      tela.innerHTML = dadosDaTela;
      console.log(dadosDaTela);
    }
});
Calcular.addEventListener('keydown', function(evento){ 
    const teclaPressionada = evento.key;
  
    if (teclaPressionada === "Enter") { // Exemplo: tecla "0"
      // Fazer calculo
      tela.innerHTML = dadosDaTela;
      console.log(dadosDaTela);
    }
});