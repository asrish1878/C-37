class Game {
  constructor() {}
  
  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
 
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }
start(){
  player = new Player()
  playerCount=player.getCount()
  form = new Form()
  form.display()

  car1 = createSprite(width/2-50,height-100)
  car1.addImage("car","car1_img")
  car1.scale=0.07
  cars=[car1,car2]
  
}
if(allPlayers===undefined{Image(track,0-height*5,height*6)})
drawSprites()
 
}
