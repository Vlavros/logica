
var canvas1 = document.getElementById('canvas1')
var tela = document.querySelector('#canvas1');
var pincel = tela.getContext('2d');

pincel.fillStyle = '#52ffff';
pincel.fillRect(0, 0, 300, 200);

pincel.fillStyle = '#ff5252';
pincel.fillRect(300, 200, 300, 200);

pincel.fillStyle = '#527dff';
pincel.fillRect(300, 0, 300, 200);

pincel.fillStyle = 'green';
pincel.fillRect(0, 0, 200, 400);

pincel.fillStyle = 'yellow';
pincel.fillRect(200, 200, 100, 200);

pincel.fillStyle = 'black';
pincel.beginPath();
pincel.moveTo(300,200);
pincel.lineTo(200,400);
pincel.lineTo(400,400);
pincel.fill();

pincel.fillStyle = 'blue';
pincel.beginPath();
pincel.arc(300,155,50,0,2*3.14);
pincel.fill();

//---------------------------------------
/*
Retângulo 1: 350, 300 (cabeça).
Retângulos 2 e 3: 90, 90 (olhos).
Retângulo 4: 70, 100 (nariz).
Retângulos 5 e 6: 40, 110 (parte da boca).
O seu canvas deve ter o tamanho de 600 x 400 pixels.
*/

var creeper = document.querySelector('#creeper');
var pincel = creeper.getContext('2d');

pincel.fillStyle = '#176400';
pincel.fillRect(125, 100, 350, 300); //cabeca

pincel.fillStyle = 'black';
pincel.fillRect(175, 160, 90, 90); //olho esquedo

pincel.fillRect(335, 160, 90, 90); //olho direito

pincel.fillRect(265, 250, 70, 100); //nariz

pincel.fillRect(225, 300, 40, 110); //boca esquedo

pincel.fillRect(335, 300, 40, 110); //boca direito

//----------------------------
//esquadro
var esquadro = document.querySelector('#esquadro');
var pincel = esquadro.getContext('2d');

pincel.fillStyle = 'black';
pincel.beginPath();
pincel.moveTo(50, 50);
pincel.lineTo(50, 400);
pincel.lineTo(400, 400);
pincel.fill();

pincel.fillStyle = 'white';
pincel.beginPath();
pincel.moveTo(100, 175);
pincel.lineTo(100, 350);
pincel.lineTo(275, 350);
pincel.fill();

//---------------------
//bandeira brasil
var brasil = document.querySelector('#brasil');
var pincel = brasil.getContext('2d');

pincel.fillStyle = 'green';
pincel.fillRect(0, 0, 600, 400);

pincel.fillStyle = 'yellow';
pincel.beginPath();
pincel.moveTo(50, 200);
pincel.lineTo(300, 50);
pincel.lineTo(550, 200);
pincel.fill();

pincel.beginPath();
pincel.moveTo(50, 200);
pincel.lineTo(300, 350);
pincel.lineTo(550, 200);
pincel.fill();

pincel.fillStyle="darkblue";
pincel.beginPath();
pincel.arc(300, 200, 100, 0, 2*3.14);
pincel.fill();

//---------------------
//aula

function desenharQuadrado(cor,x,y) {
	var canvas2 = document.querySelector('#canvas2');
	var pincel = canvas2.getContext('2d');
	pincel.fillStyle = cor;
	pincel.fillStroke = 'black';
	pincel.fillRect(x, y, 50, 50);
	pincel.strokeRect(x, y, 50, 50);

}

for (var x = 0; x <= 600; x=x+50) {
	desenharQuadrado("green",x,0);
	desenharQuadrado("yellow",x,50);
	desenharQuadrado("red",x,100);
	desenharQuadrado("blue",x,150);
}

//----------------------
//Uma inofensiva flor...
function desenhaCirculo(x, y, raio, cor) {
	var canvas2 = document.querySelector('#canvas2');
	var pincel = canvas2.getContext('2d');

    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2*3.14);
    pincel.fill();
}

function desenharFlor(x,y) {
	desenhaCirculo(x,y,25,"red"); //meio
	
	desenhaCirculo(x,y-50,25,"yellow"); //cima

	desenhaCirculo(x-50,y,25,"orange"); //esquerda
	desenhaCirculo(x,y+50,25,"blue"); //baixo
	desenhaCirculo(x+50,y,25,"black"); //direita
}

desenharFlor(300,200);
desenharFlor(100,50);
desenharFlor(400,300);

//----------------------
//fração 
function desenharFracao(x,y,divisor,dividendo,cor) {
	var fracao = document.querySelector('#fracao');
	var pincel = fracao.getContext('2d');

	y=y+20;

	pincel.font='20px Georgia';
	pincel.fillStyle='black';
	pincel.fillText("Qual é a fração?", x, y);

	y=y+20;

	pincel.fillStyle = cor;
	pincel.fillStroke = 'black';

	for (var i = 1; i <= divisor; i++) {
		pincel.strokeRect((50*i)+x, y, 50, 50);
		if(dividendo > 0) {
			pincel.fillRect((50*i)+x, y, 50, 50);
			dividendo--;
		}
	}
	

}

desenharFracao(50,0,10,8,"green");

//----------------------
//barra

var serie2015 = [50, 25, 20, 5];
var serie2016 = [65, 20, 13, 2];

var cores = ['blue', 'green', 'yellow', 'red'];

var fracao = document.querySelector('#fracao');
var pincel = fracao.getContext('2d');

function desenhaRetangulo(x, y, largura, altura, cor) {
	//pincel.beginPath();
    pincel.fillStyle=cor;
    pincel.fillRect(x,y, largura, altura);
    pincel.strokeStyle='black';
    pincel.strokeRect(x,y, largura, altura);
}

function desenhaTexto(x, y, texto) {

    pincel.font='15px Georgia';
    pincel.fillStyle='black';
    pincel.fillText(texto, x, y);    
}

function desenhaBarra(x, y, serie, cores, texto) {
	
	//console.log(serie);

	//desenhaTexto(x, y + 10, texto);

	for (var i = 0; i < serie.length; i++) {
		y = y-(serie[i]*2);
		desenhaRetangulo(x,y,50,(serie[i]*2),cores[i]);
	}
	desenhaTexto(x, y-10, texto);
}

desenhaBarra(50, 350, serie2015, cores, '2015');
desenhaBarra(150, 350, serie2016, cores, '2016');

//------------------
//Esquadro #2
function desenharEsquadro(xa, ya, xc, yc, cor) {
    var fracao = document.querySelector('#fracao');
    var pincel = fracao.getContext('2d');

    pincel.fillStyle=cor;
    pincel.beginPath();
    pincel.moveTo(xa, ya);
    pincel.lineTo(xa, yc);
    pincel.lineTo(xc, yc);
    pincel.fill();

	pincel.fillStyle = 'white'
    pincel.beginPath();
    pincel.moveTo((6*xa + xc)/7, (9*ya + 5*yc)/14);
    pincel.lineTo((6*xa + xc)/7, (ya + 6*yc)/7);
    pincel.lineTo((5*xa + 9*xc)/14, (ya + 6*yc)/7);
    pincel.fill();

}

desenharEsquadro(250,150,400,300,"black");
//desenharEsquadro(260,180,375,290,"blue");

//------------------
//Exercicio 3
function exercicio3() {
	var brushCor = document.querySelector('#brushCor');
	var exercicio3 = document.querySelector('#exercicio3');
	var pincel = exercicio3.getContext('2d');
	var cores = ["blue", "red", "green"];
	var cor = 0;
	var raio = 10;

	pincel.fillStyle = "grey";
	pincel.fillRect(0,0,600,400);

	function exibirCirculo(e) {
		//console.log(e);
		var x = e.pageX - exercicio3.offsetLeft;
		var y = e.pageY - exercicio3.offsetTop;

		console.log(brushCor);
		//pincel.fillStyle = cores[cor];
		pincel.fillStyle = brushCor.value;
		pincel.beginPath();

		if (e.shiftKey && e.altKey) {
	        alert('Só aperte uma tecla por vez, por favor!');
	        return false;
		} else if(e.shiftKey && raio < 40) {
			raio = raio+5;
		} else if(e.altKey && raio > 5) {
			raio = raio-5;
		}

		pincel.arc(x,y,raio,0,2*3.14);

		pincel.fill();

	}

	function apertarTecla(e) {
		//console.log(e);
		if(e.keyCode == 114) { //r
			raio = 10;
		}
	}

	function mudarCorCirculo() {
		//document.addEventListener('contextmenu', event => event.preventDefault());
		if(cor == (cores.length-1)) {
			cor = 0;
		} else {
			cor = cor+1;
		}
		//document.getElementById("exercicio3").addEventListener('contextmenu', event => event.preventDefault());
		return false;
	}

	var desenha = false;

	window.addEventListener( "keypress", apertarTecla, false);
	//exercicio3.onclick = exibirCirculo;
	exercicio3.oncontextmenu = mudarCorCirculo;
	exercicio3.onmousedown = function() {desenha = true};
	exercicio3.onmouseup = function() {desenha = false};
	exercicio3.onmousemove = function(e) {if(desenha) {exibirCirculo(e);}};
}
document.querySelector('#iniciaPintura').onclick = exercicio3;
//-------------------------------------
//tiro ao alvo
var alvo = document.querySelector('#alvo');
var pincel = alvo.getContext('2d');

pincel.fillStyle = 'lightgray';
pincel.fillRect(0, 0, 600, 400);

var raio = 10;

function desenhaCirculo(x, y, raio, cor) {

    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
}

desenhaCirculo(300,200, raio + 20, 'red'); // maior círculo
desenhaCirculo(300,200, raio + 10, 'white');
desenhaCirculo(300,200, raio, 'red'); // menor circulo

function dispara(evento) {

    var x = evento.pageX - alvo.offsetLeft;
    var y = evento.pageY - alvo.offsetTop;

    console.log(x+","+y)

   // lógica de acerto?
   if(x < 300+raio && x > 300-raio && y < 200+raio && y> 200-raio) {
   		alert("Acertou o alvo!");
   }

}

alvo.onclick = dispara;

//-------------------------------------
//Mover elementos

var exercicio4 = document.querySelector('#exercicio4');
var pExercicio4 = exercicio4.getContext('2d');
var x = 0;
var rExercicio4 = 10;

pExercicio4.fillStyle = 'lightgray';
pExercicio4.fillRect(0, 0, 600, 400);

function desenhaCirculo2(x,y,raio) {
	pExercicio4.fillStyle = 'blue';
	pExercicio4.beginPath();
	pExercicio4.arc(x,y,raio,0,2*Math.PI)
	pExercicio4.fill();
}

function limparTela(pincel) {
	pincel.clearRect(0,0,600,400);
}

function exibirMensagemNoConsole() {
	console.log('chamei funcao');
}

function limparCirculo(x,y,raio,pincel) {
	pincel.clearRect(x-raio,y-raio,raio*2,raio*2);
}

function andarCirculoDireita() {
	x++;
}

function andarCirculoEsquerda() {
	x--;
}

var direcao = andarCirculoDireita;
function atualizarTela() {
	if(x > 600) { 
		direcao = andarCirculoEsquerda;
	} else if(x < 0) {
		direcao = andarCirculoDireita;
	}

	limparCirculo(x,20,rExercicio4,pExercicio4)
	direcao();
	
	//limparTela(pExercicio4);

	desenhaCirculo2(x,20,rExercicio4);
}

setInterval(atualizarTela,10);

//setInterval(exibirMensagemNoConsole,2000)

/*
for (var x = 20; x < 600; x++) {
	
	desenhaCirculo2(x,20,10);
}
*/
//---------------------------
//Pulsar
var pulsar = document.querySelector('#exercicio4');
var pPulsar = pulsar.getContext('2d');
var rPulsar = 20;
var pulso = 1;

function pulsarCirculo() {
	if(rPulsar < 20) {
		//console.log(rPulsar);
		pulso = 1;
	} else if(rPulsar > 30) {
		pulso = -1;
	}

	limparCirculo(100,100,rPulsar,pPulsar);

	rPulsar = rPulsar + pulso;	

	pPulsar.fillStyle = 'blue';
	pPulsar.beginPath();
	pPulsar.arc(100,100,rPulsar,0,2*Math.PI)
	pPulsar.fill();

}

setInterval(pulsarCirculo,20);

//---------------------------
//Movendo a bolinha pelo teclado

var movimento = document.querySelector('#movimento');
var pMovimento = movimento.getContext('2d');
var xMovimento = 0;
var yMovimento = 0;
var rMovimento = 10;
var mTaxa = 10;

function posicionarBola() {
	//limparCirculo(xMovimento,yMovimento,rMovimento,pMovimento);
	limparTela(pMovimento);

	pMovimento.fillStyle = 'blue';
	pMovimento.beginPath();
	pMovimento.arc(xMovimento,yMovimento,rMovimento,0,2*Math.PI)
	pMovimento.fill();
}

function movimentarBolar(e) {
	//console.log(e);
	if(e.keyCode == 38) { //subir
		yMovimento = yMovimento - mTaxa;
	} else if(e.keyCode == 40) { //descer
		yMovimento = yMovimento + mTaxa;
	} else if(e.keyCode == 39) { //direita
		xMovimento = xMovimento + mTaxa;
	} else if(e.keyCode == 37) { //esquerda
		xMovimento = xMovimento - mTaxa;
	} else {
		return true;
	}
	return false;
}

//window.addEventListener( "onkeydown", movimentarBolar, false);
document.onkeydown = movimentarBolar;
setInterval(posicionarBola,20);

//---------------------------
//Trocando bandeiras

function desenhaBandeiraBrasil() {
    var tela = document.querySelector('#bandeiras');
    var pincel = tela.getContext('2d');

    pincel.fillStyle="green";
    pincel.fillRect(0, 0, 600, 400);

    pincel.fillStyle="yellow";
    pincel.beginPath();
    pincel.moveTo(300, 50);
    pincel.lineTo(50, 200);
    pincel.lineTo(550, 200);
    pincel.fill();

    pincel.beginPath();
    pincel.moveTo(50, 200);
    pincel.lineTo(300, 350);
    pincel.lineTo(550, 200);
    pincel.fill();

    pincel.fillStyle="darkblue";
    pincel.beginPath();

    pincel.arc(300, 200, 100, 0, 2* 3.14);
    pincel.fill();
}


function desenhaBandeiraAlemanha() {
    var tela = document.querySelector('#bandeiras');
    var pincel = tela.getContext('2d');

    pincel.fillStyle = 'black';
    pincel.fillRect(0, 0, 600, 133);

    pincel.fillStyle = 'red';
    pincel.fillRect(0, 133, 600, 133);

    pincel.fillStyle = 'yellow';
    pincel.fillRect(0, 266, 600, 133);
}

//desenhaBandeiraBrasil();
//setInterval(desenhaBandeiraAlemanha,3000);
//setInterval(desenhaBandeiraBrasil,6000);

var brasil = true;
function trocarBandeira() {
	if(brasil) {
		desenhaBandeiraBrasil();
	} else {
		desenhaBandeiraAlemanha();
	}

	brasil = !brasil; //inverter boleano
}

setInterval(trocarBandeira,3000);

//--------------------------------
// Acertar alvo aleatório
var alvo2 = document.querySelector('#alvo2');
var pAlvo2 = alvo2.getContext('2d');

pAlvo2.fillStyle = 'lightgray';
pAlvo2.fillRect(0, 0, 600, 400);

var aRaio = 10;
var xAleatorio = 0;
var yAleatorio = 0;

function desenharAlvo() {

	limparTela(pAlvo2);

	xAleatorio = sortearAlvo(600);
	yAleatorio = sortearAlvo(400);

    pAlvo2.fillStyle = 'red';
    pAlvo2.beginPath();
    pAlvo2.arc(xAleatorio, yAleatorio, aRaio + 20, 0, 2 * Math.PI);
    pAlvo2.fill();

    pAlvo2.fillStyle = 'white';
    pAlvo2.beginPath();
    pAlvo2.arc(xAleatorio, yAleatorio, aRaio + 10, 0, 2 * Math.PI);
    pAlvo2.fill();

    pAlvo2.fillStyle = 'red';
    pAlvo2.beginPath();
    pAlvo2.arc(xAleatorio, yAleatorio, aRaio, 0, 2 * Math.PI);
    pAlvo2.fill();

}

function dispararNoAlvo(evento) {

    var x = evento.pageX - alvo2.offsetLeft;
    var y = evento.pageY - alvo2.offsetTop;

    console.log(x+","+y)

   // lógica de acerto?
   if(x < xAleatorio+aRaio && x > xAleatorio-aRaio && y < yAleatorio+aRaio && y> yAleatorio-aRaio) {
   		alert("Acertou o alvo!");
   }

}

function sortearAlvo(maximo) {
	return Math.floor(Math.random() * maximo);
}


setInterval(desenharAlvo,1000);


alvo2.onclick = dispararNoAlvo;