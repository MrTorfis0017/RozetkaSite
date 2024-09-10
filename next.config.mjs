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
                source: '/api/category/find-subcategories/1',
                destination: `http://localhost:7080/api/category/find-subcategories/1`,
            },
            {
                source: '/api/category/getNameById/1',
                destination: `http://localhost:7080/api/category/getNameById/1`,
            },
            {
                source: '/api/images/1/find-slider-images',
                destination: `http://localhost:7080/api/images/1/find-slider-images`,
            },
            {
                source: '/api/category/find-categories-sidebar',
                destination: `http://localhost:7080/api/category/find-categories-sidebar`,
            },
        ]
    },
};

export default nextConfig;