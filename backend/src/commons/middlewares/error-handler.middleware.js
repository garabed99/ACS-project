

module.exports = {
    handleError(err, req, res, next) {
        if (err.message.includes('duplicate')) {
            err.statusCode = 409;
        } else if (err.message.includes('validation')) {
            err.statusCode = 400;
        } 
        else if (err.message.includes('locked!')) {
            err.statusCode = 423;
        }
        else if (err.message.includes('forbidden')) {
            err.statusCode = 403;
        }
        else if (err.message.includes('not found')) {
            err.statusCode = 404;
        }
        else if (err.message.includes('unauthorized')) {
            err.statusCode = 401;
        }

        if (!err.statusCode) {
            console.error(err);
        }

        return res.status(err.statusCode || 500).json({ message: err.message });
    }
}