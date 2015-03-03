/**
 * Created by Ben on 12/4/2014.
 */
var count = 0;

var explosion = ["images/expl_01_0000.png",
                 "images/expl_01_0001.png",
                 "images/expl_01_0002.png",
                 "images/expl_01_0003.png",
                 "images/expl_01_0004.png",
                 "images/expl_01_0005.png",
                 "images/expl_01_0006.png",
                 "images/expl_01_0007.png",
                 "images/expl_01_0008.png",
                 "images/expl_01_0009.png",
                 "images/expl_01_0010.png",
                 "images/expl_01_0011.png",
                 "images/expl_01_0012.png",
                 "images/expl_01_0013.png",
                 "images/expl_01_0014.png",
                 "images/expl_01_0015.png",
                 "images/expl_01_0016.png",
                 "images/expl_01_0017.png",
                 "images/expl_01_0018.png",
                 "images/expl_01_0019.png",
                 "images/expl_01_0020.png",
                 "images/expl_01_0021.png",
                 "images/expl_01_0022.png",
                 "images/expl_01_0023.png"];

function newGame(){
    var name = document.getElementById("name").value;
    var cName = document.getElementById("cName").value;
    count = 0;
    var sound = new Audio("Sounds/Powerup.wav");
    sound.play();

    document.getElementById("you").innerHTML = name + ", Defender of " + cName;
    document.getElementById("game").style.visibility = "visible";

}

function shooter(){
    //var evt = e ? e:window.event;       //learned this from http://www.javascripter.net/faq/mouseclickeventcoordinates.htm
    //var clickX = 0, clickY = 0;
    var x = event.clientX;
    var y = event.clientY;
    var sound = new Audio("Sounds/Explosion2.wav");
    sound.play();

    document.getElementById("game").style.backgroundColor = "red";
    var delay = 100;
    setTimeout( function changeColor(){ document.getElementById("game").style.backgroundColor = "blueviolet"; }, delay );

    blast(x, y);

    count++;
}

function endGame(){
    document.getElementById("game").style.visibility = "hidden";
    document.getElementById("score").innerHTML = "Score: " + count;
}

function blast(x, y){           //Thanks to http://stackoverflow.com/questions/14157790/spawn-a-image-on-another-image-giving-a-coordinate

   var newImage = document.createElement("img");
   newImage.setAttribute('src', explosion[0]);
   newImage.setAttribute('class', 'overlays');
   x -= 32;
   y -= 32;
   newImage.style.left = x + "px";
   newImage.style.top = y + "px";
   document.body.appendChild(newImage);

    explodeLoop(newImage, 1);

   //newImage.parentNode.removeChild(newImage);
}

function explodeLoop(el, val){
    if ( val > 23) {
        el.parentNode.removeChild(el);
        return;
    } else {
        el.src = explosion[val];
        setTimeout(function(){explodeLoop(el, val + 1);}, 50);
    }
}

function theme(){
    var music = new Audio("Sounds/Loop_1_0.ogg"); //ShwiggityShwag    http://opengameart.org/content/8-bit-title-or-theme
    music.addEventListener('ended', function(){         //http://stackoverflow.com/questions/3273552/html-5-audio-looping
        this.currentTime = 0;
        this.play();
    }, false);
    music.play();
}

function hover(){
    document.getElementById("title").innerHTML = "Blow Stuff Up!";
}
function deHover(){
    document.getElementById("title").innerHTML = "City Attack!";
}

