tinymce.PluginManager.add('typograf', function (editor, url) {
    'use strict';

    var scriptLoader = new tinymce.dom.ScriptLoader(),
        tp,
        typo = function () {
            if (tp) {
                editor.setContent(tp.execute(editor.getContent()));
                editor.undoManager.add();
            }
        };

    scriptLoader.add(url + '/typograf.min.js');

    scriptLoader.loadQueue(function () {
        tp = new Typograf(editor.settings.typograf || {
            enableRule:"ru/optalign/*",
            locale:["ru","en-US"],
            htmlEntity:{type:"digit"}
        });
        console.log(editor.settings)
    });

    editor.addButton('typograf', {
        text: 'Типографика',
        icon: 'blockquote',
        onclick: typo
    });

    editor.addMenuItem('typograf', {
        context: 'format',
        text: 'Типографика',
        icon: 'blockquote',
        onclick: typo
    });
});