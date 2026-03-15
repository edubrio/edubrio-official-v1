module.exports = {
    theme: {
        extend: {
            keyframes: {
                scroll: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' }, // 50% because logos are duplicated
                },
            },
            animation: {
                scroll: 'scroll 40s linear infinite', // adjust speed as needed
            },
        },
    },
};
