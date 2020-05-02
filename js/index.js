

$(document).ready(function(){

    workerMenu.init(menuList);

    workerContent.init(contentList);

    $('.menu-link').on('click', function(e){
        e.preventDefault();
        var tag = $(this).data('tag');
        workerMenu.changeTag(tag);
        workerContent.init(contentList);
    });
    // Burger menu
    $('#menu-switch').on('click', function(e){
        e.preventDefault();
        $('.menu-list-switch').toggle();
    });
    
    $( window ).resize(function() {
        var windowWidth = $(document).width(); 
        if (windowWidth < 1140) {
            $('#menu-switch').show();
            $('.menu-list-switch').hide();
        } else {
            $('#menu-switch').hide();
            $('.menu-list-switch').show();
        }
    });

    var windowWidth = $(document).width(); 
    if (windowWidth < 1140) {
        $('#menu-switch').show();
        $('.menu-list-switch').hide();
    } else {
        $('#menu-switch').hide();
        $('.menu-list-switch').show();
    }

});
