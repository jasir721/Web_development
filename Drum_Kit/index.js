
for (var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    // document.querySelector(".drum")[i].addEventListener("click",clickk);
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
{
    console.log(this);
    // function clickk(){
    // alert("I got clicked");
    // var audio= new Audio("sounds/tom-1.mp3");
    // audio.play();
    var buttonInnerhtml = this.innerHTML;
    makesound(buttonInnerhtml);
    buttonanimation(buttonInnerhtmlt);
});
}
document.addEventListener("keypress",function(event){
   makesound(event.key);
   buttonanimation(event.key);
})
 function makesound(key)
 {
    switch (key) {
        case "w":var audio= new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
        case "a":var audio= new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
        case "s":var audio= new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
        case "d":var audio= new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
        case "j":var audio= new Audio("sounds/snare.mp3");
        audio.play();
        break;
        case "k":var audio= new Audio("sounds/crash.mp3");
        audio.play();
        break;
        case "l":var audio= new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;
        default:
            console.log(buttonInnerhtml);
            break;
    }
 }
 function buttonanimation(key)
 {
    var active_button= document.querySelector("."+key);
    active_button.classList.add("pressed");
    setTimeout(function(){
        active_button.classList.remove("pressed");
    },100)
 }