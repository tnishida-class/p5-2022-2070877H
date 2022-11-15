// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;
let size;

function setup(){
  createCanvas(200, 200);
  count = 0;
  counta =50;
  cycle = 50;
  size=50;
}

function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle;
  //counta = (counta - 1)% cycle;
  // BLANK[1]
  fill(246,152,150)
  ellipse(width/2,height/2 , size);
  if(count<25){
  size=count;
  }
  else{
  size= 50-count;
  }



}
