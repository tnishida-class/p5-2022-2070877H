// 小手調べ
function setup(){
  for(let i = 0; i < 10; i++){
    // BLANK[1]
   if(i<5) {
    stroke(255,0,0);
    let x=(100-10*i);
   ellipse(50,50,x);
   }
   else{
    stroke(0,0,255);
    let x=(100-10*i);
   ellipse(50,50,x);
   }
   
  }
}
