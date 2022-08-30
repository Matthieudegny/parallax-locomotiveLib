const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    tablet: {smooth: true},
    smartphone: { smooth: true}
})

//Body color
//scroll.on("scroll",... = addEventListener onScroll
//so when i scroll if document.querySelector("#color.is-inview") is true you do... else...
scroll.on("scroll", () => {
    //#color.is-inview = the element who has #color+.is-inview
    //#color .is-inview select the children of #color who has .is-inview
    if (document.querySelector("#color.is-inview")) {
        document.body.style.background = "#000101";
        document.body.style.color="#fefeff"
    }else{
        document.body.style.background = "#fefeff";
        document.body.style.color="#000101"
    }
})