app.factory('FlashcardFactory', function($http) {
    return {
        getFlashCards: function() {
            return $http.get('/cards')
            .then(function(response) {
                return response.data;
            });
        },
        getFlashCardsByCategory: function(category) {
            var queryParams = {};

            if(category) {
                queryParams.category = category;
            }

            // Includes optional query string parameters
            return $http.get('/cards', { params: queryParams })
            .then(function(response) {
                return response.data;
            });
        }
    };
});