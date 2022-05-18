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
                green: '#7ed9d0',
                gray: '#EAEAEA',
                red: '#D96685',
                black: '#1E1E1E',
            },
            fontFamily: {
                mainFamily: ['DM Sans', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
