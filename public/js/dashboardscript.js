function iframesize()
{
    //alert("???");
    var ifm = document.getElementById("iframe");
    ifm.width = "100%";
    ifm.height = document.documentElement.clientHeight * 0.85;
}

window.onresize = function(){
    iframesize();
}





	
