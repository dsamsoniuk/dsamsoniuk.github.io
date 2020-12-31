

/**
 * Data
 */
var contentList = [
    {
        title: "Gra 'Surowcowy Geniusz'",
        description:'Strategy game is about creating building, collecting materials like stones, wood, food which can be trade with other users. There is possible too start battles with players.',
        tags: ['php', 'symfony'],
        link: 'https://gitlab.com/dsamsoniuk/empire'
    },
    {
        title: "Converter music format",
        description: "Converter with GUI allows tochange format music mp3 to mp4, avi, flv itd.",
        tags: ['python'],
        link: 'https://gitlab.com/dsamsoniuk/konwerter_audio'
    },
    {
        title: "Solar system",
        description: "View all planets of our solar system with description of distance. Propotion of distance from the sun has been preserved but the size of the sun was decresed to half of his size",
        tags: ['js'],
        viewLink: 'https://dsamsoniuk.gitlab.io/uklad_sloneczny/'
    },
    {
        title: "MVC Framework DS",
        description: "Simple framework writed in PHP 7 with composer. Framework includes controller, routing, templates and ORM",
        tags: ['php'],
        link: 'https://gitlab.com/dsamsoniuk/ds_framework_mvc'
    },
    {
        title: "Tutorial PrestaShop 1.7.6.7",
        description:"Guide with examples how to create individual elements PrestaShop for example modules, widgets, controllers etc.",
        tags: ['php'],
        link: 'https://github.com/damian-pm/prestashop_examples'
    },
    {
        title: "Newspaper",
        description:'Template of portal newspaper, which contains displaying articles and list, additionally got comment system',
        tags: ['php', 'symfony', 'js'],
        link: 'https://gitlab.com/dsamsoniuk/newspaper'
    },
    {
        title: "Game 'MultiCat'",
        description: "Game multiplayer, roles of game are simple who will collect more coins will win. Game is controle by key arrows",
        tags: ['nodejs','js'],
        link: 'https://github.com/dsamsoniuk/multi_cat'
    }
];


/**
 * Fill the content
 */
var workerContent = {
    createIconList: function(tags){
        var img = new Image();
        var images = [];
        var tag = {};
        for (var i=0; i < tags.length; i++) {
            tag = workerMenu.getTagByName(tags[i]);
            if (tag) {
                img = new Image();
                img.src = tag.icon;
                img.className = 'img-sm img-def';
                images.push(img);
            }
        }
        return images;
    },
    setContent: function(contentBox, cRow, cData){
        var row = cRow.clone();
        var btnView = $('<a class="btn btn-success">podgląd</a>');
        row.find('.c-title').append(this.createIconList(cData.tags));
        row.find('.c-title-m').html(cData.title);
        row.find('.c-description').html(cData.description);
        if (!cData.link) {
            row.find('.c-link a.btn-repo').remove();
        } else {
            row.find('.c-link a.btn-repo').attr('href', cData.link);
        }
        if (cData.viewLink) {
            btnView.attr('href', cData.viewLink)
            row.find('.c-link').append(btnView);
        }
        row.removeClass('hidden')
        contentBox.append(row);
    },
    filterByTag: function(list, tag){
        var filteredList = [];
        for (var i=0; i < list.length; i++) {
            if (list[i].tags.indexOf(tag) != -1) {
                filteredList.push(list[i]);
            }
        }
        return tag === '' ? list : filteredList;
    },
    
    init: function(list){
        var contentBox = $('#c-content');
        var cRow = contentBox.find('.c-row-template').eq(0);
        var tag = workerMenu.getCurrentTag();

        contentBox.html('');
        contentBox.append(cRow);

        list = this.filterByTag(list, tag);
        for (var i=0; i < list.length; i++) {
            this.setContent(contentBox, cRow, list[i]);
        }
    }
}

