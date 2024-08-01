const {mockServerClient} = require("mockserver-client");

async function clearAll() {
    await mockServerClient("127.0.0.1", 7080).clear({
        httpRequest: {
            path: "/api/user/2/personal-exam",
        },
    });
}

module.exports = clearAll;
