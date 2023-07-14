function changeImage(){
    var pic= document.getElementById("bulb");
    if(pic.src.match("on"))
    {
        console.log("ON");
        pic.src= "bulb_off.jpg";
    } 
    else{
        console.log("OFF");
        pic.src= "bulb_on.jpg";
    }
}  