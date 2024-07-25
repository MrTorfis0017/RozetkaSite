module.exports = {
    async rewrites() {
        return [
            // {
            //     source: '/admin/api/news/:path*', // 1
            //     destination: 'http://localhost:9071/admin/api/news/test' // 2
            // },
            // {
            //     source: '/api/:path*', // 1
            //     destination: 'http://localhost:8099/:path*',
            // },
            {
                source: '/admin/api/news/create', // 1
                destination: 'http://localhost:9071/admin/api/news/create' // 2
            }
        ]
    }
}