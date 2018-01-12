module.exports =
    {
        calc: function (user, friendsArray) {
            console.log(user);
            console.log(friendsArray);
            // Find score of user
            function getSum(total, num) {
                return total + num;
            }
            var userScoretotal = user.scores.reduce(getSum);
            console.log(userScoretotal);
            // Loop through friendsArray        
            var currentSmallestDifference = Number.MAX_SAFE_INTEGER;
            var match;

            for (var i = 0; i < friendsArray.length; i++) {
                var friendScoreTotal = friendsArray[i].scores.reduce(getSum);
                console.log(friendScoreTotal);
                var totalDifference = Math.abs(userScoretotal - friendScoreTotal);
                console.log(totalDifference);
                if (totalDifference < currentSmallestDifference) {
                    currentSmallestDifference = totalDifference;
                    match = friendsArray[i];
                }
            }

            // For each friend, calculate score
            // Find out score difference

            // for (i = 0; i < friendsArray.scores.length; i++){
            //     friendsArray.scores.length[i] = y
            // }
            console.log(match);
            return match;
        }
    }