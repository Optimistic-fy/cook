$(document).ready(function () {
	var img_ul=$('.wrap').eq(0);
	var img_li=img_ul.find('li');
	function ChangeImg(e){
		img_li.eq(e).fadeIn(1000).siblings().fadeOut(1000);
	};

	var timmer=null,num=0;

    function AutoPlay(){
        timmer=setInterval(function(){
            num++;
            if(num>1){
                num=0;
            }
            ChangeImg(num);
        },2000);
    };
    AutoPlay();

    var btn_pre=$('.derict .pre');
    var btn_next=$('.derict .next');

    btn_pre.on('click',function(){
        clearInterval(timmer);
        num--;
        if(num<0){
            num=1;
        }
        ChangeImg(num);
        AutoPlay();
    });
    btn_next.on('click',function(){
        clearInterval(timmer);
        num++;
        if(num>1){
            num=0;
        }
        ChangeImg(num);
        AutoPlay();
    });

    img_li.on('mouseenter',function(){
        clearInterval(timmer);
    })
    .on('mouseout',function(){
        AutoPlay();
    });

    var title_li=$('.row-top ul').eq(0).find('li').eq(2);
    var sec_list = $('.none');
    title_li.mouseenter(function(){
        sec_list.show();
        sec_list.mouseenter(function(){
            sec_list.show();
        });
    });
    title_li.mouseleave(function(){
        sec_list.hide();
    });
})