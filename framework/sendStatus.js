module.exports = (req, res) => {
    res.sendStatus = (statusCode) => {
        res.writeHead(statusCode).end();
    }
}