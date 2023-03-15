var userId="ram@gmail.com"
var pass="123"
function logintowebpage()
{
    var userGivenId=document.getElementById("usid").value 
    var userGivenPass=document.getElementById("pass").value 
    if(userId==userGivenId && pass==userGivenPass)
    {
        var fom=document.forms 
        fom[0].action="./html/info.html"
        fom[0].elements[2].type="submit"
    }
    else if(userId==userGivenId && pass!=userGivenPass)
    {
        document.getElementById("result").innerHTML="wrong password entered"
        document.getElementById("passdiv").style.borderColor="Red"
        document.getElementById("emaildiv").style.borderColor="royalblue"
        document.body.style.backgroundImage="linear-gradient(75deg,rgb(255,0,162),red)"
    }
    else if(userId!=userGivenId && pass==userGivenPass)
    {
        document.getElementById("result").innerHTML="wrong userid entered"
        document.getElementById("emaildiv").style.borderColor="Red"
        document.getElementById("passdiv").style.borderColor="royalblue"
        document.body.style.backgroundImage="linear-gradient(75deg,red,purple)"
  

    }
    else{
        document.getElementById("result").innerHTML="wrong userid and wrong password"
        document.getElementById("emaildiv").style.borderColor="Red"
        document.getElementById("passdiv").style.borderColor="Red"
        document.body.style.backgroundImage="red"
        document.body.style.backgroundImage="none"

    }
}
function passvis()
{
    document.getElementById("pass").removeAttribute("type")
    document.getElementById("visible").setAttribute("src","./assets/images/monkeyinvisible.png")
    document.getElementById("visible").style.transform="rotate Y(360deg)"
    document.getElementById("visible").style.transition="transform 0.3s"
}
function passhide()
{
    document.getElementById("pass").setAttribute("type","password")
    document.getElementById("visible").setAttribute("src","./assets/images/monkeyvisible.png")
    document.getElementById("visible").style.transform="rotate Y(-360deg)"
    document.getElementById("visible").style.transition="transform 0.3s"
}