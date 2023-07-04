// Array<T> - T[]
export function multiplicador(...args: number[]) {
  return args.reduce((ac, valor) => ac * valor, 1);
}

const result = multiplicador(1, 2, 3);

console.log(result);
