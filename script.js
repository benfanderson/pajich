window.onload = function() {
    let image = 1;

    function picFunction() {

        for (let i = 0; i < document.getElementsByTagName("button").length; i++) {
             document.getElementsByTagName("button")[i].disabled = true;
        };
         
        if (image == 1) {
             document.getElementById("img2").classList.toggle("visible");
        };

        if (image == 2 && window.getComputedStyle(document.getElementById("img3")).opacity == 0){
            document.getElementById("img2").classList.toggle("visible");
        };

        if (image == 2 && window.getComputedStyle(document.getElementById("img3")).opacity == 1){
            document.getElementById("img3").classList.toggle("visible");
        };

        if (image == 3 && window.getComputedStyle(document.getElementById("img4")).opacity == 0){
            document.getElementById("img3").classList.toggle("visible");
        };

        if (image == 3 && window.getComputedStyle(document.getElementById("img4")).opacity == 1){
            document.getElementById("img4").classList.toggle("visible");
        };

        if (image == 4){
            document.getElementById("img4").classList.toggle("visible");
        };

        if (image > 4) { 
            image =1;
            document.getElementById("img2").classList.toggle("visible");
            document.getElementById("img3").classList.toggle("visible");
            document.getElementById("img4").classList.toggle("visible");
        };

        if(image < 1) {
            image =4;
            document.getElementById("img2").classList.toggle("visible");
            document.getElementById("img3").classList.toggle("visible");
            document.getElementById("img4").classList.toggle("visible");
        };

        setTimeout(function(){ 
            for (let i = 0; i < document.getElementsByTagName("button").length; i++) {
            document.getElementsByTagName("button")[i].disabled = false;
            }
        }, 500);
    }

    document.getElementById("more").addEventListener("click", function() {
        image = image + 1;          
        picFunction();  
    });

    document.getElementById("less").addEventListener("click", function(){
        image = image -1;
        picFunction();
    }); 
};