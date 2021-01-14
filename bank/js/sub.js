$(document).ready(function() {
    cpt();

    $("#leftTable tr:odd, .dataTable tr:odd").addClass("even")
    $("#leftTable tr, .dataTable tr").click(function () {
        $(this).addClass("clk");
        $(this).siblings().removeClass("clk")
    })

    $('#tabs ul li:first, .tabs ul li:first').css('margin-left', 15);

    $("#tabs").tabs();
    $('select.inSelect, select.inSelectShort, select.inSearch, select.inSearchShort, select.inHelp').selectbox();
    
    $(window).resize(function () {
        repositionOfSelectbox();
    });
    repositionOfSelectbox();
    
    $('.top li:not(.line)').each(function () {
        $(this).hover(function () {
            $(this).addClass('commandHover');
        }, function () {
            $(this).removeClass('commandHover');
        });
    });
    initTitle();

    //$('div.dialog').css('margin-top', -$('div.dialog').height());

    $(".slide").toggle(function () {
        $(".slide_click").addClass("slide2");
        $(".left").animate({
            left: -393
        }, 200);
        $(".right").animate({
            width: $('body').width() - 12
        }, 200, function () {
            repositionOfSelectbox();
        });
    }, function () {
        $(".slide_click").removeClass("slide2");
        $(".left").animate({
            left: 0
        }, 200);
        $(".right").animate({
            width: $('body').width() - 406
        }, 200, function () {
            repositionOfSelectbox();
        });
    });

    adaptElements();
});

function repositionOfSelectbox() {
    $('.selectbox').each(function () {
        $(this).next('div.selectbox-wrapper').css({
            left: $(this).position().left
        });
    });
};

function initTitle() {
    //init title
    var title = $(window.parent.document).find('.menu').attr('role').split('>');
    var titleLength = title.length - 1;
    var tempTitle = '';
    for (var i = 0; i <= titleLength - 1; i++) {
        if (i == 0) {
            $('.top2').text(title[i] + '  >  ');
        } else {
            $('.top2').text($('.top2').text() + title[i] + '  >  ');
        }
    }
    $('<span/>').text(title[titleLength]).appendTo('.top2');
}

function cpt() {
	$('.left,.slide,.right').css({
	    height: $('body').height() - 82
	});
	if (parseInt($('.left').css('left')) < 0) {
	    $('.right:not(.noleft)').css({
	        width: $('body').width() - 12
	    });
	} else {
	    $('.right:not(.noleft)').css({
	        width: $('body').width() - 406
	    });
	}
}

function adaptElements() {
    $('.inDate button, .inTime button').replaceWith('<input type="button" />');
}