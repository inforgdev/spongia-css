export default {
    siteTitle: "SpongiaCSS",
    nav: [
        { text: "Get Started", link: "/intro/about" },
        { text: "Documentation", link: "/form" },
    ],
    socialLinks: [
        { icon: "github", link: "https://github.com/inforgdev/spongia-css" },
    ],
    footer: {
        copyright: "By Inforg",
    },
    sidebar: [
        {
            text: "Introduction",
            collapsible: true,
            items: [
                { text: "About", link: "/intro/about" },
                { text: "Install", link: "/intro/install" },
                { text: "Usage", link: "/intro/usage" },
            ],
        },
        {
            text: "Documentation",
            collapsible: true,
            items: [
                { text: "Form", link: "/form" },
                { text: "Layout", link: "/layout" },
                { text: "Media", link: "/media" },
                { text: "Typography", link: "/typo" },
                { text: "UI", link: "/ui" },
            ],
        },
    ],
};