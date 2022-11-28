// 最終課題を制作しよう

let x, y;

function setup(){
  createCanvas(windowWidth, windowHeight);

  x = 10;
  y = 300;

 }



function draw(){

//設定
background(211,255,168);

textSize(85);
 fill(0,0,0)
 text('MEIRO',20,100);

 textSize(30);
 fill(0,0,0);
 text('use ↑＆↓ keys',30,150);


//マップ
fill(195,129,80);
stroke(195,129,80);

quad(0,250,300,250,300,350,0,350);
quad(300,350,300,50,400,50,400,350);
quad(400,50,700,50,700,150,400,150);
quad(600,150,750,150,750,250,600,250);
quad(650,250,800,250,800,350,650,350);
quad(700,350,850,350,850,450,700,450);
quad(750,450,1300,450,1300,550,750,550);
quad(980,450,980,50,1100,50,1100,450);

fill(255,0,0);
stroke(0,0,0);
quad(1100,50,1300,50,1300,150,1100,150);
drawRank('1',1150,120);


fill(255,255,0);
quad(1100,150,1300,150,1300,300,1100,300);
drawRank('2',1150,250);

fill(0,191,255);
quad(1100,300,1300,300,1300,450,1100,450);
drawRank('3',1150,400);

drawRank('out',1120,500);

//球の設定
fill(0,0,0);
ellipse(x, y, 30);

if(x<=1200){
  x +=0.5;
} 

//出たら振り出しに戻る&ゴール地点での不正防止
if(y<50){
  restart(10,300);
}
if(x<300){
  if(y<250){
    restart(10,300);
  }
}
if(x<400){
  if(y>350){
    restart(10,300);
  }
}
if(x>400&&x<600){
  if(y>150){
    restart(10,300);
  }
}
if(x>600&&x<650){
  if(y>250){
    restart(10,300);
  }
}
if(x>650&&x<700){
  if(y>350){
    restart(10,300);
  }
}
if(x>700&&x<750){
  if(y>450){
    restart(10,300);
  }
}
if(x>700&&x<980){
  if(y<150){
    restart(10,300);
  }
}
if(x>750&&x<980){
  if(y<250){
    restart(10,300);
  }
}
if(x>800&&x<980){
  if(y<350){
    restart(10,300);
  }
}
if(x>850&&x<980){
  if(y<450){
    restart(10,300);
  }
}
if(y>550){
  restart(10,300);
}
if(x>1100){
  if(y==150){
    restart(720,400);
  }
}
if(x>1100){
  if(y==300){
    restart(720,400);
  }
}
if(x>1100){
  if(y==450){
    restart(720,400)
  }
}

//ランク1でゴールした際の演出
if(x>=1200){
  if(y>=50&&y<150){
    star(600,300,300);
    star(150,300,80);
    star(1000,200,40);
    star(100,500,50);
    star(1100,100,30);
    star(850,500,100);
    textSize(35);
    strokeWeight(3);
    fill(0,0,0);
    text('congratulations',470,300);
  }
}


}


function keyPressed(){
  if(keyCode == UP_ARROW){ y -= 10; }
  if(keyCode == DOWN_ARROW){ y += 10; }
}

function drawRank(w,x,y){
  textSize(50);
  stroke(0,0,0);
  fill(0,0,0);
  text(w,x,y);
}

function star(cx, cy, r){
  fill(255,0,255);
  stroke(255,0,255);
  beginShape();
  for(var i = 0; i < 5; i++){
    let theta = TWO_PI * i * 2 / 5 - HALF_PI;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}

function restart(a,b){
createCanvas(windowWidth, windowHeight);
background(211,255,168);
textSize(85);
 fill(0,0,0)
 text('MEIRO',20,100);
 textSize(30);
 fill(0,0,0);
 text('use ↑＆↓ keys',30,150);
 x=a;
 y=b;
}

  
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}