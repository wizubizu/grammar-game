function GameSession(user, level) {
    var gameSession = this;
    this.stats = {
        points: 0,
        timeSpent: 0,
        retryCount: 0,
        timeStarted: new Date()
    }
    this.currentQuestion = null;
    this.currentQuestionIndex = -1;
    this.questionPassedDialog = null;
    this.questionFailDialog = null;
    this.welcomeDialog = null;

    // Download question for the current game session.
    this.ajaxCallResult = [{
        "question": "Select the Verbs in the collection",
        "choices": [
            {
                "Value": 1,
                "Label": "accept"
            },
            {
                "Value": 2,
                "Label": "Abuja"
            },
            {
                "Value": 3,
                "Label": "allow"
            },

            {
                "Value": 4,
                "Label": "allude"
            },
            {
                "Value": 5,
                "Label": "aprove"
            },
            {
                "Value": 6,
                "Label": "argue"

            },
            {
                "Value": 7,
                "Label": "aircraft"
            },
            {
                "Value": 8,
                "Label": "new york"
            },
            {
                "Value": 9,
                "Label": "assure"
            },

            {
                "Value": 10,
                "Label": "rhinoceros"
            },

            {
                "Value": 11,
                "Label": "attempt"
            },
            {
                "Value": 12,
                "Label": "articulate"
            },
            {
                "Value": 13,
                "Label": "assert"
            },
            {
                "Value": 14,
                "Label": "mali"
            },
            {
                "Value": 15,
                "Label": "eyeball"
            },
            {
                "Value": 16,
                "Label": "berate"
            },
            {
                "Value": 17,
                "Label": "bit"
            },
            {
                "Value": 18,
                "Label": "rome"
            },
            {
                "Value": 19,
                "Label": "boast"
            },
            {
                "Value": 20,
                "Label": "bounce"
            },
            {
                "Value": 21,
                "Label": "ronald"
            },
            {
                "Value": 22,
                "Label": "bet"
            },
            {
                "Value": 23,
                "Label": "book"
            },
            {
                "Value": 24,
                "Label": "bow"
            },

            {
                "Value": 25,
                "Label": "lexus"
            },
            {
                "Value": 26,
                "Label": "lagos"
            },
            {
                "Value": 27,
                "Label": "attract"

            },
            {
                "Value": 28,
                "Label": "girl"
            },
            {
                "Value": 29,
                "Label": "spain"
            },
            {
                "Value": 30,
                "Label": "barrage"
            },
            {
                "Value": 31,
                "Label": "bargain"
            },
            {
                "Value": 32,
                "Label": "rainbow"
            },
            {
                "Value": 33,
                "Label": "blush"
            },

            {
                "Value": 34,
                "Label": "blurt"
            },
            {
                "Value": 35,
                "Label": "cajole"
            },
            {
                "Value": 36,
                "Label": "basketball"
            },
            {


                "Value": 37,
                "Label": "cornflake"
            },
            {
                "Value": 38,
                "Label": "kazakhstan"
            },
            {
                "Value": 39,
                "Label": "admonish"
            },

            {
                "Value": 40,
                "Label": "besiege"
            },
            {
                "Value": 41,
                "Label": "attend"
            },
            {
                "Value": 42,
                "Label": "poland"

            },
            {
                "Value": 43,
                "Label": "akure"
            },
            {
                "Value": 44,
                "Label": "belong"
            },
            {
                "Value": 45,
                "Label": "mcdonald"

            },
            {
                "Value": 46,
                "Label": "peter"
            },
            {
                "Value": 47,
                "Label": "japan"
            },
            {
                "Value": 48,
                "Label": "analyze"
            },
            {
                "Value": 49,
                "Label": "london"
            },
            {
                "Value": 50,
                "Label": "attach"
            },
            {
                "Value": 51,
                "Label": "bend"

            },
            {
                "Value": 52,
                "Label": "argentina"
            },
            {
                "Value": 53,
                "Label": "balloon"
            },
            {
                "Value": 54,
                "Label": "eagle"

            },
            {
                "Value": 55,
                "Label": "arrive"
            },
            {
                "Value": 56,
                "Label": "admit"
            },
            {
                "Value": 57,
                "Label": "ask"
            },

            {
                "Value": 58,
                "Label": "parrot"
            },
            {
                "Value": 59,
                "Label": "athens"
            },
            {
                "Value": 60,
                "Label": "dragonfly"
            },

            {
                "Value": 61,
                "Label": "ache"
            },
            {
                "Value": 62,
                "Label": "new jersey"
            },
            {
                "Value": 63,
                "Label": "were"

            },
            {
                "Value": 64,
                "Label": "lion"
            },
            {
                "Value": 65,
                "Label": "avoid"
            },
            {
                "Value": 66,
                "Label": "eldridge"
            },
            {
                "Value": 67,
                "Label": "steal"
            },
            {
                "Value": 68,
                "Label": "india"
            },
            {
                "Value": 69,
                "Label": "paris"
            },

            {
                "Value": 70,
                "Label": "awake"
            },
            {
                "Value": 71,
                "Label": "add"
            },
            {
                "Value": 72,
                "Label": "auction"
            },
            {
                "Value": 73,
                "Label": "bestow"
            },
            {
                "Value": 74,
                "Label": "broadcast"
            },
            {
                "Value": 75,
                "Label": "fardinand"
            },
            {
                "Value": 76,
                "Label": "care"
            },
            {
                "Value": 77,
                "Label": "burnish"
            },
            {
                "Value": 78,
                "Label": "buzz"
            },

            {
                "Value": 79,
                "Label": "toyota"
            },
            {
                "Value": 80,
                "Label": "benfica"
            },
            {
                "Value": 81,
                "Label": "calculate"
            },

            {
                "Value": 82,
                "Label": "boy"
            },
            {
                "Value": 83,
                "Label": "yugoslavia"
            },
            {
                "Value": 84,
                "Label": "call"
            },
            {
                "Value": 85,
                "Label": "bite"
            },
            {
                "Value": 86,
                "Label": "fred"
            },
            {
                "Value": 87,
                "Label": "breath"
            },

            {
                "Value": 88,
                "Label": "carry"
            },
            {
                "Value": 89,
                "Label": "compete"
            },
            {
                "Value": 90,
                "Label": "consent"
            },
            {


                "Value": 91,
                "Label": "garlic"
            },
            {
                "Value": 92,
                "Label": "gilbert"
            },
            {
                "Value": 93,
                "Label": "concentrate"
            },
            {
                "Value": 94,
                "Label": "marcuz"
            },
            {
                "Value": 95,
                "Label": "cotend"
            },
            {
                "Value": 96,
                "Label": "covet"
            },

            {
                "Value": 97,
                "Label": "charge"
            },
            {
                "Value": 98,
                "Label": "brazil"
            },
            {
                "Value": 99,
                "Label": "manchester"
            },

            {
                "Value": 100,
                "Label": "paul"
            },
            {
                "Value": 101,
                "Label": "contain"
            },
            {
                "Value": 102,
                "Label": "batman"
            },
            {
                "Value": 103,
                "Label": "breed"
            },
            {
                "Value": 104,
                "Label": "bring"
            },
            {
                "Value": 105,
                "Label": "communicate"
            },

            {
                "Value": 106,
                "Label": "paragauy"
            },
            {
                "Value": 107,
                "Label": "messi"
            },
            {
                "Value": 108,
                "Label": "corrects"

            }],
        "correctChoices": [
            {
                "Value": 1
            },
            {
                "Value": 3
            },
            {
                "Value": 4
            },
            {
                "Value": 5
            },
            {
                "Value": 6
            },
            {
                "Value": 9
            },
            {
                "Value": 11
            },
            {
                "Value": 13
            },
            {
                "Value": 16
            },
            {
                "Value": 17
            },
            {
                "Value": 19
            },
            {
                "Value": 20
            },
            {
                "Value": 22
            },
            {
                "Value": 24
            },
            {
                "Value": 27
            },
            {
                "Value": 30
            },
            {
                "Value": 31
            },
            {
                "Value": 33
            },
            {
                "Value": 34
            },
            {
                "Value": 35
            },
            {
                "Value": 39
            },
            {
                "Value": 40
            },
            {
                "Value": 41
            },
            {
                "Value": 44
            },
            {
                "Value": 48
            },
            {
                "Value": 50
            },
            {
                "Value": 51
            },
            {
                "Value": 55
            },
            {
                "Value": 56
            },
            {
                "Value": 57
            },
            {
                "Value": 61
            },
            {
                "Value": 63
            },
            {
                "Value": 65
            },
            {
                "Value": 67
            },
            {
                "Value": 70
            },
            {
                "Value": 71
            },
            {
                "Value": 72
            },
            {
                "Value": 73
            },
            {
                "Value": 74
            },
            {
                "Value": 76
            },
            {
                "Value": 77
            },
            {
                "Value": 78
            },
            {
                "Value": 81
            },
            {
                "Value": 84
            },
            {
                "Value": 85
            },
            {
                "Value": 87
            },
            {
                "Value": 88
            },
            {
                "Value": 89
            },
            {
                "Value": 90
            },
            {
                "Value": 93
            },
            {
                "Value": 95
            },
            {
                "Value": 96
            },
            {
                "Value": 97
            },
            {
                "Value": 101
            },
            {
                "Value": 103
            },
            {
                "Value": 104
            },
            {
                "Value": 105
            },
            {
                "Value": 108
            }],

        "passedCount": 2,
        "duration": 60,
        "points": 2,
        "penalty": "reducetime",
        "penaltyCount": 2,
        "category": "Verbs",
        "level": 1
    }, {
        "question": "Select the verbs in the collection",
        "choices": [{ "Value": 1, "Label": "Aba" }, { "Value": 2, "Label": "Abuja" }, { "Value": 3, "Label": "Kafancha" }],
        "correctChoices": [{ "Value": 1 }, { "Value": 3 }],
        "duration": 50,
        "points": 2,
        "passedCount": 1,
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
        "passedCount": 2,
        "penaltyCount": 10,
        "category": "idiom",
        "level": 1
    }];

    function gamePaused() {
        gameSession.welcomeDialog.modal({
            backdrop: 'static',
            keyboard: false
        });
    }

    /**
     * Called when a player has failed a question
     */
    function questionFailed() {
        // Display a message to the player that the time is up
        // Allow the user to restart the question or cancel the game.
        gameSession.questionFailDialog.modal({
            backdrop: 'static',
            keyboard: false
        });

        // Take the stats
        this.stats.failure += 1;
    }

    /**
     * Called when a player has passed a question
     */
    function questionPassed() {
        // Congratulate the user on the success of the last question
        gameSession.questionPassedDialog.modal({
            backdrop: 'static',
            keyboard: false
        });

        this.stats.score += this.currentQuestion.getPoints();
        this.stats.timespent += this.currentQuestion.getTimer().getTimeSpent();
    }

    this.setQuestionPassedDialog = function (dialog) {
        this.questionPassedDialog = dialog;
        dialog.find('button.next').bind('click', function (event) {
            event.preventDefault();
            gameSession.next();
            dialog.modal('hide');
        });
        return this;
    }

    this.setQuestionFialedDialog = function (dialog) {
        this.questionFailDialog = dialog;
        dialog.find('button.retry').bind('click', function (event) {
            event.preventDefault();
            gameSession.start();
            dialog.modal('hide');
        });
        return this;
    }

    this.setWelcomeDialog = function (dialog) {
        this.welcomeDialog = dialog;
        dialog.find('button.start').bind('click', function (event) {
            event.preventDefault();
            gameSession.start();
            dialog.modal('hide');
        });
        return this;
    }

    this.start = function () {
        this.currentQuestionIndex = -1;

        //TODO: add code to download fresh set of questions and shuffle them.
        this.next();
        return this;
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

    this.replay = function () {
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
    this.initialTime = endtime;
    this.pause = false;
    this.timeoutId = null;

    var minutesSpan = clock.find('.minutes');
    var secondsSpan = clock.find('.seconds');

    this.pause = function () {
        thisClock.paused = true;
        pauseCallback();
    }

    this.reduceTimeBy = function (secs) {
        this.remainingSeconds -= secs;
    }

    this.setDuration = function(duration){
        this.remainingSeconds = duration;
        this.initialTime = duration;
    }

    this.getTimeSpent = function(){
        return (this.initialTime - this.remainingSeconds);
    }

    this.countDown = function () {
        thisClock.remainingSeconds--;
        secondsSpan.text(thisClock.remainingSeconds);
        this.timeoutId = setTimeout(function () {
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
    }

    this.cancel = function () {
        thisClock.paused = true;
        clearTimeout(this.timeoutId);
    }

    var pauseBtn = $('button.pause');
    pauseBtn.bind('click', this.pause);

    return this;
}

function QuestionClass(areaSelector, question, pauseCallback, timeoutCallback, completedCallback) {
    var obj = this;
    var area = $('#' + areaSelector);
    var element = area.find('.choice-area');
    var questionText = area.find('.question-text');
    var questionCategory = area.find('.question-category');
    var correctChoiceArea = area.find('.mpos-rel');

    this.question = null;
    this.correctChoices = {}
    this.selections = [];
    this.choices = {};
    this.timer = null;

    this.getPoints = function(){
        return this.question.points;
    }

    this.getTimer = function() {
        return this.timer;
    }

    this.setActiveQuestion = function (question) {
        this.question = question.question;

        // Dynamically set the question information the page
        questionText.text(question.question);
        questionCategory.text(question.category.toUpperCase());

        // Load the choice into an objec for easy retrieval
        this.choices = [];
        for (var c in question.choices) {
            this.choices[question.choices[c].Value] = question.choices[c];
        }

        // Load the correct choice into an object for easy retrieval
        this.correctChoices = [];
        for (var c in question.correctChoices) {
            this.correctChoices[question.correctChoices[c].Value] = question.correctChoices[c];
        }

        // load all the choices to the display area.
        element.empty();
        correctChoiceArea.empty();
        for (var item in this.choices) {
            var choice = $("<span/>");

            choice.addClass('bd-brand p-3')
                .addClass('choice-' + this.choices[item].Value)
                .addClass('choice-' + ('' + this.choices[item].Value).substring(0, 1))
                .text(this.choices[item].Label)
                .data('choiceObj', this.choices[item])
                .bind('click', function () {
                    obj.selectChoice($(this), $(this).data('choiceObj'));
                })
                .data('hasMoved', false)
                .appendTo(element);
        }

        if (this.timer == null) {
            this.timer = new ClockClass('#clockdiv', question.duration, pauseCallback, timeoutCallback);
        } else {
            this.timer.setDuration(question.duration);
        }
        this.timer.start();
    }

    this.checkCompletion = function () {
        // Count the number of choices made and compare with the minimum required.
        if (this.selections.length >= question.passedCount) {
            // Congratulate the user.
            this.timer.cancel();
            completedCallback();
        }
    }

    this.selectChoice = function (elem, item) {

        // Check if selection is correct.
        if (obj.correctChoices[item.Value] != undefined) {
            // Move the selected choice to the area desinated.
            if (elem.data('hasMoved') == false) {
                elem.appendTo(correctChoiceArea).data('hasMoved', true);
                this.checkCompletion();
            }
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
    (new GameSession())
        .setQuestionPassedDialog($('#question-pass-modal'))
        .setQuestionFialedDialog($('#failed'))
        .setWelcomeDialog($('#welcome'))
        .start();
});