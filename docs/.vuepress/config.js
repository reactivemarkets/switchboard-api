module.exports = {
    title: "Reactive Markets Developer",
    description: "Develop for the Reactive Markets Platform",
    head: [
        ["link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" }],
        ["link", { rel: "icon", href: "/favicon.ico" }],
        ["link", { rel: "manifest", href: "/manifest.json" }],
        ["link", { rel: "apple-touch-icon", href: "/icons/apple-touch-icon.png" }],
        ["link", { rel: "mask-icon", href: "/icons/safari-pinned-tab.svg", color: "#4A90E2" }],
        ["meta", { name: "theme-color", content: "#4A90E2" }],
        ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
        ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }]
    ],
    plugins: [
        "@vuepress/active-header-links",
        "@vuepress/back-to-top",
        "@vuepress/medium-zoom",
        "@vuepress/nprogress"
    ],
    themeConfig: {
        docsDir: "docs",
        editLinks: true,
        lastUpdated: "Last Updated",
        logo: "/favicon-64.png",
        nav: [
            {
                text: "API",
                link: "/api/",
            },
            {
                text: "SDK",
                items: [
                    { text: "Java", link: "/api/java/" },
                    { text: "JavaScript", link: "/api/js/" },
                    { text: "Python", link: "/api/py/" }
                ]
            }
        ],
        repo: "reactivemarkets/platform-api",
        smoothScroll: true,
    },
}
