let v1 = Number(prompt('Informe o valor do primeiro produto: '))
let q1 = Number(prompt('Quantos produtos você comprou? '))
let v2 = Number(prompt('Informe o valor do segundo produto: '))
let q2 = Number(prompt('Quantos produtos você comprou? '))
let ipi = Number(prompt('Informe o valor do IPI:'))
let vt = (v1 * q1 + v2 * q2) * (ipi / 100 + 1)

document.write(`O valor total a ser pago é R$${vt.toFixed(2)}`)
