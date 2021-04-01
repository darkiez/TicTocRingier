import Game from "./Game.js";
import GameView from "./GameView.js";

var modal = document.getElementById("myModal");
var saveButton = document.getElementById("save_button");
var saveFileButton = document.getElementById("save_file_name_button");
var fileName = document.getElementById("file_name");
let game = new Game();
let gameView = new GameView(document.getElementById("app"));

gameView.onTileClick = function (i) {
    // console.log(i);
    game.makeMove(i);    
    game.pcMove();
    gameView.update(game);
    game.arraySht();
};


gameView.onRestartClick = function () {
    game = new Game();
    gameView.update(game);
    game.arraySht();
};

var span = document.getElementsByClassName("close")[0];

saveButton.onclick = function() {
    modal.style.display = "block";
  }

  
  saveFileButton.onclick = function() {
    modal.style.display = "none";

    //gameboard - to file
    let save = require('save');

    save.readFile('./js/Game.json', 'utf8', function (err, data) {
        
       if (err) {
           console.log(err)
       } else {
           const file = JSON.parse(data);
           file.events.push(game.board);
           
           const json = JSON.stringify(file);
    
           save.writeFile('./js/Game.json', json, 'utf8', function(err){
                if(err){ 
                      console.log(err); 
                } else {
                      //Everything went OK!
                      alert("File Saved!");
                }});
       }
    });
    
    alert(game.board);
  }

span.onclick = function() {
    modal.style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
gameView.update(game);