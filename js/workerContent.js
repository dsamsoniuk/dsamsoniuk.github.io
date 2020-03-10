

/**
 * Data
 */
var contentList = [
    {
        title: "Gra 'Surowcowy Geniusz'",
        description: "Gra strategiczna polegająca na tworzeniu budowli, zbieraniu surowców takich jak kamienie, drewno, żywność dzięki którym można handlować z innymi graczami. Również są możliwe konfrontacj z innymi graczami. Gra przypomina God of Empire lub Travian.",
        tags: ['php', 'symfony'],
        link: 'https://gitlab.com/dsamsoniuk/empire'
    },
    {
        title: "Konwerter formatu muzyki",
        description: "Konwerter wraz z GUI pozwala na zamiane formatu muzyki z mp3 na mp4, avi, flv itd.",
        tags: ['python'],
        link: 'https://gitlab.com/dsamsoniuk/konwerter_audio'
    },
    {
        title: "MVC Framework DS",
        description: "Własnej roboty framework napisany w PHP 7, zawiera kontrolery, routing, szablon (Twig), ORM.",
        tags: ['php'],
        link: 'https://gitlab.com/dsamsoniuk/ds_framework_mvc'
    },
    {
        title: "Gazeta",
        description: "Szablon gazety który pozwala na wyświetlanie artykułów oraz listy dodatkowo posiada system komentarzy.",
        tags: ['php', 'symfony', 'js'],
        link: 'https://gitlab.com/dsamsoniuk/newspaper'
    },
    {
        title: "Gra 'MultiCat'",
        description: "Prosta gra multiplayer, zasady gry są proste kto zbierze więcej monet wygrywa.",
        tags: ['nodejs','js'],
        link: 'https://github.com/dsamsoniuk/multi_cat'
    },
    {
        title: "Układ słoneczny",
        description: "Podgląd wszystkich planet naszego układu z opisem odległości. Proporcje odległości od słońca zostały zachowane. Wielkość słońca jest o połowe mniejsza.",
        tags: ['js'],
        viewLink: 'https://dsamsoniuk.gitlab.io/uklad_sloneczny/'
    },
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

