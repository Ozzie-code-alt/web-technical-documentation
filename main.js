function hideDef() {
    document.getElementById("p01").style.display = "block";
    document.getElementById("p02").style.display = "none";
    document.getElementById("p03").style.display = "block";
    document.getElementById("p04").style.display = "none";
    document.getElementById("p05").style.display = "block";
    document.getElementById("p06").style.display = "none";
}

function nextCall() {
    if (document.getElementById("p01").style.display == "block") {
        document.getElementById("p01").style.display = "none";
        document.getElementById("p02").style.display = "block";
    } else if (document.getElementById("p02").style.display == "block") {
        document.getElementById("p01").style.display = "block";
        document.getElementById("p02").style.display = "none";
    }
}


function nextCall2() {
    if (document.getElementById("p03").style.display == "block") {
        document.getElementById("p03").style.display = "none";
        document.getElementById("p04").style.display = "block";
    } else if (document.getElementById("p04").style.display == "block") {
        document.getElementById("p03").style.display = "block";
        document.getElementById("p04").style.display = "none";
    }
}


function nextCall3() {
    if (document.getElementById("p05").style.display == "block") {
        document.getElementById("p05").style.display = "none";
        document.getElementById("p06").style.display = "block";
    } else if (document.getElementById("p06").style.display == "block") {
        document.getElementById("p05").style.display = "block";
        document.getElementById("p06").style.display = "none";
    }
}