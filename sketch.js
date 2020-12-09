var ball;
var database
var datebaseRef

function setup(){
    createCanvas(500,500);
    ball = createSprite(50,50,10,10);
    ball.shapeColor = "red";
    database=firebase.database()
    console.log("datebaseConnected")
    databaseRef=database.ref("ball/pos");
    databaseRef.on("value",readPosition,showError)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(offsetX,offsetY){
    database.ref("ball/pos").set({
        x:ball.x+offsetX,
        y:ball.y+offsetY
    })
}
function readPosition(data){
var position=data.val()
ball.x = position.x
ball.y = position.y
}
function showError(){
console.log("error working");
}