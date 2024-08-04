const clearAllExpectations = require("./clearAllExpectations");
const {addRestExpectations} = require("./addRestExpectations");

async function setup() {
    await clearAllExpectations();

    await addRestExpectations([
        {
            method: 'GET',
            path: '/api/catalog/find-categories-sidebar',
            statusCode: 200,
            responseFile: './catalog-data/all-catalog-categories.json',
            delayMs: 100,
        },
        {
            method: 'GET',
            path: '/api/category/find-all-subcategories/computer-laptops',
            statusCode: 200,
            responseFile: './category-data/computers-laptops-parent-category.json',
            delayMs: 100,
        },
    ]);

    console.info("Mock data loaded");
}

setup();
