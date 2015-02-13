

// APP.JS

// INITIALIZE PROGRESSBAR AND LOADING

$(document).ready(function(){



    //
    // HANDLES SINGLE FILE LOAD COMPLETION
    //


    function handleFileComplete(event){
        $('#hero').append(event.result);
        $('#'+event.item.id).css('background-image','url(' + event.result.currentSrc + ')')
        $('#'+event.item.id).animate({'height':200},200);
    }


    //
    // HANDLES OVERALL PROGRESS (eg ALL IMAGES)
    //


    function handleProgress(event){
        SmoothProgressBar.updateProgress(preload.progress);
    }


    //
    //  HANDLES COMPLETION OF ALL IMAGES
    //


    function handleComplete(event){                
        SmoothProgressBar.stopProgress();                
    }


    //
    //  HANDLES ERRORS
    //


    function handleFileError(event){                
        SmoothProgressBar.stopProgress();                
    }    


    //
    // CREATE JS INIT AND LOAD
    //


    function loadImage() {
        
        // ADD LISTENERS

        preload = new createjs.LoadQueue();
        preload.addEventListener("fileload", handleFileComplete);
        preload.addEventListener("progress", handleProgress);
        preload.addEventListener("complete", handleComplete);
        preload.addEventListener("error", handleFileError);
        
        // ADD MANIFEST FOR MULTIPLE IMAGES

        var manifest = [{src:"images/contact.jpg", id:"BG-01"},{src:"images/home.png", id:"BG-02"},{src:"images/koorenhuis.png", id:"BG-03"},{src:"images/koorenhuis.jpg", id:"BG-04"}]
        
        // START PRELOAD

        preload.loadManifest(manifest);
        
        // START THE PROGRESS BAR

        SmoothProgressBar.startProgress();
    }

    // TRIGGER THE PRELOAD

    $('#start').on('click',function(){
        loadImage();
    });




});