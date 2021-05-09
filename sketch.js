var wall1,wall2,wall3,wall4,wall5;
var hwall1,hwall2,hwall3,hwall4,hwall5;
var obsWall2,obsWall3,obsWall4,obsWall5;
var player,player2,playerimg;
var edges;
var trophy,trophyimg;

function preload(){
    playerimg = loadImage('player1.png');
    trophyimg = loadImage('images.jpg');
}

function setup(){
    canvas = createCanvas(displayWidth,displayHeight - 75);

    player = createSprite(50,50);
    player.addImage("player",playerimg);
    player.scale = .3;
    player.debug = false;
    player.setCollider("circle",0,0,70);

    trophy = createSprite(1100,490);
    trophy.addImage("trophy",trophyimg);
    trophy.scale = .2;

    obsWall2 = createSprite(350,50,15,100);
    obsWall2.velocityY = 2;

    obsWall3 = createSprite(480,50,15,100);
    obsWall3.velocityY = 10 ;

    obsWall4 = createSprite(700,50,15,200);
    obsWall4.velocityY = 12;

    obsWall5 = createSprite(920,50,15,250);
    obsWall5.velocityY = 15;

    hwall1 = createSprite(130,85,200,15);
    hwall2 = createSprite(350,195,200,15);
    hwall3 = createSprite(570,305,200,15);
    hwall4 = createSprite(790,415,200,15);
    hwall5 = createSprite(1010,525,200,15);

    wall1 = createSprite(130,90,200,15);
    wall2 = createSprite(350,200,200,15);
    wall3 = createSprite(570,310,200,15);
    wall4 = createSprite(790,420,200,15);
    wall5 = createSprite(1010,530,200,15);
}

function draw(){
    background ("cyan");
    
    edges = createEdgeSprites();

    obsWall2.bounceOff(edges);
    obsWall2.bounceOff(wall2);

    obsWall3.bounceOff(edges);
    obsWall3.bounceOff(wall3);

    obsWall4.bounceOff(edges);
    obsWall4.bounceOff(wall4);

    obsWall5.bounceOff(edges);
    obsWall5.bounceOff(wall5);

    //removing jumping bug

    if(keyDown(UP_ARROW)&&player.isTouching(hwall1)){
    player.velocityY = -12;
    }
    if(keyDown(UP_ARROW)&&player.isTouching(hwall2)){
    player.velocityY = -12;
    }
    if(keyDown(UP_ARROW)&&player.isTouching(hwall3)){
    player.velocityY = -12;
    }
    if(keyDown(UP_ARROW)&&player.isTouching(hwall4)){
    player.velocityY = -12;
    }
    if(keyDown(UP_ARROW)&&player.isTouching(hwall5)){
    player.velocityY = -12;
    }

    //moving player

    if(keyDown(RIGHT_ARROW)){
        player.x = player.x + 5;
    }
    if(keyDown(LEFT_ARROW)){
        player.x = player.x - 5;
    }
    player.velocityY = player.velocityY + .6;

    player.collide(wall1);
    player.collide(wall2);
    player.collide(wall3);
    player.collide(wall4);
    player.collide(wall5);

    if(player.isTouching(obsWall2)){
        player.x = 50;
        player.y = 50;
    }

    if(player.isTouching(obsWall3)){
        player.x = 50;
        player.y = 50;
    }

    if(player.isTouching(obsWall4)){
        player.x = 50;
        player.y = 50;
    }

    if(player.isTouching(obsWall5)){
        player.x = 50;
        player.y = 50;
    }

    if (player.y >=540){
        player.hide();
        trophy.hide();
    }

    if(trophy.isTouching(player)){
       trophy.x = player.x;
       trophy.y = player.y - 30;
    }

    drawSprites();
}