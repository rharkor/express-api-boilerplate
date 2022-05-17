exports.index = async (req, res) => {
    const message = "Express API is running";
    res.status(200).json({
        message
    });
};
