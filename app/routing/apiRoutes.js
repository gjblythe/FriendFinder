var friendData = require('../../app/data/friend.js')

module.exports = function(app){


app.get('/api/friends', function(req, res){
    console.log(friendData);
    return res.json(friendData);
});

//takes user input and pushes to the array
app.post('/api/friends', function(req, res) {
    var newFriend = req.body;

    var newScore = newFriend.scores;
    console.log(newScore);

    var matchName = '';
    var matchPhoto = '';
    var score = 100;
console.log(friendData.friendArray)
    //nested for loop to compair the abs value of the score arrays
    for (let i = 0; i < friendData.friendArray.length; i++) {
        var totalDifference = 0;
        for (let j = 0; j < newScore.length; j++) {
            
               totalDifference += Math.abs(newScore[j] - friendData.friendArray[i].scores[j]); 
            }
            if (totalDifference < score) {
                score = totalDifference;
                console.log(`score ${score}`);
                matchName = friendData.friendArray[i].name;
                matchPhoto = friendData.friendArray[i].photo;
            }
            
        }
        console.log("Match on API route: " + matchName +"\nPhoto" + matchPhoto)
    friendData.friendArray.push(newFriend);

    res.json(friendData.newFriend);
    
   
});

};