// http://stackoverflow.com/questions/160666/html-display-an-image-as-large-as-possible-while-preserving-aspect-ratio
function resizeToMax(id){
    myImage = new Image()
    var img = document.getElementById(id);
    myImage.src = img.src;
    if(myImage.width / document.body.clientWidth > myImage.height / document.body.clientHeight){
        img.style.width = "100%";
    } else {
        img.style.height = "100%";
    }
}