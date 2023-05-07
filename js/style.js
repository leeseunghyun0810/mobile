$(function(){
    //header
    $(".menu_open").on('click',function(){
        $(".search_wrap").stop().hide();
        $(".menu_wrap").stop().fadeToggle();
        $(".menu_wrap .menu > ul > li").each(function(index){
            $(this).delay(index*200).css({"opacity":"0"}).animate({opacity:"1"});
        });
        $("html").toggleClass("active")
    });
    $(".close").on('click',function(){
        $(".menu_wrap").stop().fadeOut();
        $(".search_wrap").stop().fadeOut();
        $("html").css({overflowY:"auto"});
    });
    $(".search_open").on('click',function(){
        $(".menu_wrap").stop().hide();
        $(".search_wrap").stop().fadeIn("fast");
        $("html").css({overflowY:"hidden"});
    });
    
    //footer
    $(".ft_info .ft_show").on('click',function(){
        alert("asdf");

        $(this).find("span").toggleClass("active");
        $(".ft_info .ft_business").stop().fadeToggle();
    })

    /*
    //main
    let $img = $(".changeimg ul li");
    let $text = $(".changeimg ul li .des .bg");
    let oldImg = 0;  
    let newImg = 0; 
    let oldText = 0;  
    let newText = 0;
    let count = $img.length;

    //이미지&텍스트 전환 효과
    function changeImg(newImg){ 

        if(oldImg != newImg){
            $img.eq(oldImg).removeClass("imgVisible");
            $img.eq(newImg).addClass("imgVisible"); 
        };
        oldImg = newImg;
    };
    function changeText(newText){ 

        if(oldText != newText){
            $text.eq(oldText).removeClass("textVisible");
            $text.eq(newText).addClass("textVisible"); 
        }
        oldText = newText;
    };
    //auto
    function autoImg(){

        newImg++;
        if(newImg > count-1){ 
            newImg = 0;
        }
        changeImg(newImg);
    };
    function autoText(){

        newText++;
        if(newText > count-1){ 
            newText = 0;
        }
        changeText(newText)
    }

    timer1=setInterval(autoImg,4000); 
    timer2=setInterval(autoText,4000); 

    //faq
    $("#faq .question").on('click',function(){
        $("#faq .answer").stop().slideUp();
        $(this).siblings(".answer").stop().slideToggle();
        $(this).parent("li").siblings().find(".question > span").removeClass("active");
        $(this).find("span").stop().toggleClass("active");
    });

    //diffuser
    $("#diffuser .list_title").on('click',function(){
        $(this).find('span').toggleClass('active');
        $(this).find('ul').stop().slideToggle();       
    });
    $("#diffuser .list_title > ul > li").on('click',function(){
        const text = $(this).attr('data-alt');
        const text2 = $(this).attr('id');

        $("#diffuser .sub_title").html(text);
        $("#diffuser .list_title p").html(text);
        $("#diffuser .diffuser_items > li").hide();
        $(`.${text2}`).show();
    }); 
    $("#diffuser .list_style .one").on('click',function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $("#diffuser .diffuser_items").css({"grid-template-columns":"repeat(1, 1fr)"});
        $("#diffuser .main_name").css({fontSize:'13px'});
        $("#diffuser .sub_name").css({fontSize:'17px'});
        $("#diffuser .price").css({fontSize:'17px'});
    });
    $("#diffuser .list_style .grid").on('click',function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $("#diffuser .diffuser_items").css({"grid-template-columns":"repeat(2, 1fr)"});
        $("#diffuser .main_name").css({fontSize:'11px'});
        $("#diffuser .sub_name").css({fontSize:'14px'});
        $("#diffuser .price").css({fontSize:'14px'});
    });

    //구매 페이지 갤러리
    $("#buy .thumb img").on('click',function(){
        const att = $(this).attr('src');
        $("#buy #largeImg img").attr('src',att);
        $(this).parent().siblings().removeClass('active');
        $(this).parent().addClass('active');
    });
    $("#buy form select").on('click',function(){
        $("#buy form span").toggleClass('active');
    })

    //장바구니
    $("#shopping .all_selectChk").on('click',function(){
        //전체 선택
        let allCheck = $(this).is(':checked');
        
        if(allCheck){
            $("#shopping .selectChk input:checkbox").prop('checked',true);
            let checkL = $("#shopping input[name=item]:checked").length;

            $("#shopping .totalLength").text(checkL);    
        } else {
            $("#shopping .selectChk input:checkbox").prop('checked',false);
            $("#shopping .totalLength").text(0);    
        };
    });
    $("#shopping .selectChk input:checkbox, #shopping .all_selectChk").on('click',function(){
        //개별 선택 시 전체 선택 해제
        let selectChk = $("#shopping input[name=item]:checked").length;
        let selectLength = $("#shopping input[name=item]").length;
        
        if(selectChk != selectLength){
            $("#shopping .all_selectChk").prop('checked',false);
        } else {
            $("#shopping .all_selectChk").prop('checked',true);
        }
        $("#shopping .totalLength").text(selectChk);

        //체크박스 금액 더하기
        let sum = 0; //합계 초기화

        $('#shopping input[name=item]').each(function(){
            if($(this).is(':checked') == true){//체크박스 체크됐을 때
                let val = $(this).val();//체크된 체크박스 값
                let num = parseInt(val);//그 값을 정수로 변환

                sum = sum + num; //금액
            }
            $("#shopping .chkPrice span").text(sum.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원");//정수를 다시 문자열로 변환
        })
    });
    $("#shopping .order_btn .del").on('click',function(){

        $(this).parents(".selectChk").detach();

        let sum = 0; 

        $('#shopping input[name=item]').each(function(){
            if($(this).is(':checked') == true){
                let val = $(this).val();
                let num = parseInt(val);

                sum = sum + num;
            }
            $("#shopping .chkPrice span").text(sum.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원");//정수를 다시 문자열로 변환
        });
        let selectChk = $("#shopping input[name=item]:checked").length;
        $("#shopping .totalLength").text(selectChk);

    }) */
})
