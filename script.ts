enum OperatorTypes {
    Plus = "+",
    Minus = "-",
    Mult = "*",
    Div = "/",
};
type Operator = OperatorTypes;

function calculator(num1: number, num2: number, operador: Operator) {
    let resultado;
    switch (operador) {
        case "+":
            return num1 + num2
            break;
        case "-":
            return num1 - num2
            break;
        case "*":
            return num1 * num2
            break;
        case "/":
            return num1 / num2
            break;
        default:
            return "Impossivel calcular"
    }
    return resultado;
}

const calculate = document.getElementById("calculate")
calculate?.addEventListener("click", () => {
    const num1 = document.getElementById("num1") as HTMLInputElement;
    const num2 = document.getElementById("num2") as HTMLInputElement;
    const operador = document.getElementById("operator") as HTMLSelectElement;
    const result = calculator(parseInt(num1.value), parseInt(num2.value), <Operator>operador.value);
    const resultado = document.getElementById("resultado") as HTMLParagraphElement;
    resultado.innerText = `seu resultado é ${result}`
})

