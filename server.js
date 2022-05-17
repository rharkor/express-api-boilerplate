const app = require("./index");
const port = process.env.PORT;
const host = process.env.HOST;
const errorMiddleware = require("./middlewares/error.middleware");

console.log(`Node environment: ${process.env.NODE_ENV}`);
app.listen(port, host, () => {
    console.log(`Example app listening at port http://${host}:${port}`);
});

// Error Handler Middleware
app.use(errorMiddleware);
