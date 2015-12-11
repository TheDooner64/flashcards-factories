app.factory('ScoreFactory', function() {
  var ScoreFactory = {};

  ScoreFactory.correct = 0;
  ScoreFactory.incorrect = 0;

  ScoreFactory.updateScore = function(answer) {
    if (answer.correct) ScoreFactory.correct++;
    else ScoreFactory.incorrect++;
  };

  return ScoreFactory;
});