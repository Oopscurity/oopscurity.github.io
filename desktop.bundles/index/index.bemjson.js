module.exports = {
    block : 'page',
    title : 'Oopscurity',
    favicon : '/favicon.ico',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem : 'css', url : 'index.min.css' }
    ],
    scripts: [
        { elem : 'js', url : 'index.min.js' }
    ],
    content : [
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
                                            mods: { type: 'title' },
                                            content: 'Artyom Kravchenko'
                                        },
                                        {
                                            block: 'text',
                                            mods: { type: 'description' },
                                            content: 'Front End Developer'
                                        }
                                    ]
                                },
                                {
                                    block: 'text',
                                    mods: { type: 'title' },
                                    mix: { block: 'about', elem: 'promo' },
                                    content: 'True quality in the website development'
                                },
                                {
                                    block: 'text',
                                    mods: { block: 'description' },
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
                                {},
                                {}
                            ].map(function(item) {
                                return [
                                    {
                                        elem: 'item',
                                        content: [
                                            {
                                                block: 'link',
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

            ]
        },
        {
            block: 'footer',
            content: [
                
            ]
        }
    ]
};
