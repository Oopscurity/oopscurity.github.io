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
                    block: 'footer',
                    content: [
                        {
                            elem: 'section',
                            content: [
                                {
                                    block: 'text',
                                    mods: { type: 'description' },
                                    mix: { block: 'copyright' },
                                    content: '2016 &copy; Artyom Kravchenko'
                                }
                            ]
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
                    js: { paint: true, together: 2, wheel: 'page' },
                    content: [
                        {}, {}, {}, {}, {}
                    ]
                }
            ]
        }
    ]
};
