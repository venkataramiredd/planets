var img=["earth.jpg","venus.jpg","uranus.jpg","mars.jpg","jupiter.jpg","saturn.jpg","mercury.jpg"]
var num=0;
function inc(){
    num++;
    if(num>6)
    {
        num=0;
        document.getElementById("header").style.backgroundImage="url("+img[num]+")"
    }
    else{
        document.getElementById("header").style.backgroundImage="url("+img[num]+")"
    }
}
function dec(){
    num--;
    if(num<0)
    {
        num=3;
        document.getElementById("header").style.backgroundImage="url("+img[num]+")"
    }
    else{
        document.getElementById("header").style.backgroundImage="url("+img[num]+")"
    }
}
