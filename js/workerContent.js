

/**
 * Data
 */
var contentList = [
    {
        title: "App course en",
        description:'App course - learn english from mobile device. Select language show random text and try translate.',
        tags: ['js', 'nativescript'],
        link: 'https://github.com/dsamsoniuk/app-course-eng'
    },
    {
        title: "mamkolekcje.pl",
        description:'Portal about collecting exhibits, you can enjoy giving commants, rate, voting, grouping exhibits. There is also forum, articles, newses.',
        tags: ['php', 'symfony'],
        viewLink: 'http://mamkolekcje.pl'
    },
    {
        
        title: "Game 'Surowcowy Geniusz'",
        description:'It is strategy game. Game allow to create buildings. gathering resources like stone,wood or food. You can also trade resources in market and even you can fight with other players.',
        tags: ['php', 'symfony'],
        link: 'https://gitlab.com/dsamsoniuk/empire'
    },
    {
        title: "Converter music format",
        description: "Converter with GUI allows to change format music mp3 to mp4, avi, flv itd.",
        tags: ['python'],
        link: 'https://github.com/dsamsoniuk/music_convert'
    },
    {
        title: "Solar system",
        description: "View all planets of our solar system with description of distance. Propotion of distance from the sun has been preserved but the size of the sun was decresed to half of his real size",
        tags: ['js'],
        viewLink: 'https://dsamsoniuk.gitlab.io/uklad_sloneczny/'
    },
    {
        title: "Micro-framework CV",
        description: "Simple framework writed in PHP 7 with composer. Framework includes controller, routing, templates and ORM",
        tags: ['php'],
        link: 'https://github.com/dsamsoniuk/ds-framework'
    },
    {
        title: "Tutorial PrestaShop 1.7.6.7 -  <a href=\"https://www.prestashop.com/forums/profile/1644129-damian_pm\">Profile PS</a>",
        description:"Guide with examples how to create individual elements PrestaShop for example modules, widgets, controllers etc.",
        tags: ['php'],
        link: 'https://github.com/damian-pm/prestashop_examples',
    },
    {
        title: "PrestaShop module - Chat bot",
        description: "Simple chat between employeer and customer. After first enter to the web, customer unlogged will receives token which makes unique talk.",
        tags: ['vue','js','php'],
        link: 'https://github.com/dsamsoniuk/prestashop_examples/tree/master/examples/ModuleChat'
    },
    {
        title: "Newspaper",
        description:'Template of portal newspaper, which contains displaying articles and list, additionally got comment system',
        tags: ['php', 'symfony', 'js'],
        link: 'https://gitlab.com/dsamsoniuk/newspaper'
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
        var btnView = $('<a class="btn btn-success">view</a>');
        row.find('.c-title').append( this.createIconList(cData.tags));
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

