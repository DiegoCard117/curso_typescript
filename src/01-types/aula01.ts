/*  eslint-disable */

let nome: string = 'Diego'
let idade: number = 30
let adulto: boolean = true
let simbolo: symbol = Symbol('qualquer simbolo')
// let big: bigint = 10n

//Arrays

let arrayNumbers: Array<number> = [1, 2, 3]
let arrayNumbers2: number[] = [1, 2, 3]

let arrayNames: Array<string> = ['Diego', 'Yasmin']
let arrayNames2: string[] = ['Diego', 'Yasmin']


// Objects
let pessoa: {nome: string, idade: number} = {
  nome: 'Diego',
  idade: 21
}
//tipos opcionais usa-se uma interrogaçao "nome?: string"

//Funçoes

function soma(x:number, y:number) {
  return x + y
}

const somar: (x:number, y:number) => number = (x, y) => x + y

const dobro = soma(2,2)


