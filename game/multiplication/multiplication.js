var generateNumber = function(a,b) {
    return Math.floor((Math.random() * (b - a + 1)) + a);
};

class Multiplication {
    constructor(lowerBound, upperBound) {
        this.lowerBound = lowerBound;
        this.upperBound = upperBound;
        this.a = generateNumber(this.lowerBound,this.upperBound);
        this.b = generateNumber(this.lowerBound,this.upperBound);
        this.answers = [];
        this.correctAnswer = "\\(" + String(this.a * this.b) + "\\)";
        this.question = "Evaluate \\[" + String(this.a) + " \\cdot " + String(this.b) + "\\]";
        this.solution = "\\[" + String(this.a) + " \\cdot " + String(this.b) + " = " + String(this.a * this.b) + "\\]";

        var whichIsCorrect = Math.floor(Math.random() * 4);

        for (i = 0; i < 4; i++) {
            if (i == whichIsCorrect) {
                this.answers.push("\\(" + String(this.a * this.b) + "\\)");
            } else {

                var found;

                do {
                    found = false;

                    var randomNumber = generateNumber(this.lowerBound,this.upperBound) * generateNumber(this.lowerBound,this.upperBound);

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