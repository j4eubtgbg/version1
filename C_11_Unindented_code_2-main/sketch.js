var  player,p1;
var enemy,e1;
var edges;
var gs = 1;//0 = start, 1= play, 2 = end.
var bgimg,bgmi;
var thing,thing1,thing2,thing3,thing4,thingiest;
var blink = 30;
var thing_cleaned = 0;
var GS = 0;
//0 = PAUSE, 1 = PLAY, 2 = END,3 = INFO


function preload() {
bgmi = loadImage('bg.png');
p1 = loadImage('R.png');
e1 = loadImage('RR.png');
thingiest = loadImage('RRR.png');
}

function setup() {
createCanvas(600,600);
bgimg = createSprite(300,300);
bgimg.addImage('ew',bgmi);
player = createSprite(200,200,60,60);
player.addImage('RRRRRR',p1);
edges = createEdgeSprites();
enemy = createSprite(350,350,60,60);
enemy.addImage('1111',e1);
thing = createSprite(random(50,550),random(50,550),30,30);
thing1 = createSprite(random(50,550),random(50,550),30,30);
thing2 = createSprite(random(50,550),random(50,550),30,30);
thing3 = createSprite(random(50,550),random(50,550),30,30);
thing4 = createSprite(random(50,550),random(50,550),30,30);
thing.addImage('1',thingiest);
thing1.addImage('1',thingiest);
thing2.addImage('1',thingiest);
thing3.addImage('1',thingiest);
thing4.addImage('1',thingiest);


}

function draw() {
  if(GS === 1){
    if(keyDown('w')){
        player.y = player.y-5;
    }
    if(keyDown('a')){
        player.x = player.x-5;
    }
    if(keyDown('s')){
        player.y = player.y+5;
    }
    if(keyDown('d')){
        player.x = player.x+5;
    }
  
  if(frameCount%30 === 0){
    if(player.x>enemy.x){
        enemy.x = enemy.x+100;
    }else{
        enemy.x = enemy.x-100;
    }
    if(player.y>enemy.y){
        enemy.y = enemy.y+100
    }else{
        enemy.y = enemy.y -100;
    }

  }

if(enemy.x>599){
    enemy.x = 598;
}
if(enemy.x<9){
    enemy.x = 10;
}
if(enemy.y>599){
    enemy.x = 598;
}
if(enemy.y<9){
    enemy.x = 10;
}
    


   // player.collide(enemy);
    player.collide(edges);
    enemy.collide(edges);
    if(enemy.collide(player)){
        ge();
        thing_cleaned = thing_cleaned+1;
    }
    if(player.isTouching(thing)){
        thing.destroy();
        thing_cleaned = thing_cleaned+1;
    }
    if(player.isTouching(thing1)){
        thing1.destroy();
        thing_cleaned = thing_cleaned+1;
    }
    if(player.isTouching(thing2)){
        thing2.destroy();
        thing_cleaned = thing_cleaned+1;
    }
    if(player.isTouching(thing3)){
        thing3.destroy();
        thing_cleaned = thing_cleaned+1;
    }
    if(player.isTouching(thing4)){
        thing4.destroy();
        thing_cleaned = thing_cleaned+1;
    }
 
    drawSprites();
    if(thing_cleaned === 5){
    gw();
    }
    textSize(20);
        fill('black');
        text('You blink in..'+blink,400,30);
    blink = blink-1;
    if(blink===0){
        blink = 30;
    }
    textSize(20);
        fill('black');
        text('Material cleaned:'+thing_cleaned+'/5',10,30);
        
}
if(keyDown('space')){
    if(GS === 0){
        GS =1;
    }
}
if(GS === 0){
    //textSize(2);
        fill('black');
        text('press space to start playing, READ DESCRIPTION TO LEARN HOW TO PLAY.',0,300);
}
}   

function ge(){
    background('white');
        player.destroy();
        enemy.destroy();
        bgimg.destroy();
        thing.destroy();
        thing.destroy();
        thing1.destroy();
        thing3.destroy();
        thing2.destroy();
        thing4.destroy();
        textSize(20);
        fill('black');
        text('You lost.Refresh page to play again(press F5 if on PC)',100,200);  
      //  if(keyDown('space')){
      //    GS = 0;}  
}

function gw(){
    player.destroy();
    enemy.destroy();
    bgimg.destroy();
    textSize(20);
        fill('black');
        text('You win!Refresh page to play again(press F5 if on PC)',100,200);   
        //if(keyDown('space')){
        //    GS = 0;}
}
