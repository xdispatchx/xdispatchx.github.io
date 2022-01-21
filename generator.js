/* global document, window */
function myFunction() {
    "use strict";
    var xInput = document.getElementById("sizeForm"),
        x = parseFloat(xInput.elements[0].value),
        screenHeight = window.innerHeight,
        screenWidth = window.innerWidth,
        y = parseFloat(xInput.elements[1].value),
        optionsInput = document.getElementById("optionsForm"),
        jobNumber = optionsInput.elements[1].value,
        partNumber = optionsInput.elements[2].value,
        xPierce = x + 0.125,
        yHalf = y / 2,
        boxHeight = 50,
        conversionRate = y / x,
        boxWidth = conversionRate * boxHeight,
        partName = y + "-x-" + x,
        i = 0;
                
    document.getElementById("boxModel").style.borderColor = "rgba(255,0,255,0.8)";

    //Get DATE
    const date = new Date();
    let newDate = ((date.getMonth() + 1) + "/" + ("0" + date.getDate()).slice(-2) + "/" + date.getFullYear())
    document.getElementById("date").innerHTML = newDate;
    let time = (date.getHours() + ":" +("0" + date.getMinutes()).slice(-2));
    document.getElementById("time").innerHTML = time;
            
    if ((boxWidth >= 35) && ((((x / y ) * 35) * screenWidth / 100) <= 0.75 * screenHeight)) 
       //doesnt work properly && (0.35 * screenWidth < 0.75 * screenHeight)) {
        { document.getElementById("boxModel").style.height = (x / y) * 35 + "vw";
        document.getElementById("boxModel").style.width = '35vw';
    }
    else {
        document.getElementById("boxModel").style.height = "50vh";
        document.getElementById("boxModel").style.width = boxWidth + "vh";
    }
                
    document.getElementById("partName").innerHTML = partName;
    document.getElementById("pierceLength").innerHTML = xPierce;
    let xReplace = document.getElementsByClassName("x");
    for (i = 0; i < xReplace.length ; i++) {
        xReplace[i].innerHTML = x;
    }
                
    let yReplace = document.getElementsByClassName("y");
    for (i = 0; i < yReplace.length ; i++) {
        yReplace[i].innerHTML = y;
    }
                
    let halfY = document.getElementsByClassName('yHalfWidth');
    for (i = 0; i < halfY.length ; i++) {
        halfY[i].innerHTML = yHalf;
    }
    
    var materialChoice = document.getElementById("materialName");
    var materialText = materialChoice.options[materialChoice.selectedIndex].text;
    document.getElementById("material").innerHTML = materialText;
    
    document.getElementById("job_identifier").innerHTML = jobNumber;
    document.getElementById("part_number").innerHTML = "part-" + partNumber;

}

//Hide/Show Advanced Options
/*
function hideOptions() {
    var hide = document.getElementById("edit_options");
    if (hide.style.display === "none") {
        hide.style.display = "block";
        document.getElementById("editOptionsText").innerHTML = "Hide Options";
    } else {
        document.getElementById("editOptionsText").innerHTML = "Show Options";
        hide.style.display = "none";
    }
}
*/