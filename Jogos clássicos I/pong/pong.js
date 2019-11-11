let xCanva = 600;
let yCanva = 400;
let velocidade = 5;

//Bola
let xBola = 300;
let yBola = 200;
let dBola = 20; //diametro
let rBola = dBola/2; //raio
let velocidadeXBola = 5;
let velocidadeYBola = 5;

//Minha Raquete
let mXRaquete = 10;
let mYRaquete = 140;
let mHRaquete = 80; //tamanho da raquete (height)
let mWRaquete = 15; //largura da raquete (width)

//Oponente Raquete
let oXRaquete = 575;
let oYRaquete = 140;
let oHRaquete = 80; //tamanho da raquete (height)
let oWRaquete = 15; //largura da raquete (width)

let meusPontos = 0;
let oponetePontos = 0;


function setup() {
  createCanvas(xCanva, yCanva);
}

function draw() {
  background(0);
  
  circle(xBola, yBola, dBola); //Criar bola  
  rect(mXRaquete,mYRaquete,mWRaquete,mHRaquete); //Criar minhaRaquete
  rect(oXRaquete,oYRaquete,oWRaquete,oHRaquete); //Crirar oponenteRaquete
  
  moverBola();
  
  moverMinhaRaquete();
  moverOponenteRaquete();
  
  textSize(32);
  text(meusPontos + ' x ' + oponetePontos, 250, 30);
  fill(255);
  
}

function moverBola() {
  if(xBola > width-rBola || xBola-rBola < 0) {
    velocidadeXBola *= -1;
    if(xBola > width-rBola) {
      meusPontos += 1;
    } else {
      oponetePontos += 1;
    }
  }
  
  if(yBola > height-rBola || yBola-rBola < 0) {
    velocidadeYBola *= -1;
  }

  if((xBola-rBola <= mXRaquete+mWRaquete && 
      (yBola <= mYRaquete+mHRaquete && yBola >= mYRaquete)) || 
      (xBola >= oXRaquete && 
      (yBola-rBola <= oYRaquete+mHRaquete && yBola >= oYRaquete))){
      
    velocidadeXBola *= -1;  
  } 
  
  xBola += velocidadeXBola;
  yBola += velocidadeYBola;
}

function moverMinhaRaquete() {

  if (keyIsDown(DOWN_ARROW) && mYRaquete+mHRaquete < height) {
    mYRaquete += velocidade;
  } else if(keyIsDown(UP_ARROW) && mYRaquete > 0) {
    mYRaquete -= velocidade;
  }
  
}

function moverOponenteRaquete() {
  
  if(yBola > oYRaquete && oYRaquete+oHRaquete < height){
    oYRaquete += velocidade;
  } else if(yBola < oYRaquete && oYRaquete > 0) {
    oYRaquete -= velocidade;
  }
}


