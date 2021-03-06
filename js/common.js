$(document).ready(function() {
// ---------------- Datapicker -------------------------- //

    $(".cal li").click(function(){
        $(".cal li").removeClass("active");
        $(this).addClass("active");
    });
    $(".cal .event").each(function(){
        $(this).append('<i>.</i>');
    });
    $(".cal .inactive").click(function(){
        return false;
    });
    function tooltip() {
        // get dates and write to tooltip
        $(".cal li").each(function(){
            var date = $(this).text();
            var month = $(".cal__month").text();
            var city = "Киев"; // you can put any City you want
            $(this).append('<div class="tooltip">'+date+' ' + month + ' ' + 'в г. '+ city +'</div>');
        });
        // show tooltip
        $(".cal li").hover(
            function () {
                $(this).children(".tooltip").show();
                $(this).css("z-index", "2");
            }, 
            function () {
                $(this).children(".tooltip").hide();
                $(this).css("z-index", "1");
            }
        );
    }
    tooltip();

    $(".cal__month").cycle({ 
        next:    ".cal__prev", 
        prev:    ".cal__next", 
        timeout:  0,
        speed: 700
    });

    $(".js-date").click( function(){
        $(".tooltip").remove();
        // init datepicker
        $(this).children(".ui-datepicker-inline").fadeIn();
        $(this).css("z-index", "1000");
        $(".overlay-calendar").show();
        $(this).datepicker({
            inline: true,
            showOn: '.btn',
            monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
            'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
            monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
            'Июл','Авг','Сен','Окт','Ноя','Дек'],
            dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
            dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
            dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
            weekHeader: 'Не',
            dateFormat: 'dd.mm.yy',
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: false,
            //minDate: 0
            showOtherMonths: true,
            selectOtherMonths: true,
            onSelect: function(selectedDate) {
                // custom callback logic here
                //alert(selectedDate);
              }
        });

        //tooltip();
    });
    
        
// ---------------- Show pverlay for calendar ------------------------- //
    $(".overlay-calendar").click( function(){
        $(".ui-datepicker-inline").fadeOut();
        $(this).hide();
    });

// ---------------- Chose city  drop-list-------------------------- //
    $(".choose__wrap").click(function(){
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).children(".drop-down").fadeOut();
        }
        else {
            $(this).addClass("active");
            $(this).children(".drop-down").fadeIn();
        }
    });

// ---------------- SHOW Other city -------------------------- //
    $(".js-drop-down-list li").click(function(){
        var val = $(this).text();
        $(this).parent().parent().prev().text(val);
    });


// ---------------- other city  drop-list -------------------------- //
    $(".js-place").click(function(){
        if ($(this).hasClass("js-active")) {
            $(this).removeClass("js-active");
            $(".js-show-other").fadeOut();
        }
        else {
            $(this).addClass("js-active");
            $(".js-show-other").fadeOut();
            $(this).children(".js-show-other").fadeIn();
        }
    });

// ----------------  init cycle plugin -------------------------- //
    $(".coach-scroll .scroll").cycle({ 
        fx:      'scrollHorz',
        next:    ".coach-scroll .next", 
        prev:    ".coach-scroll .prev", 
        timeout:  0,
        speed: 700
    });

    $(".slider .scroll-main").cycle({ 
        timeout:  0,
        speed: 1000,
        pager:  '.slider-nav',
        pagerAnchorBuilder: function(index, el) {
            return '<button class=nav-' + index + '><i></i><span></span></button>'; // whatever markup you want
        }
    });
    $(".nav-0 span").text("Тренера");
    $(".nav-1 span").text("Тренинги");
    $(".nav-2 span").text("Галерея");

    $(".img-scroll .scroll").cycle({ 
        timeout:  0,
        speed: 1000,
        timeout:  2000,
        pager:  '.img-scroll__nav',
        pagerAnchorBuilder: function(index, el) {
            return '<button></button>'; // whatever markup you want
        }
    });

// ---------------- close popup -------------------------- //
    $(".close").click(function(){
        $(this).parent().fadeOut();
        $(".overlay").fadeOut();
    });
    $(".overlay").click(function(){
        $(this).fadeOut();
        $(".popup").fadeOut();
    });
    $(".overlay-album").click(function(){
        $(".popup_album").fadeOut();
        $(this).fadeOut();
    });
    $(".overlay-photo").click(function(){
        $(".popup_photo").fadeOut();
        $(this).fadeOut();
    });

// ---------------- Add comment popup -------------------------- //
    $(".js-add-comment").click(function(){
        $(".popup_add-comment").fadeIn();
        $(".overlay").fadeIn();
    });

// ---------------- Request popup -------------------------- //
    $(".js-request").click(function(){
        $(".popup_request").fadeIn();
        $(".overlay").fadeIn();
        return false;
    });

// ---------------- popup height -------------------------- //
    function popup () {
        $(".popup").each(function(){
            if ($(this).height() > $(window).height() - 100) {
                $(this).addClass("popup_height");
            }
            else {
                $(this).removeClass("popup_height");
            }
        });
    }
    popup ();    
    $(window).resize(function(){
        popup ();
    });
    
// ---------------- More -------------------------- //
    $(".js-more").hide();
    $(".more span").click(function(){
        $(this).hide();
        $(this).parent().prev().slideDown();
    });
    $(".gallery .more span").click(function(){
        $(this).hide();
        $(this).parent().parent().children(".js-more").slideDown();
    });
    $(".training-item-wrap .more span").click(function(){
        $(this).hide();
        $(this).parent().parent().parent().children(".js-more").slideDown();
    });
// ---------------- Choose city  drop-list-------------------------- //
    $(".select__wrap").click(function(){
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).parent().removeClass("select_active");
            $(this).children(".drop-down").fadeOut();
        }
        else {
            $(this).addClass("active");
            $(this).parent().addClass("select_active");
            $(this).children(".drop-down").fadeIn();
        }
    });   

// ---------------- Checkbox -------------------------- //
    $(".checkbox").click(function(){
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        }
        else {
            $(this).addClass("active");
        }
    });  

// ---------------- Choose city  drop-list-------------------------- //
    $(".switch div").children("span:first").addClass("active");
    $(".switch div").click(function(){
        if ($(this).hasClass("switch-active")) {
            $(this).removeClass("switch-active");
            $(this).children("span:first").addClass("active");
            $(this).children().next().next().removeClass("active");
        }
        else {
            $(this).addClass("switch-active");
            $(this).children().removeClass("active");
            $(this).children().next().next().addClass("active");
        }
    });

// ---------------- Input drop-list -------------------------- //
    // show/hide
    $(".input_drop-down").focusin(function(){
        $(this).next().fadeIn("fast");
    });
    $(".input_drop-down").focusout(function(){
        $(this).next().fadeOut("fast");
    });
    // get text
    $(".input-drop-down li").click(function(){
        var text = $(this).text();
        $(this).parent().prev().val(text);
    });

// ---------------- search  -------------------------- //
    $(".filter-wrapper .search__submit").click(function(){
        if ($(this).hasClass("js-act")) {
            $(this).removeClass("js-act");
            $(this).parent().animate({
                right: -43
            }, 500);
        }
        else {
            $(this).addClass("js-act");
            $(this).parent().animate({
                right: -300
            }, 500);
        }
});

// ---------------- search city  -------------------------- //
    $(".search_big .input").focusin(function(){
        $(this).parent().next().fadeIn("fast");
        $(this).parent().addClass("search_big-active");
    });
    $(".search_big .input").focusout(function(){
        $(this).parent().next().fadeOut("fast");
        $(this).parent().removeClass("search_big-active");
    });
    $(".letters a").click(function(){
        var latter = $(this).text();
        $(".letters a").removeClass("active");
        $(this).addClass("active");
        $(".search_big .input").addClass("focus");
        $(".search_big").addClass("search_big-active");
        $(".search_big .input").val(latter);
        $(".js-city-list").fadeIn();
        return false;
    });
    $(".js-city-list li").click(function(){
        var city = $(this).text();
        $(this).parent().parent().fadeOut();
        $(".search_big .input").val(city);
        $(".search_big").removeClass("search_big-active");
        $(".search_big .input").addClass("focus");
    });
// ---------------- Tab -------------------------- //
    $(".tab-cont").hide();
    $(".tab-1").show();
    $(".tab li").click(function(){
        $(".tab li").removeClass("active");
        $(this).addClass("active");
        var act = $(this).attr("data-tab");
        $(".tab-cont").hide();
        $(act).fadeIn();
        return false;
    });

// ---------------- Sort -------------------------- //
    $(".filter-tab li:first").addClass("active");
    $(".filter-tab li").click(function(){
        $(".filter-tab li").removeClass("active");
        $(this).addClass("active");
    });

// ---------------- Sort media -------------------------- //
    $(".tab-btn li:first").addClass("active");
    $(".tab-btn li").click(function(){
        $(".tab-btn li").removeClass("active");
        $(this).addClass("active");
    });

// ---------------- Gallery -------------------------- //
    $(".gallery-link").click(function(){
        $(".popup_album").fadeIn();
        $(".overlay-album").fadeIn();
    });
    $(".gallery img").click(function(){
        var img = $(this).parent().attr("data-img");
        $(".popup_photo img").attr("src", img);
        $(".popup_photo").fadeIn();
        $(".overlay-photo").fadeIn();
    });
    $(".popup_album .close").click(function(){
        $(".popup_album").fadeOut();
        $(".overlay-album").fadeOut();
    });
    $(".popup_photo .close").click(function(){
        $(".popup_photo").fadeOut();
        $(".overlay-photo").fadeOut();
    });

// ---------------- Scroll TOP -------------------------- //
     $(window).scroll(function() {   
        if (($(window).scrollTop() > 30)) {
            $(".to-top").show();
        }
        else {
            $(".to-top").hide();
        }
    });
     $(".to-top").click(function(){
        $('html, body').animate({
         scrollTop: 0
        }, 500);
    });

// ---------------- Placeholder -------------------------- //
    // add placeholder to all input
    $(".input").each(function(){
        var placeholder = $(this).attr("placeholder");
        $(this).val(placeholder);
    });
    // remove placeholder from the current input
    $(".input").focusin(function(){
        if ($(this).hasClass("focus")) {}
        else {
            $(this).addClass("focus");
            $(this).val("");
        }
    });
    // remove placeholder from the current input
    $(".input").focusout(function(){
        var placeholder = $(this).attr("placeholder");
        if ($(this).val() != "") {}
        else {
            $(this).val(placeholder);
            $(this).removeClass("focus");
        }
    });

// ---------------- Map resize -------------------------- //

    function Coach_Resize () {
        var map = $(window).height() - 113;
        var list = map - 201 - 15;
        var list_li = 81;
        var counter = Math.ceil(list/list_li) - 1;
        list = list_li * counter;
        $(".map iframe").height(map);
        $(".coach-list-wrap").height(list);
    }
    Coach_Resize ();
    $(window).resize(function(){
        Coach_Resize ();
    });

    var i = 0;
    $(".coach-nav_prev").click(function(){
        var i = 1;
        var top = $(".coach-list").position().top + 81;
        if ( (i == 1) && top <= 0) {
            $(".coach-list").animate({
                top: top
            }, 100);
        }
        else {}
    });
    $(".coach-nav_next").click(function(){
        var i = 1;
        var top = $(".coach-list").position().top - 81;
        var list_height = $(".coach-list").height() - $(".coach-list-wrap").height() + 81;
        if ((i == 1) && Math.abs(top) < list_height) {
            $(".coach-list").animate({
                top: top
            }, 100);
        }
        else {}
    });
    
// ---------------- Main scoll resize -------------------------- //

    function Scroll_Resize () {
        var scroll = $(window).height() - 233;
        $(".slider, .scroll-main, .slide").height(scroll);
        if (scroll <= 550) {
            $(".slider, .scroll-main, .slide").height(550);
        }
    }
    Scroll_Resize ();
    $(window).resize(function(){
        Scroll_Resize ();
    });
    
    });

// ---------------- Press ESC -------------------------- //
document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        $(".overlay, .overlay-calendar, .popup, .overlay-photo, .overlay-album").fadeOut();

    }
};
