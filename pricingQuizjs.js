
//Info for each of the 6 pricing questions below.
var question0 = {
	question: "When is the last time you changed or examined your current price points and package options?",
	answers: ["Over 1 Year",
			"6 Months to 1 Year",
			"6 Months Ago or Less"],
	answerReply: ["Oh No! How many features have been added and how much has the market changed since you set your pricing? You might be surprised how much the value in your product has changed.",
				"Not Bad. Reevaluating your pricing every 6 months is a best practice, but under a year is still better than most.",
				"Great! Reevaluating your pricing about every 6 months is most effective way to stay current in changing markets."],
	points: [0,2,3]
	}

var question1 = {
	question: "How many hours did your current pricing take to arrive at?",
	answers: ["Less Than 4 hours",
			"About 5 or 6 Hours",
			"Around 8 Hours",
			"More Than 10 Hours"],
	answerReply: ["Woah! Did you know a 1% price improvement equates to an 11% increase in revenue? Maybe it’s time to get back to the drawing board.",
				"Really? While the average company only spends 8 hours reviewing pricing, there is still a lot more to be done.",
				"Not Bad. 8 hours is the average, but there is more work that can be done to improve your pricing.",
				"Alright! Most companies struggle to get to this point."],
	points: [0,1,2,3]
	}

var question2 = {
	question: "What buyer personas info do you know?",
	answers: ["Only Rough Thoughts",
			"Some Documents With Whimsical Names",
			"Everything Including Known Marketing Channels, CAC, LTV, and Price Sensitivity for each persona."],
	answerReply: ["Knowing who your best customers are and how to reach them can elevate current marketing and sales efforts without additional resources.",
			"Startup Steve and Mary “The Shot Caller”, might help you visualize who you’re speaking to, but if you haven’t quantified the value and costs of each persona, you’re doing little better than shooting in the dark.",
			"Wow! You’re one of the few. Stay on top of the game by reevaluating your buyer personas once or twice a year."
				],
	points: [1,2,3]
	}
	
var question3 = {
	question: "What’s your monthly churn?",
	answers: ["I’m Not Really Sure",
			"About 5% or Higher",
			"Closer to 2%"
			],
	answerReply: ["Danger Territory! Not knowing your churn is like living below a leaking dam, but totally ignoring the problem.",
			"Time to get to work. You have room to improve, but knowing where you are means you can set goals and milestones to reduce churn.",
			"Great! Having churn under control can be difficult, but is a great indicator that you’re doing something right."
			],
	points: [0,2,3]
	}
	
var question4 = {
	question: "What’s your pricing structure?",
	answers: ["Single Price Point",
			"Multiple Prices With No Feature Differentiation",
			"Tiered Pricing And Feature Differentiation"
			],
	answerReply: ["If you have more than one buyer persona, odds are you need to tier and differentiate your pricing to better target each persona.",
			"Odds are a small company isn’t going to need the same features as a larger company, so you’re missing out on converting customer as they grow.",
			"Nice! Although this isn’t the silver bullet to pricing, it’s one of the best ways to target different buyer personas."
			],
	points: [1,2,3]
	}
	
var question5 = {
	question: "Do you have localized pricing for international sales?",
	answers: ["Not At All",
			"Cosmetic, Prospects See Their Local Currency",
			"Truly Localized, Different Pricing For Every Country"
			],
	answerReply: ["Even a straight currency conversion and displaying everyone’s local currency can have huge impacts positive to conversions.",
			"You Can Do Better. Every market has their own price sensitivity and ignoring that is like throwing money away.",
			"Perfect! Each market will have their unique willingness pay and you’re capturing all the value you’re providing."
			],
	points: [0,2,3]
	}

var questionAll = [question0, question1, question2, question3, question4, question5]

//ID Elements on the page worth grabbing.
var elTitle = document.getElementById('title');

var elQuestion = document.getElementById('main_question');

var elAnswers = document.getElementById('answers');

//Running points score
var points = 0;

//How many possible answers are listed in the question.
function answerBoxes(questionNumber) {
	var boxesNeeded = questionNumber.answers.length;
	return boxesNeeded;
	}

//Starts quiz on click
$(function addClickEvent() {
	$('div.answerChoice').on('click', function() {
		 clickedAnswer(questionAll[0]);
	});
});	

//function with loop to pull answers
function calledQuestion(questionNumber) {
	var msgBank = [];
	var innerCounter = 0
while (answerBoxes(questionNumber) > innerCounter) {
	var msg = '<div class="answerChoice" id="' + innerCounter + '">' + questionNumber.answers[innerCounter] + '</div>'
	msgBank = msgBank + msg;
	innerCounter = innerCounter + 1;
	}
	return msgBank;
	}

//function to pull the actual question from array
function pullQuestion(questionNumber) {
	var msgBank2 = questionNumber.question
	return msgBank2
	}

function pullAnswerReply(questionNumber, idNumber) {
	var msgBank3 = '<div class="answerChoice">' + questionNumber.answerReply[idNumber] + "</div>";
	return msgBank3;
	}

//Pooling all things needed for next Q/A load
function clickedAnswer(questionNumber) {
	//This is the Title. - being used as test element to make sure things aren't breaking. 
	//elTitle.textContent = answerBoxes(questionNumber);
	elTitle.textContent = points;

	//Populates the question
	elQuestion.innerHTML = pullQuestion(questionNumber);

	//Populates the possible answers
	elAnswers.innerHTML = calledQuestion(questionNumber);
	$(function addClickEvent() {
		$('div.answerChoice').on('click', function() {
			var $this = $(this);
			var idNumber = $this.attr('id');
				var morePoints = questionNumber.points[idNumber];
				points = points + morePoints;
			elTitle.textContent = points;
			elAnswers.innerHTML = pullAnswerReply(questionNumber, idNumber);
				$(function addClickEvent() {
					$('div.answerChoice').on('click', function() {
					questionAll.shift();
					var questionLength = questionAll.length;
					if (questionLength > 0) {
						clickedAnswer(questionAll[0]);
						} else {}
					});			
				});
			});
		});
	};








