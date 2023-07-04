//objects

const objectA: {
  readonly chaveA: string; // so é possivel ler e nao alterar
  chaveB: string;
  chaveC?: string; //quando sei que vai entrar uma chaveC
  [key: string]: unknown;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

//nao se pode adicionar mais chaves no ObjectA mas ainda se pode mudar os valores

console.log(objectA.chaveA);
