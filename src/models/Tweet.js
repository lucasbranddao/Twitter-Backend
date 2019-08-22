const mongoose = require('mongoose');

function alreadyLiked(params) {
    var author = tweet.author
    for(var i=0;i<params.lenght;i++){
        if(params[i] == author){
            return true;
        }
        else if(i == (params.lenght-1)){
            return false;
        }
    }
}

const TweetSchema = new mongoose.Schema( {
 
    author: String,
    content: String,
    likes:{
        type: Number,
        default: 0,
    },
    likeAuthors:{
        type: [String],
        default: []
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },

});

module.exports = mongoose.model('Tweet', TweetSchema);