import {extend} from 'flarum/common/extend';
import app from 'flarum/common/app';

import CommentPost from 'flarum/forum/components/CommentPost';
import {hljsDefaults} from './helpers/hljsDefaults'

var flag = 1;

app.initializers.add('therealsujitk/flarum-ext-hljs', () => {
    extend(CommentPost.prototype, 'headerItems', function (items) {
        items.add('therealsujitk-hljs',
            m('null', {
                id: 'therealsujitk-hljs',
                oncreate: () => {
                    var hljsTheme = app.forum.attribute('theme_name');

                    if(hljsTheme === null || hljsTheme === "")
                        hljsTheme = 'default';
                    
                    var counter = 0;
                    var hljs = setInterval(function() {
                        if(flag) {
                            if(typeof document.querySelectorAll("link[href*='cdnjs.cloudflare.com/ajax/libs/highlight.js/']")[0] != 'undefined') {
                                document.querySelectorAll("link[href*='cdnjs.cloudflare.com/ajax/libs/highlight.js/']")[0].href = '//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.5.0/styles/' + hljsTheme + '.min.css';
                                flag = 0;
                                clearInterval(hljs);
                            }
                            else if(typeof document.querySelectorAll("link[href*='cdn.jsdelivr.net/gh/highlightjs/']")[0] != 'undefined') {
                                document.querySelectorAll("link[href*='cdn.jsdelivr.net/gh/highlightjs/']")[0].href = '//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.5.0/build/styles/' + hljsTheme + '.min.css';
                                flag = 0;
                                clearInterval(hljs);
                            } else if (counter >= 50) {
                                clearInterval(hljs);
                            }

                            ++counter;
                        }
                    }, 100);

                    let baseUrl = app.forum.attribute('baseUrl');
                    hljsDefaults(hljsTheme, baseUrl);
                }
            })
        )
    });
});
