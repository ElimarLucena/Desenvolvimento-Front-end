const randomNumber = () => {
  return Math.floor(Math.random() * 101);
}
console.log(randomNumber());

const division = (number, callback) => (number - callback);
console.log(division(100, randomNumber()))

module.exports = { randomNumber, division }

// Crie uma função que gere um número aleatório
// Defina uma função que gere um número aleatório entre 0 e 100.
// Desenvolva os testes para essa função.
// Utilize o mock e defina o retorno padrão como 10.
// Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.