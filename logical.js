//changing the light of the website
function light_handler(){
    let elem = document.getElementsByClassName("container")[0];
    let wrapper = document.getElementsByClassName("page-wrap")[0];
    if(elem === undefined){ //div.class == container_night
        elem = document.getElementsByClassName("container_night")[0];
        elem.className = "container"; //changing to day-light
        wrapper = document.getElementsByClassName("page-wrap_night")[0];
        wrapper.className = "page-wrap";
    }
    else{
        elem.className = "container_night";
        wrapper.className = "page-wrap_night";

    }
}

// making the gallery "live" - changes images
function gallery_handler(){
    let i;
    let gallery = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    for(i = 0; i < gallery.length; i++){
        gallery[i].style.setProperty('display', 'none', 'important');
    }

    // index defined in index.html (script)
    index++;
    if (index > gallery.length){
        index = 1;
    }
    for(i = 0; i < dots.length; i++){
        dots[i].classList.remove("active");
    }
    gallery[index-1].style.setProperty('display', 'block', 'important'); //activate the image
    dots[index-1].classList.add("active"); //activate the dot
    setTimeout(gallery_handler, 2000); // Change image every 2 seconds
}