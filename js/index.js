

$(document).ready(function(){

    workerMenu.init(menuList);

    workerContent.init(contentList);

    $('.menu-link').on('click', function(e){
        e.preventDefault();
        var tag = $(this).data('tag');
        workerMenu.changeTag(tag);
        workerContent.init(contentList);
    });
});
