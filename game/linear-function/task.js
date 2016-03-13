var generateNumber = function(a,b) {
    return Math.floor((Math.random() * (b - a + 1)) + a);
};

class Task {
    constructor(lowerBound, upperBound) {
        this.lowerBound = lowerBound;
        this.upperBound = upperBound;
        this.a = generateNumber(this.lowerBound,this.upperBound);
        this.b = generateNumber(this.lowerBound,this.upperBound);
        this.answers = [];
        this.correctAnswer = "\\(-\\frac{" + String(this.b) + "}{" + String(this.a) + "}\\)";
        this.question = "Find the zero of \\[f(x) = " + String(this.a) + "x + " + String(this.b) + "\\]";
        this.solution = "\\[" + String(this.a) + " \\cdot " + String(this.b) + " = " + String(this.a * this.b) + "\\]";

        var whichIsCorrect = Math.floor(Math.random() * 4);

        for (i = 0; i < 4; i++) {
            if (i == whichIsCorrect) {
                this.answers.push(this.correctAnswer);
            } else {

                var found;

                do {
                    found = false;

                    var randomAnswer = "\\(\\frac{" + String(generateNumber(lowerBound,upperBound)) + "}{" + String(generateNumber(lowerBound,upperBound)) + "}\\)";
                    for (var i = 0; i < this.answers.length; i++) {
                        if (this.answers[i] == randomAnswer) {
                            found = true;
                            break;
                        }
                    }

                    if (randomAnswer == this.correctAnswer) {
                        found = true;
                    }

                    if (!found) this.answers.push(randomAnswer);

                } while (found);


            }
        }


    }
}