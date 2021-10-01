// Inicializando uma array vazia para os nomes das peças
let listaNomes = [] 
// Variável vazia para entrada das peças na array
let nome = ''
// Inicializando outra array vazia para o peso das peças
let listaPeso = [] 
// Variável vazia para entrada das peças na array
let peso = ''


do {
    nome = prompt("Digite o nome da peça ou deixe em branco para cancelar!");
    if (nome.length < 3)
    alert('O nome da peça precisa ter no mínimo 3 caracteres! \nNome digitado: ' + nome.toUpperCase+ '!')
        if (nome === "" || nome === null) 
        break;
    if (nome.length > 2 && peso > 100)
        listaNomes.push(nome);  // Nome será adicionado a array listaNomes
    if (nome.length < 3) // A pergunta pelo peso da peça só virá se o nome preencher os requisitos para entrar na array anterior.
        break
    peso = prompt("Qual o peso da peça?")
    if (peso < 101)
    alert('Peso da peça precisa ter mais de 100 gramas')
      if (peso === "" || peso === null) 
      break;
      if (peso > 100)
        listaPeso.push(peso);  // Peso será adicionado a array listaPeso
      if (peso < 101) // Caso o peso seja inválido o programa será encerrado
        break
    }
 while (listaPeso.length < 10); 
      if (listaPeso.length > 2)
      alert ('Limite de peças alcançado')
console.log(listaNomes)
console.log(listaPeso)
