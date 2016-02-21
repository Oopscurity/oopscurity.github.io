module.exports = {
    block : 'page',
    title : 'Oopscurity',
    favicon : '/favicon.ico',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'https://fonts.googleapis.com/css?family=Raleway:300,400' },
        { elem: 'css', url: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css' },
        { elem : 'css', url : 'index.min.css' }
    ],
    scripts: [
        { elem : 'js', url : 'index.min.js' }
    ],
    content : [
        {
            block: 'sidebar',
            content: [

            ]
        },
        {
            block: 'header',
            content: [
                {
                    elem: 'section',
                    content: [
                        {
                            block: 'about',
                            content: [
                                {
                                    elem: 'main',
                                    content: [
                                        {
                                            block: 'text',
                                            mods: { type: 'title', ctx: 'page' },
                                            mix: { block: 'about', elem: 'name' },
                                            content: 'Artyom Kravchenko'
                                        },
                                        {
                                            block: 'text',
                                            mods: { type: 'description' },
                                            mix: { block: 'about', elem: 'profession' },
                                            content: 'Front End Developer'
                                        }
                                    ]
                                },
                                {
                                    block: 'text',
                                    mods: { type: 'title', ctx: 'page' },
                                    mix: { block: 'about', elem: 'promo' },
                                    content: 'True quality in the website development'
                                },
                                {
                                    block: 'text',
                                    mods: { type: 'description' },
                                    mix: { block: 'about', elem: 'skills' },
                                    content: [
                                        'HTML', 'CSS', 'JavaScript', 'BEM'
                                    ].join(' / ')
                                }
                            ]
                        }
                    ]
                },
                {
                    elem: 'section',
                    content: [
                        {
                            block: 'social',
                            content: [
                                { place: 'github', url: '//github.com/oopscurity' },
                                { place: 'skype', url: 'skype:kravchenko-art?chat' },
                                { place: 'mail', url: 'mailto:oopscurity@mail.ru' }
                            ].map(function(item) {
                                return [
                                    {
                                        elem: 'item',
                                        content: [
                                            {
                                                block: 'link',
                                                mix: { block: 'social', elem: 'link', elemMods: { place: item.place } },
                                                url: item.url
                                            }
                                        ]
                                    }
                                ];
                            })
                        }
                    ]
                }
            ]
        },
        {
            block: 'content',
            content: [
                {
                    block: 'slider',
                    js: { together: 2, wheel: 'page' },
                    content: [
                        {}, {}, {}, {}, {}
                    ].map(function(item) {
                        return [
                            {
                                elem: 'inner',
                                content: [
                                    {
                                        block: 'image',
                                        mix: { block: 'slider', elem: 'image' },
                                        url: 'http://oopscurity.github.io/website-templates/001/dev/img/index.jpg'
                                    },
                                    {
                                        elem: 'text-group',
                                        content: [
                                            {
                                                block: 'text',
                                                mods: { type: 'title', ctx: 'article' },
                                                mix: { block: 'slider', elem: 'name' },
                                                content: 'Barbershop'
                                            },
                                            {
                                                block: 'text',
                                                mods: { type: 'description', ctx: 'article' },
                                                mix: { block: 'slider', elem: 'description' },
                                                content: [
                                                    {
                                                        block: 'link',
                                                        mix: { block: 'slider', elem: 'link' },
                                                        url: 'http://oopscurity.github.io/website-templates/001/dest/index.html',
                                                        content: 'link'
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ];
                    })
                }
            ]
        },
        {
            block: 'footer',
            content: [
                {
                    block: 'text',
                    mods: { type: 'description' },
                    mix: { block: 'copyright' },
                    content: '2016 &copy; Artyom Kravchenko'
                }
            ]
        },
        '<!-- Yandex.Metrika counter -->',
        {
            tag: 'script',
            content: [
                '// Yandex.Metrika counter\n',
                '(function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter33371013 = new Ya.Metrika({ id:33371013, clickmap:true, trackLinks:true, accurateTrackBounce:true }); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = "https://mc.yandex.ru/metrika/watch.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks");',
                '// /Yandex.Metrika counter'
            ]
        },
        {
            tag: 'noscript',
            content: [
                '<div><img src="https://mc.yandex.ru/watch/33371013" style="position:absolute; left:-9999px;" alt="" /></div>'
            ]
        },
        '<!-- /Yandex.Metrika counter -->'
    ]
};
