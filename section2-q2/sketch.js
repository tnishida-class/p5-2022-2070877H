// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      console.log(i, j); // 補足： i,j の変化がわかりやすくなるように入れています
      strokeWeight(0);
      let n=i+j;
      if(n%2 == 1)
        {
            //jが0から2の時は赤丸
          if(j<=3)
          {

 
          let u=(i+1)*25;
          let I=u-12.5;
          let J=j*25;
            
          fill(255,0,0);//赤色
          ellipse(I-25,J-12.5,25); 

          fill(255,0,0);
          ellipse(187.5,12.5,25);

            
      
          }
            //jが3と4の時
          if(j==4&&j==5)
          {
          

          }
            //jが5から7の時は黒丸
          if(6<=j&&j<=8)
          {
         // let a=i*25
          //let A=a+12.5
          //let B=j*25

          //fill(0,0,0)
          //ellipse(A+12.5,B-12.5,25)



          let u=(i+1)*25;
          let I=u-12.5;
          let j=j*25;
            
          fill(0,0,0);//赤色
          ellipse(I+12.5,J,25); 
          }

          fill(211);//色を灰色
          rect(i * 25, j * 25, 25,25);

          fill(255,0,0);
          ellipse(187.5,62.5,25);
        }
      
      else{
        fill(255);//色を白色に
        rect(i * 25, j * 25, 25,25);
      }
  }
  }
  }


         