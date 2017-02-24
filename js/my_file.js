$(document).ready(function(){
    $("button").click(function(){
        $("#text").slideToggle();

        if ($("button").html() === "Show less"){
          $("button").html("Know more");
        } else {
          $("button").html("Show less");
        }

    });
});
