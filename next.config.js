/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'placehold.co',
            },
            {
                protocol: 'https',
                hostname: 'media.istockphoto.com',
            },
        ],
    },
    turbopack: {
        rules: {
        '*.svg': {
            loaders: [
            {
                loader: '@svgr/webpack',
                options: {
                icon: true,
                },
            },
            ],
            as: '*.js',
        },
        },
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
};

module.exports = nextConfig;