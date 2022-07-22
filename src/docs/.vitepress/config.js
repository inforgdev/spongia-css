export default {
    title: 'SpongiaCSS',
    description: 'SpongiaCSS Website',
    base: '/spongia-css/',
    appearence: true,
    themeConfig: {
        siteTitle: 'SpongiaCSS',
        socialLinks: [
            { icon: 'github', link: 'https://github.com/inforgdev/spongia-css' },
        ],
        footer: {
            copyright: "By Inforg",
        },
        sidebar: [
            {
                text: 'Documentation',
                collapsible: true,
                items: [
                    { text: 'Form', link: '/form' },
                    { text: 'Layout', link: '/layout' },
                    { text: 'Media', link: '/media' },
                    { text: 'Typography', link: '/typo' },
                    { text: 'UI', link: '/ui' },
                ],
            }
        ],
    },
}