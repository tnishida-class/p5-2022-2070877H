// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(102,170,255);
  balloon("I love keyakizaka46");
}

function balloon(t){

let w=textWidth(t);
let h=textAscent()+textDescent();

fill(255,215,0);

beginShape();
vertex(25,25);
vertex(25+w,25);
vertex(25+w,25+h);
vertex(25,25+h);
vertex(25,40);
vertex(0,40);
vertex(25,30);
endShape(CLOSE);

fill(0,0,0);
text(t,25,25+h);


}
