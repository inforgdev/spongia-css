export default {
    title: 'SpongiaCSS Docs',
    description: 'SpongiaCSS Documentation',
    base: '/spongia-css/',
    appearence: true,
    themeConfig: {
        siteTitle: 'SpongiaCSS Docs',
        socialLinks: [
            { icon: 'github', link: 'https://github.com/inforgdev/spongia-css' }
        ],
        sidebar: [
            {
                text: 'Content',
                collapsible: true,
                items: [
                    { text: 'Form', link: '/form' },
                    { text: 'Layout', link: '/layout' },
                    { text: 'Media', link: '/media' },
                    { text: 'Typography', link: '/typo' },
                    { text: 'UI', link: '/ui' },
                ],
            }
        ]
    }
}