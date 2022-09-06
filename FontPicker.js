 //function to change preview text font
 function changeFont(listFont) {
    if(listFont) {
        var font = document.getElementById("font");
        font.value = listFont;
        let elements = document.getElementsByClassName("text");
        for(var e of elements) {
            e.style.fontFamily = listFont;
        }
    }else {
        var font = document.getElementById("font").value;
        let elements = document.getElementsByClassName("text");
        for(var e of elements) {
            e.style.fontFamily = font;
        }
    }
}
/*function to customize headings preview text*/
function customizeH() {
     /*get the custom style values*/
    var selectW = document.getElementById("weight");
    var weight = selectW.options[selectW.selectedIndex].value;
    var selectS = document.getElementById("style");
    var style = selectS.options[selectS.selectedIndex].value;
    /*select the headings and customize the font*/
    let headings = document.getElementsByClassName("headings");
    console.log(headings);
    for(var h of headings) {
        h.style.fontWeight = weight;
        h.style.fontStyle = style;
    }
}

/*function to customize paragraph preview text*/
function customizeP() {
    /*get the custom style values*/
    var size = document.getElementById("size").value;
    var selectW = document.getElementById("weight");
    var weight = selectW.options[selectW.selectedIndex].value;
    var selectS = document.getElementById("style");
    var style = selectS.options[selectS.selectedIndex].value;
    console.log(size, weight, style);
    /*select the preview paragraph and customize the text*/
    var p = document.getElementById("p");
    p.style.fontSize = size;
    p.style.fontWeight = weight;
    p.style.fontStyle = style;
}

/*function to reset the font back to default*/
function resetFont() {
    /*select the preview text elements and clear the font style*/
    let elements = document.getElementsByClassName("text");
    for(var e of elements) {
        e.style.fontFamily = "";
    }
    var input = document.getElementById("font");
    input.value = "";
}

/*function to reset preview text & form css back to default*/
function resetPreview() {
    /*select preview text and reset to default*/
    var p = document.getElementById("p");
    p.style.fontSize = "";
    p.style.fontWeight = "";
    p.style.fontStyle = "";
    /*select the headings and reset to default*/
    let headings = document.getElementsByClassName("headings");
    console.log(headings);
    for(var h of headings) {
        h.style.fontWeight = "";
        h.style.fontStyle = "";
    }
}
/*function called when document loads, adds eventListeners for objects*/
function start() {
    /*add eventListener for reset button*/
    var reset = document.getElementById("resetButton");
    reset.addEventListener("click", resetPreview);
    /*add eventListener for accordion buttons*/
    var accordion = document.getElementsByClassName("accordion");
    for(var i=0; i < accordion.length; i++) {
        accordion[i].addEventListener("click", function() {
            /*toggle setting buttons as active*/
            this.classList.toggle("activeClick");
            /*toggle between hiding and showing the active panel*/
            var panel = this.nextElementSibling;                     
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
    /*add eventListeners for li elements*/ 
    let list = document.getElementsByTagName("li");
    for(var l of list) {
        l.addEventListener("click", changeFont.bind(this, l.innerHTML), false);
    }

}
window.addEventListener("load", start, false);
