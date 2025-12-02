
// Abordagem  Imperativa
const vendas = [150, 0, null, 300, 50, 10, 1200, "CANCELADA", 55];
let fatuTotalImperativo = 0 //variavel mutável para guardar o resultado

for (let i = 0; i < vendas.length; i++){ // estrutura de repetição ira decorrer a lista toda
    const venda = vendas[i] 

    if(typeof venda === 'number' && venda > 0){ //ira verificar se o valor é um número E se é maior que zero.
        const vendaLiquida = venda * 0.9; // aplicar os desconto

        fatuTotalImperativo = fatuTotalImperativo + vendaLiquida // guardar o resultado na variavel mutável
    }
}

console.log(console.log(`Faturamento Final: R$ ${fatuTotalImperativo.toFixed(2)}`)); //resutlado do faturamento final, e filtrando a casa decimais

// Abordagem Funcional

const lista = [150, 0, null, 300, 50, 10, 1200, "CANCELADA", 55];
const faturamento = lista

    .filter(valor => typeof valor === "number" && valor > 0)
    .map(valor => valor * 0.9)
    .reduce((total, valor) => total + valor,0);

console.log(`Faturamento Final: R$ ${faturamento.toFixed(2)}`)