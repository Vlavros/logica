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
let oVelocidadeY;

let meusPontos = 0;
let oponetePontos = 0;

function preload() {
  soundFormats('mp3', 'ogg');
  trilhaSound = loadSound('assets/trilha.mp3');
  raquetadaSound = loadSound('assets/raquetada.mp3');
  pontoSound = loadSound('assets/ponto.mp3');
}

function setup() {
  createCanvas(xCanva, yCanva);
  tocarBackgroundSound();
}

function draw() {
  background(0);
  
  circle(xBola, yBola, dBola); //Criar bola  
  rect(mXRaquete,mYRaquete,mWRaquete,mHRaquete); //Criar minhaRaquete
  rect(oXRaquete,oYRaquete,oWRaquete,oHRaquete); //Crirar oponenteRaquete
  
  moverBola();
  
  moverMinhaRaquete();
  moverOponenteRaquete();
  
  colidirRaquete();
  
  montarPlacar();   
  
  
}

function tocarBackgroundSound() {

  trilhaSound.setVolume(0.1);
  trilhaSound.play();
  
}

function moverBola() {
  if(xBola > width-rBola || xBola-rBola < 0) {
    velocidadeXBola *= -1;

    pontoSound.setVolume(0.1);
    pontoSound.play();
    
    if(xBola > width-rBola) {
      meusPontos += 1;
    } else {
      oponetePontos += 1;
    }
  }
  
  if(yBola > height-rBola || yBola-rBola < 0) {
    velocidadeYBola *= -1;
  }
  
  xBola += velocidadeXBola;
  yBola += velocidadeYBola;
}

function montarPlacar() {
  
  fill(color(255,140,0));
  rect(240,4,90,30);
  
  textSize(32);
  fill(255);
  text(meusPontos + ' x ' + oponetePontos, 250, 30);
  
}

function colidirRaquete() {
  if((xBola-rBola <= mXRaquete+mWRaquete && 
      (yBola <= mYRaquete+mHRaquete && yBola >= mYRaquete)) || 
      (xBola >= oXRaquete && 
      (yBola-rBola <= oYRaquete+mHRaquete && yBola >= oYRaquete))){
      
    velocidadeXBola *= -1;  
    
    raquetadaSound.setVolume(0.1);
    raquetadaSound.play();
    
  } 
}

function moverMinhaRaquete() {

  if (keyIsDown(DOWN_ARROW) && mYRaquete+mHRaquete < height) {
    mYRaquete += velocidade;
  } else if(keyIsDown(UP_ARROW) && mYRaquete > 0) {
    mYRaquete -= velocidade;
  }
  
}

function moverOponenteRaquete() {
  
  let r = 30//random(30,60);
  
  oVelocidadeY = yBola - oYRaquete - oHRaquete / 2 - r;
  
  if((oYRaquete + oVelocidadeY) > 0 && (oYRaquete + oVelocidadeY) < height) {
    oYRaquete += oVelocidadeY;
  }
  
  /*
  if(yBola > oYRaquete && oYRaquete+oHRaquete < height){
    oYRaquete += velocidade;
  } else if(yBola < oYRaquete && oYRaquete > 0) {
    oYRaquete -= velocidade;
  }
  */
}


