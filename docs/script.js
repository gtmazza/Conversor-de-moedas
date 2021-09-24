console.log("alo alo alo alo alo");

function ConverterReal() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmReal = valorEmDolarNumerico * 5;

  console.log(valorEmReal);

  var elementoValorConvertidoReal = document.getElementById(
    "valorConvertidoReal"
  );
  var valorConvertidoReal = "O resultado em Real é R$ " + valorEmReal;
  elementoValorConvertidoReal.innerHTML = valorConvertidoReal;

  //apagar euro
  var elementoValorConvertidoEuro = document.getElementById(
    "valorConvertidoEuro"
  );
  elementoValorConvertidoEuro.innerHTML = " ";
}

function ConverterEuro() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmEuro = valorEmDolarNumerico * 0.84;

  var elementoValorConvertidoEuro = document.getElementById(
    "valorConvertidoEuro"
  );
  var valorConvertidoEuro = "O resultado em Euro é €$ " + valorEmEuro;
  elementoValorConvertidoEuro.innerHTML = valorConvertidoEuro;

  //apagar real
  var elementoValorConvertidoReal = document.getElementById(
    "valorConvertidoReal"
  );
  elementoValorConvertidoReal.innerHTML = " ";
}