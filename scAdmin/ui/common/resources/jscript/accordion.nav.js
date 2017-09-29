// Plugin created by Brock Nusser - http://brocknusser.com
// Demo site: http://mlamenu.brocknusser.com/index.htm
// Download: http://mlamenu.brocknusser.com/mlamenu.zip

/*
SETUP
*/
var slideSpeed = 'fast';    // 'slow', 'normal', 'fast', or miliseconds 
//end setup

var pathname = window.location.pathname;

$(function () {



    /*
    add 'Current' class to the current page
    */
    $('.accordion-nav a').each(function () {
        var thisHref = $(this).attr('href')
        if ((window.location.pathname.indexOf(thisHref) == 0) || (window.location.pathname.indexOf('/' + thisHref) == 0)) {
            $(this).addClass('Current');
        }
    });

    /*
    display the current page
    */
    $('.Current').parent('li').children('ul').show();
    $('.Current').parents('ul').show();

    /*
    add expand/collapse icons
    */
    var i = 0;
    //    var model = setInterval(function () {
    //        $('.accordion-nav li').each(function () {
    //            if ($(this).children('ul[show=true]').length > 0 && $(this).children('ul[show=true]').children('li').length > 0) {
    //                i++;
    //                if ($(this).children('ul[show=true]').is(":visible")) {
    //                    $(this).prepend('<img src="./common/resources/images/imgOnOpen.png" />');
    //                    $(this).children('a').bind("click", function () { $(this).parent().imgexpend(); })
    //                    $(this).children('img').bind("click", function () { $(this).parent().imgexpend(); })
    //                }
    //                else {
    //                    $(this).prepend('<img src="./common/resources/images/imgOffClosed.png"/>');
    //                    $(this).children('a').bind("click", function () { $(this).parent().imgexpend(); })
    //                    $(this).children('img').bind("click", function () { $(this).parent().imgexpend(); })
    //                }
    //            }
    //            else {
    //                $(this).children('a').bind("click", function () {
    //                    $(this).parent('li').parent('ul').children('li').children('ul[show=true]').hide(slideSpeed);
    //                    $(this).parent('li').parent('ul').children('li').children('img').attr('src', './common/resources/images/imgOffClosed.png');
    //                })
    //            }
    //        })
    //        if (i > 0) clearInterval(model);
    //    }, 500);
});

function initmenu() {
    $('.accordion-nav li').each(function () {
        if ($(this).children('ul[show=true]').length > 0 && $(this).children('ul[show=true]').children('li').length > 0) {
            if ($(this).children('ul[show=true]').is(":visible")) {
                $(this).prepend('<img src="./common/resources/images/imgOnOpen.png" />');
                $(this).children('a').bind("click", function () { $(this).parent().imgexpend(); })
                $(this).children('img').bind("click", function () { $(this).parent().imgexpend(); })
            }
            else {
                $(this).prepend('<img src="./common/resources/images/imgOffClosed.png"/>');
                $(this).children('a').bind("click", function () { $(this).parent().imgexpend(); })
                $(this).children('img').bind("click", function () { $(this).parent().imgexpend(); })
            }
        }
        else {
            $(this).children('a').bind("click", function () {
                //$(this).parent('li').parent('ul').children('li').children('ul[show=true]').hide(slideSpeed);
                //$(this).parent('li').parent('ul').children('li').children('img').attr('src', './common/resources/images/imgOffClosed.png');
            })
        }
    })
}
$.fn.extend({
    imgexpend: function () {
        if ($(this).children('ul[show=true]').html() != null) {
            $(this).parent('ul').children('li').children('ul[show=true]').hide(slideSpeed);
            $(this).parent('ul').children('li').children('img').attr('src', './common/resources/images/imgOffClosed.png');
            $(this).delay(100).is(':hidden');
            if ($(this).children('ul[show=true]').css('display') == "block") {
                $(this).children('ul[show=true]').hide(slideSpeed);
                $(this).children('img').attr('src', './common/resources/images/imgOffClosed.png');
                $(this).children('a').removeClass('bondi-blue-on');
            } else {
                $(this).children('ul[show=true]').show(slideSpeed);
                $(this).children('img').attr('src', './common/resources/images/imgOnOpen.png');
                $(this).children('a').addClass('bondi-blue-on');
            }
            return false;
        }
    }
});
