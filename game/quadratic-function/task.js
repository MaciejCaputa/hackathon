var generateNumber = function(a,b) {
    return Math.floor((Math.random() * (b - a + 1)) + a);
};

class Task {
    constructor(lowerBound, upperBound) {
        this.lowerBound = lowerBound;
        this.upperBound = upperBound;
        this.a = generateNumber(this.lowerBound,this.upperBound);
        this.b = generateNumber(this.lowerBound,this.upperBound);
        this.c = generateNumber(this.lowerBound,this.upperBound);
        this.answers = [];
        this.correctAnswer = "\\(" + String(this.b * this.b - 4 * this.a * this.b) + "\\)";
        this.question = "Compute delta discriminant for the following quadratic function \\[f(x) = " + String(this.a) + "x^2 + " + String(this.b) + "x + " + String(this.c) + "\\]";
        this.solution = "\\[" + String(this.a) + " \\cdot " + String(this.b) + " = " + String(this.a * this.b) + "\\]";

        var whichIsCorrect = Math.floor(Math.random() * 4);

        for (i = 0; i < 4; i++) {
            if (i == whichIsCorrect) {
                this.answers.push(this.correctAnswer);
            } else {

                var found;

                do {
                    found = false;

                    var randomNumber = generateNumber(this.lowerBound,this.upperBound) * generateNumber(this.lowerBound,this.upperBound) - 4 * generateNumber(this.lowerBound,this.upperBound) * generateNumber(this.lowerBound,this.upperBound);

                    for (var i = 0; i < this.answers.length; i++) {
                        if (this.answers[i] == randomNumber) {
                            found = true;
                            break;
                        }
                    }

                    if (randomNumber == this.a * this.b) {
                        found = true;
                    }

                    if (!found) this.answers.push("\\(" + String(randomNumber) + "\\)");

                } while (found);


            }
        }


    }
}