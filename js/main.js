$(function(){
    var status;
    $(".sub").css({"display":"none"});

    $(window).resize(function(){
        var w=$(this).width();
        //console.log("w : "+w);

        if(w <= 767){
          status="mobile" ;
        }else{
            status="pc";
            $(".gnb").removeAttr("style");
            $(".gnb .sub").each(function(){
                if($(this).css("display")=="block"){
                    $(this).css({"display":"none"});
                }
            });
        }
     });
    $(window).trigger("resize");

    $(".gnb > li").hover(
    function(){
        if(status=="pc"){
            //$(this).find(".sub).css({"display":"block});
            $(this).find(".sub").slideDown(300);
        }
    },
        function(){
            if(status=="pc"){
                //$(this).find(".sub").css({"display":"none"});
                $(this).find(".sub").slideUp(300);
            }
        }
    );
    $(".mobile_tab").click(function(e){
        e.preventDefault();
        $(".gnb").slideToggle(300);
        if($(".gnb .sub").css("display")=="block"){
            $(".gnb .sub").slideUp(300);
        }
    });
    $(".gnb a").click(function(e){

        if(status=="mobile"){   e.preventDefault();
            if($(this).next(".sub").css("display")=="none"){
                $(".gnb .sub").slideUp(300);
                $(this).next(".sub").slideDown(300);
            }else{
                $(this).next(".sub").slideUp(300);
            }
        }
    });
});
