

/**
 * Data
 */
var contentList = [
    {
        title: "Witaj swiecie",
        description: "Lelum po lelum Lelum po lelum Lelum po lelu3uuuuuuuuuuuuum",
        tags: ['php', 'symfony'],
        link: 'repository.io'
    },
    {
        title: "Witaj swiecie 22323",
        description: "Lelum po lelum Lelum po lelum Lelusdsssssssssssss sssssssssssssssss sdsddddddddddddddddd dddddddddddddddddm po lelum asds sdssssssss",
        tags: ['js', 'symfony', 'python'],
        link: 'repository.io'
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

        row.find('.c-title').append(this.createIconList(cData.tags));
        row.find('.c-title-m').html(cData.title);
        row.find('.c-description').html(cData.description)
        row.find('.c-link a').attr('href', cData.link)
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

