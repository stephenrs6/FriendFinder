module.exports =
    {
        calc: function (user, friendsArray) {
            console.log(user);
            // Find score of user
            function getSum(total, num) {
                return total + num;
            }
            var userScoretotal = user.scores.reduce(getSum);
            // Loop through friendsArray        
            var currentSmallestDifference = Number.MAX_SAFE_INTEGER;
            var match;

            for (var i = 0; i < friendsArray.length; i++) {
                var friendScoreTotal = friendsArray[i].scores.reduce(getSum);
                var totalDifference = Math.abs(userScoretotal - friendScoreTotal);
                if (totalDifference < currentSmallestDifference) {
                    currentSmallestDifference = totalDifference;
                    match = friendsArray[i];
                }
            }

            return match;
        }
    }