let position = 0;
document.getElementById("moveBtn").onclick = function() {
    if (position === 0) {
        position = 1800;
    }   
    else {
        position = 0;
    }
    document.getElementById("movable").style.left = position + "px";
};
//სულ მარჯვნივ რომ გადმომეტანა pc-ზე მაგიტომ დავწერე 1800px. მე 1800px pc მაქ//