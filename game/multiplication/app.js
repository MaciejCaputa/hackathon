(function(){
    'use strict';

    angular.module('MathHack', ['ngMaterial'])
        .controller('GameCtrl', ['$scope', '$timeout', function($scope, $timeout){

            $scope.updateMathJax = function () {
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
            };


            // *initialisation*
            $scope.isCorrect = false;
            $scope.isWrong = false;
            $scope.data = "NULL";
            $scope.questionNumber = 1;
            $scope.score = 1000;
            $scope.numberOfCorrectAnswers = 0;
            $scope.numberOfWrongtAnswers = 0;

            $scope.checked = false;

            $scope.task = new Multiplication(0,10);
            $timeout(function() {
                $scope.updateMathJax();
            }, 100);


            // *main functionality*
            $scope.nextQuestion = function(){
                $scope.isCorrect = false;
                $scope.isWrong = false;
                $scope.data = "NULL";
                $scope.questionNumber++;
                $scope.checked = false;

                $scope.task = new Multiplication(0,10);
                $timeout(function() {
                    $scope.updateMathJax();
                }, 100);
            };


            $scope.check = function(){
                $scope.checked = true;

                if ($scope.data == $scope.task.correctAnswer) {
                    $scope.isCorrect = true;
                    $scope.numberOfCorrectAnswers++;
                    $scope.score = CalculateLevel(6, $scope.score, 1800)
                }
                else {
                    $scope.isWrong = true;
                    $scope.numberOfWrongtAnswers++;
                    $scope.score -= 5;
                }

                updateMathJax();

                $timeout(function() {
                    $scope.updateMathJax();
                }, 1000);

            };


            // implementation



        }]);
})();