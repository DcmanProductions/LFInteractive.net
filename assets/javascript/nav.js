let scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    multiplier: 1,
    lerp: 0.07,
});
(() => {
    let nav = $('nav')[0]
    scroll.on('scroll', e => {
        if (e.scroll.y <= 10) {
            nav.classList.remove("collapsed");
            nav.classList.add("expanded");
        } else {
            nav.classList.add("collapsed");
            nav.classList.remove("expanded");
        }
    })

    $("#scroll-down-cta").on("click", () => {
        scroll.scrollTo(window.screen.height / 1.2)
    })
}).call();