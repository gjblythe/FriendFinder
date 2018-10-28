//this is where the matches and User input is stored

var friendArray = [
  {
    name: "test",
    photo:
      "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    scores: [0, 1, 3, 3, 5, 3, 2, 5, 4, 1]
  },
  {
    name: "Ahmed's Twin",
    photo:
      "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    scores: [0, 1, 0, 0, 0, 0, 0, 5, 4, 1]
  }
];
var newFriend = [{
    name: "Vader",
    photo:
      "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    scores: [0, 1, 3, 7, 5, 3, 2, 5, 4, 1]
  }];

  
  //this function compairs the user score to the score of the friendArray
  function totalDiff (arrF, newA){
    var totalDifference = 0;
    var score = 100;
    var match = "";
    for (var i = 0; i < arrF.length; i++){
        for ( var j = 0; j < arrF[i].scores.length; j++){
          
        
            totalDifference += Math.abs(newA[0].scores[j] - arrF[i].scores[j]);
          
            if (totalDifference <= score) {
             
                  score = totalDifference
                  match = arrF[i].name;
                  console.log(`score ${score} Name ${match}`);
                } 
                
              }
              totalDifference = 0;
              

    }
    return console.log(`Name ${match.name} \nPhoto ${match.photo}`);

}

totalDiff(friendArray, newFriend);

//export to apiRoute.js

exports.friendArray = friendArray;
exports.newFriend = newFriend;
// exports.compaireFriend = compaireFriend();
