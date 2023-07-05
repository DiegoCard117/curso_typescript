//never
export function criaErro(): never {
  //never pois ela nao retorna nada, mas cria um erro
  throw new Error('Erro qualquer');
}

criaErro();
