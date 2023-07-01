let img = [];
let j=0;
let j1 = 0;
let j2 = 0;
let j3 = 0; 
let l;
let namep;

function preload(){
  txt = loadStrings('images/data0.txt')
//  for( i=0; i<6; i++){
//    img[i] = loadImage('images/'+txt[0])
//  }
}

function setup() {
  l = txt.length;
  for( i=0; i<txt.length; i++){
    pic = 'images/'+txt[i]
    img[i] = loadImage(pic)
  }
  c1 = createCanvas(1000, 619);
  c1.position(0,130);
  namep1 = createP('your name');
  namep1.style('font-size', '30px');
  namep1.position(20, 0);
  namep2 = createP('your name');
  namep2.style('font-size', '30px');
  namep2.position(20, 30);
  namep3 = createP('your name');
  namep3.style('font-size', '30px');
  namep3.position(20, 60);
  button1B = createButton('(-) Decrease');
  button1B.position(150,40 );
  button1B.mousePressed(changeGraphMinus1);
  button2B = createButton('(+) Increase');
  button2B.position(250, 40 );
  button2B.mousePressed(changeGraphPlus1);
  button1p = createButton('(-) Decrease');
  button1p.position(150,70 );
  button1p.mousePressed(changeGraphMinus2);
  button2p = createButton('(+) Increase');
  button2p.position(250, 70 );
  button2p.mousePressed(changeGraphPlus2);
  button1a = createButton('(-) Decrease');
  button1a.position(150,100 );
  button1a.mousePressed(changeGraphMinus3);
  button2a = createButton('(+) Increase');
  button2a.position(250, 100 );
  button2a.mousePressed(changeGraphPlus3);
}

function changeGraphPlus1() {
  j1++;
  if(j1>20){
    j1=0;
  }
}

function changeGraphMinus1() {
  j1--;
  if(j1<0){
    j1=20;
  }
}

function changeGraphPlus2() {
  j2++;
  if(j2>5){
    j2=0;
  }
}

function changeGraphMinus2() {
  j2--;
  if(j2<0){
    j2=5;
  }
}

function changeGraphPlus3() {
  j3++;
  if(j3>4){
    j3=0;
  }
}

function changeGraphMinus3() {
  j3--;
  if(j3<0){
    j3=4;
  }
}

function draw() {
  background(220);
  j = j1+21*j2+126*j3;
  image(img[j], 0, 0);
  text(txt[j], 10, 30);
  namep1.html('Bs/Es='+round(0.100*j1,1))
  namep2.html('p='+round(0.01*j2,2))
  namep3.html('a0='+round((j3+1),1))
}