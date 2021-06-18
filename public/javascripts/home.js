window.addEventListener("load", function(){

    
let openPhotoSwipe = (indexElement)=>{
    let pswpElement= document.querySelector(".pswp");
    let item = [{
        src: "/../images/uala.jpg",
        w: 1440,
        h: 1024,
        pid: "image-one"
    },
    {
        src: "/../images/casas.jpg",
        w: 1440,
        h: 1024,
        pid: "image-two"
    }];

    let options = {
        index: indexElement,
        history:false,
        //bgOpacity: 0.5,
        closeOnSroll: false,
        closeOnVerticalDrag: false,
        //focus: false,
        showAnimationDuration: 0,
        hideAnimationDuration: 0 

    };
    
    let gallery= new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, item, options);
    gallery.init();
    
}




let thumbnails = document.querySelectorAll(".thumbnail");

for (let index = 0; index < thumbnails.length; index ++) {

    let thumbnailElement= thumbnails[index];
    thumbnailElement.addEventListener("click", function(e){
        e.preventDefault();
        openPhotoSwipe(index);
    })
}

}) 
    
