const service = require('../../service/service');
const asyncMiddleware = require('../../middleware/asyncMiddleware');
module.exports = {
    getPlace: asyncMiddleware(async (req, res) =>
        res.send(await service.getPlace(req.query))
    ),
};
