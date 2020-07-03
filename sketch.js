var ball;
var ball1;
var database;
var position;
function setup(){
    database=firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    ball1=createSprite(100,100,10,10);
    ball1.shapeColor= "blue";
    var ball1position = database.ref('ball/position')
    ball1position.on("value",function(data){
        position= data.val();
        ball1.x= position.x;
        ball1.y= position.y;
    })
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
       writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}function writePosition(x,y){
    database.ref('ball/position').set(
{
    x:position.x+x,
    y:position.y+y
}        
    )
}