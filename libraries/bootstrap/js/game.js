function GameSession(user, level) {
    this.stats = {
        points: 0,
        timeSpent: 0,
        retryCount: 0,
        timeStarted: new Date()
    }
    this.currentQuestion = null;
    this.currentQuestionIndex = -1;

    // Download question for the current game session.
    this.ajaxCallResult = [{
        "question": "Select the verbs in the collection",
        "choices": [{ "Value": 1, "Label": "Aba" }, { "Value": 2, "Label": "Abuja" }, { "Value": 3, "Label": "Kafancha" }],
        "correctChoices": [],
        "duration": 5,
        "points": 2,
        "penalty": "reducetime",
        "penaltyCount": 2,
        "category": "verb",
        "level": 1
    }, {
        "question": "Pick the correct idioms",
        "choices": [{ "Value": 1, "Label": "A chip on your shoulder" }, { "Value": 2, "Label": "High as a kite" }, { "Value": 3, "Label": "Sick as a dog" }],
        "correctChoices": [{ "Value": 3 }],
        "duration": 4,
        "points": 5,
        "penalty": "reducetime",
        "penaltyCount": 10,
        "category": "idiom",
        "level": 1
    }];

    function gamePaused() {
        $('#welcome').modal({
            backdrop: 'static',
            keyboard: false
        });
        alert('paused')
    }

    /**
     * Called when a player has failed a question
     */
    function questionFailed() {
        // Display a message to the player that the time is up
        // Allow the user to restart the question or cancel the game.
        $('#failed').modal({
            backdrop: 'static',
            keyboard: false
        });
        alert('Failed')
    }

    /**
     * Called when a player has passed a question
     */
    function questionPassed() {
        // Move to the next question
        $('#welcome').modal({
            backdrop: 'static',
            keyboard: false
        });
        alert('passed')
    }

    this.start = function () {
        this.next();
    }

    // timeoutCallback, pauseCallback
    this.next = function () {
        this.currentQuestionIndex++;
        if (this.currentQuestion == null) {
            // Create an instance of the question class
            this.currentQuestion = new QuestionClass("questionArea", this.ajaxCallResult[this.currentQuestionIndex], gamePaused, questionFailed, questionPassed);
        } else {
            // update the question class object
            this.currentQuestion.setActiveQuestion(this.ajaxCallResult[this.currentQuestionIndex]);
        }
    }

    this.replay = function(){
        this.currentQuestion.setActiveQuestion(this.ajaxCallResult[this.currentQuestionIndex]);
    }

    this.previous = function () {
        this.currentQuestionIndex--;
        if (this.currentQuestionIndex > -1) {
            if (this.currentQuestion == null) {
                // Create an instance of the question class
                this.currentQuestion = new QuestionClass("questionArea", ajaxCallResult[this.currentQuestionIndex], gamePaused, questionFailed, questionPassed);
            } else {
                // update the question class object
                this.currentQuestion.setActiveQuestion(this.ajaxCallResult[this.currentQuestionIndex]);
            }
        }
    }
}

function ClockClass(id, endtime, pauseCallback, timeoutCallback) {
    var thisClock = this;
    var clock = $(id);
    this.remainingSeconds = endtime;
    this.pause = false;

    var minutesSpan = clock.find('.minutes');
    var secondsSpan = clock.find('.seconds');

    this.pause = function () {
        thisClock.paused = true;
        pauseCallback();
    }

    this.reduceTimeBy = function (secs) {
        console.log('called')
        this.remainingSeconds -= secs;
    }

    this.countDown = function () {
        thisClock.remainingSeconds--;
        secondsSpan.text(thisClock.remainingSeconds);
        setTimeout(function () {
            if (thisClock.paused == false && thisClock.remainingSeconds > 0) {
                thisClock.countDown();
            } else {
                timeoutCallback();
            }
        }, 1000);
    }

    this.start = function () {
        this.paused = false;
        this.countDown();
        console.log('Started')
    }

    var pauseBtn = $('button.pause');
    pauseBtn.bind('click', this.pause);

    return this;
}

function QuestionClass(areaSelector, question, pauseCallback, timeoutCallback, penalizer) {
    var obj = this;
    var area = $('#' + areaSelector);
    var element = area.find('.choice-area');
    var questionText = area.find('.question-text');
    var questionCategory = area.find('.question-category');

    this.question = null;
    this.correctChoices = {}
    this.selections = [];
    this.choices = {};

    this.setActiveQuestion = function (question) {
        this.question = question.question;

        // Dynamically set the question information the page
        questionText.text(question.question);
        questionCategory.text(question.category.toUpperCase());

        // Load the choice into an objec for easy retrieval
        for (var c in question.choices) {
            this.choices[question.choices[c].Value] = question.choices[c];
        }

        // Load the correct choice into an object for easy retrieval
        for (var c in question.correctChoices) {
            this.correctChoices[question.correctChoices[c].Value] = question.correctChoices[c];
        }

        // load all the choices to the display area.
        for (var item in this.choices) {
            var choice = $("<span/>");

            choice.addClass('bd-brand p-3')
                .addClass('choice-' + this.choices[item].Value)
                .text(this.choices[item].Label)
                .data('choiceObj', this.choices[item])
                .bind('click', function () {
                    obj.selectChoice($(this).data('choiceObj'));
                })
                .appendTo(element);
        }
        this.timer.start();
    }

    this.timer = new ClockClass('#clockdiv', question.duration, pauseCallback, timeoutCallback);

    this.selectChoice = function (item) {

        // Check if selection is correct.
        if (obj.correctChoices[item.Value] != undefined) {
            // Increase the points of the player

        }

        //otherwise penalize the player
        else {
            switch (question.penalty) {
                case 'reductpoints': {
                    // Reduce the commulative point of the player
                    break;
                }
                case 'reducetime': {
                    // Reduce the time left
                    obj.timer.reduceTimeBy(question.penaltyCount);
                    break;
                }
            }
        }

        // If selection is correct, add to the selection list.
        obj.selections[obj.selections.length] = obj.choices[item.Value];
    }

    this.setActiveQuestion(question);

    return this;
}

$(function () {
    // Get questions by AJAX call.
    new GameSession().start();
});