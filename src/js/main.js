$(document).ready(function () {
    //实现幻灯片效果
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        //autoplayHoverPause: true
    });

    //实现3D旋转效果
    $(".move-box1").hover3d({
        selector: ".item-left",
        shine:true,
        sensitivity: 25
    });
    // $(".move-box2").hover3d({
    //     selector: ".item-right1",
    //     shine:true,
    //     sensitivity: 25
    // });
    // $(".move-box3").hover3d({
    //     selector: ".item-right2",
    //     shine:true,
    //     sensitivity: 25
    // });

    //实现图片淡入淡出效果，这里直接在item上面使用，其实可以直接用CSS
    $(".photo-wall .move-box .item ").mouseenter(function(){
        $(this).fadeTo('normal',1);
    })
    $(".photo-wall .move-box .item ").mouseleave(function(){
        $(this).fadeTo('normal',0.6);
    })
});
