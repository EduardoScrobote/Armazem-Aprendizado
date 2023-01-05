var OperatorTypes;
(function (OperatorTypes) {
    OperatorTypes["Plus"] = "+";
    OperatorTypes["Minus"] = "-";
    OperatorTypes["Mult"] = "*";
    OperatorTypes["Div"] = "/";
})(OperatorTypes || (OperatorTypes = {}));
;
function calculator(num1, num2, operador) {
    var resultado;
    switch (operador) {
        case "+":
            return num1 + num2;
            break;
        case "-":
            return num1 - num2;
            break;
        case "*":
            return num1 * num2;
            break;
        case "/":
            return num1 / num2;
            break;
        default:
            return "Impossivel calcular";
    }
    return resultado;
}
var calculate = document.getElementById("calculate");
calculate === null || calculate === void 0 ? void 0 : calculate.addEventListener("click", function () {
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    var operador = document.getElementById("operator");
    var result = calculator(parseInt(num1.value), parseInt(num2.value), operador.value);
    var resultado = document.getElementById("resultado");
    resultado.innerText = "seu resultado \u00E9 ".concat(result);
});
