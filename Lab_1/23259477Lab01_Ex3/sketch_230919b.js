function setup() {
  createCanvas(windowWidth,windowHeight);
  background(129,45,78);
  noStroke();
  
  
  
  fill(100,200,80);
  for(let j = 0; j<5;j++){
    let x = 100;
    let y = 20;
    for(let i = 0; i< 30;i++){
      rect(y,x,2,50);
      y+=50
    }
    x+=200;
  }
  
  for(let i = 0; i < 200;i++){
    fill(random(255),random(255),random(255));
    rect(i*30,i*20,10,57);
    for(let j = 500 ; j>=20;j-=5){
      fill(random(255),random(255),random(255));
     ellipse(j,i*25,50,random(30));
    }

  }
}

function draw() {

}
