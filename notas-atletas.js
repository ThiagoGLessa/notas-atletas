function calculaMedia(objAtletas) {

    let notasAtletas = objAtletas.map(function (nota) {
      return nota.notas
    })
  
    let notasOrdenadas = notasAtletas.map(function (nota) {
      return nota.sort(function (a, b) { return a - b })
    })
  
  
    let notasComputadas = notasOrdenadas.map(function (nota) {
      return nota.slice(1, objAtletas.length)
    })
  
  
    let mediaNotas = notasComputadas.map(function (nota) {
      return (nota[0] + nota[1] + nota[2]) / nota.length
    })
  
    let array = []
  
    for (let i = 0; i < objAtletas.length; i++) {
      array.push({
        atleta: objAtletas[i].nome,
        notas: objAtletas[i].notas,
        media: mediaNotas[i]
      })
    }
    // Abaixo está um for onde deixa tudo organizado dentro de uma string o nome, notas e média dos atletas
  
    /*for (let i = 0; i < objAtletas.length; i++){
      console.log(`Atleta: ${objAtletas[i].nome} 
  Notas: ${objAtletas[i].notas} 
  Média: ${mediaNotas[i]}
  `)
    }*/
  
    return array
  }
  
  let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas: [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
  ];
  
  console.log(calculaMedia(atletas))