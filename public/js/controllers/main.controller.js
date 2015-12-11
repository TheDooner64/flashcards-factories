app.controller('MainController', function($scope, FlashcardFactory, ScoreFactory) {

  $scope.categories = [
    'MongoDB',
    'Express',
    'Angular',
    'Node'
  ];

  $scope.currentCategory = null;

  $scope.flashCards = [];

  $scope.getCategoryCards = function(category) {
    $scope.currentCategory = category;
    FlashcardFactory.getFlashCardsByCategory(category)
    .then(function(flashcards) {
      $scope.flashCards = flashcards;
    });
  }

  $scope.getAllCards = function() {
    $scope.currentCategory = null;
    FlashcardFactory.getFlashCards()
    .then(function(flashcards) {
      $scope.flashCards = flashcards;
    });
  }

	$scope.answerQuestion = function (answer, flashCard) {
		if (!flashCard.answered) {
			flashCard.answered = true;
			flashCard.answeredCorrectly = answer.correct;
      ScoreFactory.updateScore(answer);
		};
	};

  $scope.getAllCards();

});