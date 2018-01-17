function galleryPic(source){
    if(!document.getElementById) return false;
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById("img_change")) return false;
    var gallery = document.getElementById("img_change");
    var hrefs = gallery.getElementsByTagName("a");
    for(i= 0;i<hrefs.length;i++){
        hrefs[i].onclick = function(){
            return !whichPic(this);
        };
    }
}

function whichPic(whichPic){
    if(!document.getElementById("show_img")) return false;
    var source = whichPic.getAttribute("href");
    var img = document.getElementById("show_img");
    if(img.nodeName != "IMG") return false;
    img.setAttribute("src",source);
    if(document.getElementById("desription")){
        var text = whichPic.getAttribute("title") ? whichPic.getAttribute("title") : "";
        var description = document.getElementById("desription");
        if(description.firstChild.nodeType == 3){
            description.firstChild.nodeValue = text;
        }
    }

    return true;
}

addLoadEvent(galleryPic)