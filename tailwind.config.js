module.exports = {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#7ed9d0',
                secondary: '#444444',
                light: '#EAEAEA',
                danger: '#D96685',
                dark: '#1E1E1E',
                'dark-gray': '#150802',
            },
            fontFamily: {
                mainFamily: ['DM Sans', 'sans-serif'],
            },
            maxWidth: {
                appContainer: '1440px',
            },
        },
    },
    plugins: [],
}
