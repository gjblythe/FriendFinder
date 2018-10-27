//this is where the matches and User input is stored

var friendArray = [
  {
    name: "Ahmed",
    photo:
      "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    scores: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
  },
  {
    name: "Ahmed's Twin",
    photo:
      "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    scores: [0, 1, 3, 3, 5, 3, 2, 5, 4, 1]
  }
];
var newFriend =
{
    name: "Gmoney",
    photo:
      "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    scores: [0, 1, 3, 3, 5, 3, 2, 5, 4, 1]
};



function compaireFriend()  {
    for (var i = 0; i < friendArray.length; i++){
        var friendList = friendArray[i];

        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        
        var newScore = newFriend.scores.reduce(reducer);
        
        var friendScore = friendArray[i].scores.reduce(reducer);
        
    }
            if (newScore === friendScore){
                console.log(`Hello ${newFriend.name}, Your new friend is ${friendList.name}.`)
            } else {
            console.log(`Goodbye ${newFriend.name}, This guy hates you ${friendList.name}.`)
            }
}


compaireFriend();
//export to apiRoute.js

module.exports = friendArray;
