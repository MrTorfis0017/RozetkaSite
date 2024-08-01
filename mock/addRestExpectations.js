const {resolve} = require("path");
const {readFileSync} = require("fs");
const {mockServerClient} = require("mockserver-client");

const addRestExpectations = async (expectations) => {
    await mockServerClient("127.0.0.1", 7080).mockAnyResponse(
        expectations.map(
            ({
                 method,
                 path,
                 queryStringParameters,
                 statusCode,
                 responseFile,
                 delayMs,
             }) => ({
                httpRequest: {
                    method,
                    path,
                    queryStringParameters,
                },
                httpResponse: {
                    statusCode: statusCode || 200,
                    headers: {
                        "Content-Type": ["application/json; charset=utf-8"],
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, OPTIONS"
                    },
                    body: {
                        json: readFileSync(
                            resolve(__dirname, "data", responseFile),
                            "utf-8",
                        ),
                    },
                    delay: {
                        timeUnit: "MILLISECONDS",
                        value: delayMs || 0,
                    },
                },
            }),
        ),
    );
};

module.exports = {
    addRestExpectations,
};
