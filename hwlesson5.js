$(document).ready(function(){
    var name;
    var finalName;

    $("button.firstLink").click(function(){
        $("div.first").show();
        $("div.second").hide();
        $("div.third").hide();
        $("div.story").hide();
    });
    $("button.secondLink").click(function(){
        $("div.first").hide();
        $("div.second").show();
        $("div.third").hide();
        $("div.story").hide();
    });
    $("a").click(function(){
        $("div.first").hide();
        $("div.second").hide();
        $("div.third").show();
        $("div.story").hide();
    });
    
    /*$( "input.name" ).keyup(function() {
        var name = $( this ).val();
        var finalName = '';
        finalName = finalName + name;
    });

    $( "input.character" ).keyup(function() {
        var character = $( this ).val();
        var finalCharacter = '';
        finalCharacter = finalCharacter + character;
    });

    $( "input.adverb" ).keyup(function() {
        var adverb = $( this ).val();
        var finalAdverb = '';
        finalAdverb = finalAdverb + adverb;
    });

    $( "input.adjective" ).keyup(function() {
        var adjective = $( this ).val();
        var finalAdjective = '';
        finalAdjective = finalAdjective + adjective;
    });*/

    $('button.tellStory').on('click', function() {
        var name = $('input.name').val();
        var character = $('input.character').val();
        var adverb = $('input.adverb').val();
        var adjective = $('input.adjective').val();
        $("div.story").show();
        $('.story').text("Yera loves you, " + name + '. ' + character + ' also loves you. Even of you feel ' + adverb + ' or you think that you are ' + adjective + ' please, love yourself :3');
    });

    $('button.tellSize').on('click', function() {
        var height = $('.height1').val();
        var width = parseInt($('.width1').val());
        var colors = parseInt($('.colors1').val());
        var x = 0;
        while(colors>1){
            x = x + 1;
            colors = colors / 2;
        }
        $("div.story").show();
        console.log(x);
        $('.story').text("file size is: " + height*width*x/8); 
    });
});

function pageLoadFunction() {
    $("div.first").hide();
    $("div.second").hide();
    $("div.third").show();
    $("div.story").hide();
}