const Tweet = require('../models/Tweet');

module.exports = {
    async delete(req, res){
        const tweet = await Tweet.findById(req.params.id);
        tweet.delete()
        .then(
            res.json({
                "status": true,
                "message": "Tweet deletado com sucesso"})
        )
        .catch(
            res.json({
                "status": false,
                "message": "Não foi possível deletar este tweet"})
        )
    },
};