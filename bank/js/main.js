$(function () {
    compatible();
    inputText();
    $('.main:not(.login)').addClass('mainBg');

    $(".menu li").each(function () {
		var $this = $(this);
		var $menu = $('.menu > ul:first');
        if ($this.has('ul').length && !$this.parent().is($menu)) {
            $this.find('img').remove();
            $this.prepend($('<pre class="nextMenu">').text($this.contents().text().replace(/(\w+)\s*/g, '-$1').split('-')[1]));
        }
        $this.hover(function () {
            $this.addClass("frhover");
            $this.prev().addClass("pre");
            $this.children("ul").fadeIn(200);
        }, function () {
            $this.removeClass("frhover");
            $this.prev().removeClass("pre");
            $this.children("ul").fadeOut(200);
        });
    });

    $(".menu ul li a").each(function () {
        $(this).click(function () {
            $(".menu ul:not(:first)").fadeOut(200, function () {
                $('.main').removeClass('mainBg');
            });
            $(".main iframe").attr("src", '').addClass('mainiFrameBg');
            var url = $(this).attr("url");
            loading = setTimeout(function () {
                $(".main iframe").attr("src", url).removeClass('mainiFrameBg');
                clearTimeout(loading);
            }, 1000);

            var $parentsLi = $(this).parents('li').not(':first');
            for (var i = $parentsLi.length - 1; i >= 0; i--) {
                var ts = '  >  '
                if (i == $parentsLi.length - 1) {
                    $('.menu').attr('role', $parentsLi.eq(i).find('b').text().replace(/(\w+)\s*/g, '$1'));
                } else {
                    $('.menu').attr('role', $('.menu').attr('role') + ts + $parentsLi.eq(i).contents().text().replace(/(\w+)\s*/g, '-$1').split('-')[1]);
                }
            }
            $('.menu').attr('role', $('.menu').attr('role') + '  >  ' + $(this).text());
        });
    });

    $(".menu ul.sec li:nth-child(odd)").addClass("even");

    scrollBar();
    $(window).resize(function () {
        scrollBar();
    });
})

function compatible() {
    var kuandu = $('body').width();
    var gaodu = $('body').height();
    var kuandu1 = $('.menu').width();
    $('.menu').css({
        height: gaodu - 87,
        top: 57
    });
    $('.menu ul').css({
        width: kuandu1 - 9
    });
    $('.menu ul.fr li p').css({
        width: kuandu1 - 122
    });
    $(".menu ul.sec").css("left", kuandu1 - 25);
    $(".menu ul.thr,.menu ul.fou").css("left", kuandu1 - 10);
    $('.main').css({
        width: kuandu - kuandu1 + 8,
        height: gaodu - 87
    });
}

function inputText() {
    $('.loginForm input:text, .loginForm input:password').each(function () {
        $(this).val('').bind('keydown checkInput', function () {
            if ($(this).val().length > 0) {
                $('.login span.' + $(this).attr('class')).html('&nbsp;');
            } else {
                var bgText;
                if ($(this).is('input:text.userName')) {
                    bgText = '用户名';
                    $('.login span.userName').text(bgText);
                } else {
                    bgText = '登录密码';
                    $('.login span.password ').text(bgText);
                }
            }
        });
    }).trigger('checkInput');

    $('.button_login').click(function () {
        $(this).text('正在登录...');
        window.open('index.html', '_self');
    });
}

function scrollBar() {
    $(".menu li").each(function () {
        var $tempUL = $(this).children("ul");
        var liHeight = $tempUL.children('li').height();
        var menuHeight = $tempUL.children('li').length * liHeight;

        $tempUL.children('li:first').css('margin-top', 0);
        if (menuHeight > $('div.menu').height()) {
            var menuDivHeight = $('div.menu').height();
            if ($tempUL.children('.ui-slider-handle').length <= 0) {
                $tempUL.append($('<a class="ui-slider-handle"><span class="scrollhead"/><span class="scrollbody"/><span class="scrollfoot"/></a>'));
            }
            var numberOfMoreItems = Math.ceil((menuHeight - menuDivHeight) / liHeight);
            var sheadHeight = $tempUL.children('.ui-slider-handle').find('.scrollhead').height();
            var stepLength = Math.floor((menuDivHeight - 6 - Math.floor(Math.pow(menuDivHeight, 2)) / menuHeight) / numberOfMoreItems);
            $tempUL.children('.ui-slider-handle').css({ left: $(this).parent().width() + 5, top: 3 })
                .find('.scrollbody').height(menuDivHeight - 6 - sheadHeight * 2 - stepLength * numberOfMoreItems);

            var scrolledHeight = 0;
            $tempUL.unbind('mousewheel').mousewheel(function (event, delta, deltaX, deltaY) {
                scrolledHeight = parseInt($(this).children('li:first').css('margin-top')) + liHeight * delta;
                if (Math.abs(scrolledHeight) <= (($tempUL.children('li').length + 1) * liHeight - menuDivHeight) && scrolledHeight <= 0) {
                    $(this).children('li:first').css('margin-top', scrolledHeight);

                    var $scrollBar = $(this).children('.ui-slider-handle:first');
					var topPostion = parseInt($scrollBar.css('top')) - stepLength * deltaY;
					if(topPostion < 3) {
						topPostion = 3;
					} else if(menuDivHeight <= scrolledHeight + topPostion ) {
						topPostion = menuDivHeight - scrolledHeight - 3;
					}
                    $scrollBar.css({ top: topPostion });
                }
                event.stopPropagation();
                event.preventDefault();
            });
            /*
            $tempUL.find('.ui-slider-handle').drag(function (ev, dd) {
                var stepLength = Math.round(dd.offsetY / liHeight) * liHeight;
                if (stepLength + $(this).height() > $tempUL.height() - 5) {
                    stepLength = $tempUL.height() - $(this).height() - 5;
                } else if (stepLength < 5) {
                    stepLength = 5;
                }
                $('title').text(stepLength);
                $(this).offset({ top: stepLength });
                var marginTop = -Math.round(dd.offsetY / liHeight) * liHeight;
                if (!(marginTop > ($tempUL.children('li').length + 1) * liHeight || marginTop < 0)) {
                    $tempUL.children('li:first').css('margin-top', -Math.round(dd.offsetY / liHeight) * liHeight);
                }
            }, {relative: true});
            */
        } else {
            var $thisScrollBar = $tempUL.children('.ui-slider-handle');
            if ($thisScrollBar.length > 0) {
                $thisScrollBar.remove();
                $tempUL.unbind('mousewheel');
            }
        }
    });
}