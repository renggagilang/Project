//menu
var tombolmenu = $('.tombol-menu');
var menu = $ ('nav .menu ul');

function klikMenu(){
    tombolmenu.click(function(){
        menu.toogle();
    })
    menu.click(function(){
        menu.toogle();
    })
}
$(document).ready(function(){
    var width = $(window).width();
    if(width < 990){
        klikMenu();
    }
    
})

//efek scroll

$(document).ready(function(){
    var scroll_pos = 0;
    $(document).scroll(function(){
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 0){
            $('nav').addClass('putih');
        }else{
            $('nav').removeClass('putih')
        }
    })
})