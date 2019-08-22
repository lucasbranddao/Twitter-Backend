const Tweet = require('../models/Tweet');

function parse(str) {
    var args = [].slice.call(arguments, 1),
        i = 0;

    return str.replace(/%s/g, () => args[i++]);
}

function alreadyLiked(array, author) {
    
    return (array.indexOf(author) > -1);

}

module.exports = {
    async store(req, res){
        const tweet = await Tweet.findById(req.params.id);
        const type = req.params.type;
        const clickAuthor = req.params.clickAuthor;

        // if type = 0 (liked)
       // if type = 1 (disliked)

       const likers = tweet.likeAuthors;
  
       if (type == 0 && !alreadyLiked(likers, clickAuthor)){
            tweet.set({ likes: tweet.likes + 1});
            var likedAuthor = tweet.likeAuthors
            likedAuthor.push(clickAuthor)
            tweet.set({likeAuthors: likedAuthor})
    }
        else if (type == 1 && alreadyLiked(likers, clickAuthor)){
            tweet.set({ likes: tweet.likes - 1});
            var dislikedAuthor = tweet.likeAuthors
            dislikedAuthor.remove(parse('%s', clickAuthor))
            tweet.set({likeAuthors: dislikedAuthor })
       }
        
        await tweet.save();
        req.io.emit('like', tweet);
        return res.json(tweet);
    },
};