// tipos e undeffined
let x;
if (typeof x === 'undefined') x = 20;
//console.log(x * 2);

export function createPerson( //abertuna(parametros)
  firstName: string,
  lastName?: string, //string ou undeffined
): {
  firstName: string;
  lastName?: string; //type
} {
  return {
    firstName,
    lastName, //corpo
  };
}

export function squareOf(x: any) {
  //if (typeof x !== 'number') console.log('nao é um numero');
  //return x * x;
  if (typeof x === 'number') return x * x;
  return null;
}

const two = squareOf('teste');
console.log(two);
