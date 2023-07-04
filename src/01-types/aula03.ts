//void
function noReturn(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Diego',
  sobrenome: 'Cardoso',

  exibir(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

//noReturn('Diego', 'Cardoso');
pessoa.exibir();
export { pessoa };
