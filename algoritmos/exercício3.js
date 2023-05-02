let sm = Number(prompt(' Digite o valor do salário mínimo:'))
let su = Number(prompt('Informe seu salário:'))
let qs = su / sm

document.write(`Você recebe ${qs.toFixed(2)} salários mínimos`)