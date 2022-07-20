export default {
    title: 'SpongiaCSS Docs',
    description: 'SpongiaCSS Documentation',
    base: '/spongia-css/',
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
                    { text: 'Form', link: '/_form' },
                    { text: 'Layout', link: '/_layout' },
                    { text: 'Media', link: '/_media' },
                    { text: 'Typography', link: '/_typo' },
                    { text: 'UI', link: '/_ui' },
                ],
            }
        ]
    }
}