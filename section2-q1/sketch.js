// 小手調べ
function setup(){
  for(let i = 0; i < 10; i++){
    // BLANK[1]
   if(i<5) {
    stroke(255,0,0);
   }
   else{
    stroke(0,0,255);
   }
   let x=(100-10*i);
   ellipse(50,50,x);
  }
}


//2－2ペースト用
let I=(i+1)*25
let J=j*25

fill(255,0,0);//赤色
ellipse(I-12.5,J-12.5,25);

