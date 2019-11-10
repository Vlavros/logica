
function mostrarTexto(msg) {
	//document.write(msg);
	document.getElementById('msg').innerHTML = document.getElementById('msg').innerHTML + msg;
	pularLinha();
}

function pularLinha(num) {
	if(num == null) {
		num = 1;
	}

	for (var i = num-1; i >= 0; i--) {
		//document.write("<br>");
		document.getElementById('msg').innerHTML = document.getElementById('msg').innerHTML + "<br>"
	}
	
}

function calcularIMC(peso,altura) {
	return peso / (altura * altura);
}

var segredo = Math.round(Math.random()*10)
var input = document.querySelector("input");
input.focus();

function verificarSorteio() {
	input.focus();
	if(parseInt(input.value) == segredo) {
		mostrarTexto("Você acertou o número sorteado!");
	} else if(parseInt(input.value) < segredo) {
		mostrarTexto("O número sorteado é maior que " + input.value);
	} else if(parseInt(input.value) > segredo) {
		mostrarTexto("O número sorteado é menor que " + input.value);
	} else {
		mostrarTexto(input.value + " não é um número válido.");
	}
}

var button = document.querySelector("button");
button.onclick = verificarSorteio;

//Imprima todos os números entre 30 e 40 (inclusive 30 e 40), porém os números 33 e 37 não devem ser impressos! No final escreva a palavra "FIM". Use o while para essa tarefa. DICA: o if pode ajudá-lo!
function num30e40() {
	var num = 30;
	while(num <= 40) {
		if(num != 33 && num != 37) {
			mostrarTexto(num);
		}
		num++;
	}
	mostrarTexto("FIM");
}
//button.onclick = num30e40;

//Imprima em ordem decrescente todos os números entre 20 e 0, incluindo os limites! No final, escreva a palavra "FIM". DICA: você pode decrementar uma variável!
function num20a0() {
	for(var x=20; x>=0; x--) {
		mostrarTexto(x);
	}
	mostrarTexto("FIM");
}
//button.onclick = num20a0;

function ingredientes() {
    var ingredientes = [];

    var quantidade = parseInt(prompt("Quantos ingredientes você vai adicionar?"));

    var contador = 1;
    var ingrediente;
    var repetido = false;

    while( contador <= quantidade) {

        repetido = false;

        ingrediente = prompt("Informe o ingrediente " + contador);

        for (var i = ingredientes.length - 1; i >= 0; i--) {
        	if(ingredientes[i] == ingrediente) {
        		repetido = true;
        		break;
        	}
        }
        
        if (repetido == false) {
        	ingredientes.push(ingrediente);	
        	contador++;
        } else {
        	alert("Você informou um ingrediente repetido: " + ingrediente + ". Tente novamente.");
        }
        
    }

    console.log(ingredientes);	
}
//button.onclick = ingredientes;

function sortearNumero() {
	return Math.round(Math.random()*10);
}

function gerarNumeros(quantidade) {
	var segredos = [];
	var num=1;
	var repetido = false;

	while(num <= quantidade) {
		var numAleatorio = sortearNumero();
		repetido = false;
		for (var i = segredos.length - 1; i >= 0; i--) {
			if(segredos[i] == numAleatorio) {
				repetido = true;
				break;
			}
		}
		
		if(repetido == false) {
			segredos.push(numAleatorio);
			num++;
		}
	}

	return segredos;
}

function adivinhacao() {
	//var segredos = [7,4,6,9];
	//var segredos = [];
	//segredos.push(7);
	//segredos.push(4);
	//segredos.push(6);
	//segredos.push(9);
	var segredos = gerarNumeros(5);

	var acertou = false;
	console.log(segredos);

	for (var i = segredos.length - 1; i >= 0; i--) {
		//console.log(segredos[i]);
		if(segredos[i] == input.value) {
			acertou = true;
			break;
		}
	}

	if(acertou == true) {
		alert("Você acertou!");
	} else {
		alert("Você errou!");
	}

	input.focus();
	input.value = "";

}
button.onclick = adivinhacao;