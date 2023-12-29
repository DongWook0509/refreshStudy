document.addEventListener('DOMContentLoaded',
    function(){
        var trigger = new ScrollTrigger({
            offset : {
                x:0,
                y:250
            },
            toggle : {
                visible : 'animateIn',
                hidden : 'animateOut'
            },

            once:true
        });
});