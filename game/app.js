(function(){
    'use strict';

    angular.module('MathHack', ['ngMaterial'])
        .controller('GameCtrl', ['$scope', '$timeout', function($scope, $timeout){

            // *initialisation*
            $scope.questionNumber = 0;
            $scope.score = 1000;
            $scope.numberOfCorrectAnswers = 0;
            $scope.numberOfWrongtAnswers = 0;

            $scope.showSolution = false;
            $scope.disableAnswers = false;


            // *main functionality*
            $scope.check = function(){

                $scope.showSolution = true;
                $scope.disableAnswers = true;
                $scope.questionNumber++;


                if ($scope.data == $scope.multiplication.correctAnswer()) {
                    $scope.isCorrect = true;
                    $scope.numberOfCorrectAnswers++;
                    $scope.score = CalculateLevel(6, $scope.score, 1800)
                }
                else {
                    $scope.isWrong = true;
                    $scope.numberOfWrongtAnswers++;
                    $scope.score -= 5;
                }

            };


            $scope.updateMathJax = function () {
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
            };



            $scope.submit = function () {

                $scope.showSolution = true;


            };

            var generateNumber = function(a,b) {
                return Math.floor((Math.random() * (b - a + 1)) + a);
            };

            var generateAnswers = function(a,b,correctAnswer) {
                var arr = [];
                var numCorrectAnswer = Math.floor(Math.random() * 4);
                for (var i = 0; i < 4; i++) {
                    if (i == numCorrectAnswer)
                        arr.push(String(correctAnswer));
                    else
                        arr.push(String(generateNumber(a,b) * generateNumber(a,b)));

                }
                return arr;
            };

            $scope.multiplication = {
                questionNumber: 0,
                a : generateNumber(0,10),
                b : generateNumber(0,10),
                answers: [],
                correctAnswer: function() {
                    return this.a * this.b;
                },
                generate: function() {
                    this.questionNumber++;
                    $scope.showSolution = false;
                    $scope.disableAnswers = false;
                    $scope.isCorrect = false;
                    $scope.isWrong = false;
                    $scope.data = "NULL";

                    $scope.answer = "NULL";

                    $scope.checkAnswers = false;

                    this.a = generateNumber(0,10);
                    this.b =  generateNumber(0,10);
                    this.answers = [];

                    var whichIsCorrect = Math.floor(Math.random() * 4);

                    for (i = 0; i < 4; i++) {
                        if (i == whichIsCorrect) {
                            this.answers.push(this.a * this.b);
                        } else {

                            var found, x, y;

                            do {
                                found = false;
                                x =  generateNumber(0,10);
                                y =  generateNumber(0,10);

                                var randomNumber = x * y;

                                for (var i = 0; i < this.answers.length; i++) {
                                    if (this.answers[i] == randomNumber) {
                                        found = true;
                                        break;
                                    }
                                }

                                if (randomNumber == this.a * this.b) {
                                    found = true;
                                }

                                if (!found) this.answers.push(randomNumber);

                            } while (found);


                        }
                    }

                    $timeout(function() {
                        $scope.updateMathJax();
                    }, 100);

                },
                question: function() {
                    return "Evaluate \\[" + String(this.a) + " \\cdot " + String(this.b) + "\\]";
                },
                solution: function() {
                    return "\\[" + String(this.a) + " \\cdot " + String(this.b) + " = " + String(this.a * this.b) + "\\]";
                }
        };

            $scope.question = "Evaluate \\[" + String($scope.a) + " \\cdot " + String($scope.b) + "\\]";


            $scope.isSearching = false;

            $scope.submit = function () {

                $scope.showSolution = true;


            };



            $scope.multiplication.generate();

        }]);
})();