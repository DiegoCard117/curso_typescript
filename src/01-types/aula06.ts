//tuple - arrey com dois ou mais tipos
//readonly para nao ser capaz de fazer push e pop
const dadosCliente: [number, string] = [1, 'Diego'];
dadosCliente.push('Cardoso');
dadosCliente[0] = 100;
console.log(dadosCliente);
