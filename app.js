setInterval(changer, 3000);
function changer()
{
    const arr=["head.png","tail3.png"];
    var ind=Math.floor(Math.random()*2);
    //console.log(ind);
    if(ind==0)
    {
        document.getElementById("head2").innerHTML="HEAD";
    }
    else
    {
        document.getElementById("head2").innerHTML="TAIL";
    }
    const image=document.createElement("img");
    image.id="image2";
    document.body.appendChild(image);
    document.getElementById("image2").src=arr[ind];
    document.getElementById("image2").style.width="300px";
    document.getElementById("image2").style.borderRadius="50px";
    const obj= document.getElementById("image2");
    const head=document.getElementById("head2");
    head.setAttribute("style","text-align:center");
    obj.setAttribute("style","display: block;margin-left: auto;margin-right: auto; width:400px;");

}
