

/**
 * Data
 */
var menuList = [
    {
        text: 'Symfony',
        icon: 'source/symfony-icon.png',
        tag: 'symfony'
    },
    {
        text: 'Php',
        icon: 'source/php-icon.png',
        tag: 'php'
    },
    {
        text: 'JavaScript',
        icon: 'source/js-icon.png',
        tag: 'js'
    },
    {
        text: 'NodeJs',
        icon: 'source/node-js-icon.png',
        tag: 'nodejs'
    },
    {
        text: 'React',
        icon: 'source/react-icon.png',
        tag: 'react'
    },
    {
        text: 'Python',
        icon: 'source/python-icon.png',
        tag: 'python'
    }
];



/**
 * Fill the menu list
 */
var workerMenu = {
    tags: [],
    changeTag: function(tag){
        window.choosenTag = tag;
        this.activeMenuByTag(tag);
    },
    activeMenuByTag: function(tag){
        var list = $('ul#menu-list').find('li.menu-row');
        var row = {};
        for (var i=0; i < list.length; i++) {
            row = $(list[i]);
            if (tag == '') {
                row.addClass('active');
            } else if (row.find('.menu-link').data('tag') === tag){
                row.addClass('active');
            } else {
                row.removeClass('active')
            }
        }
    },
    getCurrentTag: function(){
        return window.choosenTag;
    },
    getTagByName: function(name){
        for (var i=0; i < this.tags.length; i++) {
            if (name === this.tags[i].tag) {
                return this.tags[i];
            }
        }
        return false;
    },
    createRow: function(box, tempalteMenuRow, row){
        var temp = tempalteMenuRow.clone();
        temp.find('.img-def').attr('src', row.icon);
        if (!row.icon) {
            temp.find('.img-def').remove();
        }
        temp.removeClass('hidden');
        temp.removeClass('bm-');
        temp.find('.bm-text').html(row.text);
        temp.find('.menu-link').data('tag', row.tag)
        box.append(temp);
    },
    startMenu: function(){
        var menuBox = $('ul#menu-list');
        var tempalteMenuRow = menuBox.find('li.menu-row').eq(0);
 
        for (var i=0; i < this.tags.length; i++) {
            this.createRow(menuBox, tempalteMenuRow, this.tags[i]);
        }
    },
    action: function(){

    },
    init: function(tags){
        this.tags = tags;
        window.choosenTag = '';
        this.startMenu();
    }
}