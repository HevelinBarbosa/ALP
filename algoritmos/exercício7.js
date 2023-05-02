let pc = Number(prompt('Qual o preço de custo do produto?'))
let pa = Number(prompt('Digite o percentual de acréscimo:'))
let vv = pc * (pa / 100 + 1)

document.write(`O valor de venda será ${vv.toFixed}`)