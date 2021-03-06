const fs = require('fs');

// If filePath "./log" doesn't exist, create it
if (!fs.existsSync('./log')) {
    fs.mkdirSync('./log');
}
// If filePath "./log/access" doesn't exist, create it
if (!fs.existsSync('./log/access')) {
    fs.mkdirSync('./log/access');
}

const accessLog = require("simple-node-logger").createSimpleLogger({
    logFilePath:
        "./log/access/" +
        new Date().toLocaleDateString().split("/").join("-") +
        ".log",
    timestampFormat: "YYYY-MM-DD HH:mm:ss"
});

module.exports = (req, res, next) => {
    let reqObject = {
        method: req.method,
        path: req.path,
        param: req.params,
        body: req.body
    };

    let resObject = {
        statusCode: res.statusCode
    };

    accessLog.info(
        JSON.stringify({
            reqObject,
            resObject
        })
    );

    next();
};
