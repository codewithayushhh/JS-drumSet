for(var i = 0; i <= 6; i++){


document.querySelectorAll("button")[i].addEventListener("click", function (){
    var key = this.innerHTML;
    switch(key) {
        case "w":
            var first = new Audio("./sounds/crash.mp3");
            first.play();
            break;
            case "a":
                var second = new Audio("./sounds/kick-bass.mp3");
                second.play();
                break;
                case "s":
                    var third = new Audio("./sounds/snare.mp3");
                    third.play();
                    break;
                    case "d":
                        var fourth = new Audio("./sounds/tom-1.mp3");
                        fourth.play();
                        break;
                        case "j":
                            var fifth = new Audio("./sounds/tom-2.mp3");
                            fifth.play();
                            break;
                            case "k":
                                var sixth = new Audio("./sounds/tom-3.mp3");
                                sixth.play();
                                break;
                                case "l":
                                    var seventh = new Audio("./sounds/tom-4.mp3");
                                    seventh.play();
                                    break;

    }
});

}


// var audio = new Audio('./sounds/crash.mp3');
//     audio.play();