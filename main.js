const responsive={
    0:{
        items:1
    },
    
    320:{
        items:1
    },
    560:{
        items:2
    },
    960:{
        items:3
    }

}
$(document).ready(function(){

    $nav=$('.nav');
    $toggleCollapse=$('.toggle-collapse');
    /** click event on toggle menu */
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })


    // owl crousel for blog
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:20000,
        dots:false,
        nav:true,
        navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')],
        responsive:responsive
    });


    // click to scroll up
    $('.move-up span').click(function(){
        $('html,body').animate({
            scrollTop:0
        },1000);
    })

    //AOS on scroll instance
    AOS.init();

});

Share = {
    facebook: function(purl, ptitle, pimg, text) {
    url = 'http://www.facebook.com/sharer.php?s=100';
    url += '&p[title]=' + encodeURIComponent(ptitle);
    url += '&p[summary]=' + encodeURIComponent(text);
    url += '&p[url]=' + encodeURIComponent(purl);
    url += '&p[images][0]=' + encodeURIComponent(pimg);
    Share.popup(url);
    },
    popup: function(url) {
        window.open(url,'','toolbar=0,status=0,width=626, height=436');
        }
        };
        

        