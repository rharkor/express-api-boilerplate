const fs = require('fs');

// If filePath "./log" doesn't exist, create it
if (!fs.existsSync('./log')) {
    fs.mkdirSync('./log');
}
// If filePath "./log/access" doesn't exist, create it
if (!fs.existsSync('./log/error')) {
    fs.mkdirSync('./log/error');
}

const errorLog = require("simple-node-logger").createSimpleLogger({
    logFilePath:
        "./log/error/" +
        new Date().toLocaleDateString().split("/").join("-") +
        ".log",
    timestampFormat: "YYYY-MM-DD HH:mm:ss"
});

// eslint-disable-next-line no-unused-vars
module.exports = (error, req, res, next) => {
    errorLog.error(error.message);
    return res
        .status(process.env.EXCEPTION_CODE)
        .send("Something went wrong");
};
