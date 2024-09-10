const clearAllExpectations = require("./clearAllExpectations");
const {addRestExpectations} = require("./addRestExpectations");

async function setup() {
    await clearAllExpectations();

    await addRestExpectations([
        {
            method: 'GET',
            path: '/api/category/find-subcategories/1',
            statusCode: 200,
            responseFile: './category-data/computers-laptops-parent-category.json',
            delayMs: 100,
        },
        {
            method: 'GET',
            path: '/api/category/getNameById/1',
            statusCode: 200,
            responseFile: './category-data/get-category-name-1.json',
            delayMs: 100,
        },
        {
            method: 'GET',
            path: '/api/images/1/find-slider-images',
            statusCode: 200,
            responseFile: './slider-data/computers-laptops-slider-images.json',
            delayMs: 100,
        },
        {
            method: 'GET',
            path: '/api/category/find-categories-sidebar',
            statusCode: 200,
            responseFile: './catalog-data/all-catalog-categories.json',
            delayMs: 100,
        }
    ]);

    console.info("Mock data loaded");
}

setup();
