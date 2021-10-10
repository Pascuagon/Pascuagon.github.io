// date = new Date()
// document.getElementById("time").innerHTML = date

function load(navid)
{
    //console.log("clicked on " + navid)
    hiddenElems = document.getElementsByClassName("Hidden")
    for(i = 0; i < hiddenElems.length; i++)
    {
        if(hiddenElems[i].id == navid) hiddenElems[i].style.display = "block"
        else hiddenElems[i].style.display = "none"
    }
}

function hideAll()
{
    hiddenElems = document.getElementsByClassName("Hidden")
    for(i = 0; i < hiddenElems.length; i++) hiddenElems[i].style.display = "none"
}

setInterval(function(){
    date = new Date()
    document.getElementById("time").innerHTML = date
}, 950)