/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: '[name].[hash:8].[ext]',
                },
            },
        });
        return config;
    },
    async rewrites() {
        return [
            {
                source: '/api/catalog/find-categories-sidebar',
                destination: `http://localhost:7080/api/catalog/find-categories-sidebar`,
            },
        ]
    },
};

export default nextConfig;