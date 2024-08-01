const clearAllExpectations = require("./clearAllExpectations");
const {addRestExpectations} = require("./addRestExpectations");

async function setup() {
    await clearAllExpectations();

    await addRestExpectations([
        {
            method: 'GET',
            path: '/api/personal-exam/me',
            statusCode: 200,
            responseFile: './catalog-data/all-catalog-categories.json',
            delayMs: 100,
        },
    ]);

    console.info("Mock data loaded");
}

setup();