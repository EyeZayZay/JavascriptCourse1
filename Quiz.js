class Question {
    constructor(question, answer, options) {
        this.question = question;
        this.answer = answer;
        this.options = options;
    }
    evaluate(userAnswer) {
        return userAnswer == this.answer;
    }
}
class Quiz {
    addQuestion(question) {
        this.questions.push(question);
    }
    populatePage() {
        let container = document.getElementById("questions");
        for (var i = 1; i < this.questions.length + 1; i++) {
            container.innerHTML = "<label id=\"q" + i + "\"><strong>" + i + ". " + this.questions[i] + "</strong></label> <br> <br>";
            for (var j = 1; j < this.questions[i].options.length + 1; j++) {
                container.innerHTML = "<input type = \"radio\" name = \"answers" + i + "id = \"q" + i + "a" + j + "value = \"answer" + j + ">" + this.questions.options[i] + "<br>";
            }
        }
        container.innerHTML = "New Question: <input type = \"text\" name = \"newQuestion\">";
        container.innerHTML = "New Answer: <input type = \"text\" name = \"newAnswer\">";
        for (var i = 1; i < 5; i++) {
            container.innerHTML = "Option " + i + ": <input type = \"text\" name = \"option" + i + ">";
        }
        container.innerHTML = "<button onclick=\"addQuestion()\">Submit Question</button><br><br>";
        container.innerHTML = "<button onclick=\"evaluate()\">Take Quiz</button><br><br>";
        container.innerHTML = "<button onclick=\"showScore()\">Grade Quiz</button>";
    }
    evaluate() {
        for (var i = 1; i < this.questions.length + 1; i++) {
            let `submitAnswers + i = document.getElementsByName("answers" + i);
      }

      // checks each checked answer to see if it matches the correct answer, if so we add to our correct count
      for (var i = 0; i < this.questions.length; i++) {
        let userAnswer = <HTMLInputElement> document.getElementById("submitAnswers" + (i + 1).id);
        if (userAnswer.checked) {
          if (question.evaluate(this.questions[i]).answer) {
            this.correctCount++;
          }
        }
        // calculates the percentage that will be shown on the page
        this.percentage = parseInt((this.correctCount / 5) * 100);
      }
    }
      // calculate and display the final score at the top of the page
      showScore() {
        let scoreDiv = document.getElementById('score');
        document.getElementById('score').innerHTML = "Your Score is " + this.percentage + "%";
        scoreDiv.style.visibility = 'visible';
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      }

      // adds new user question to quiz and repopulates page to include new question
      addNewQuestion(question, answer, inputs) {
        // add the new user question to the quiz
        var newQuestion = new Question(question, answer, [inputs[0], inputs[1], inputs[2], inputs[3]]);
        this.addQuestion(newQuestion);

        // repopulate page
        this.populatePage();
      }
    }

// add initial question objects to quiz class
let question1 = new Question("What color is the sky?", "blue", ["blue", "black", "yellow", "red"]);
let question2 = new Question("Who is the current president of the United States of America?", "Barack Obama", ["Joe Biden", "Donald Trump", "Barack Obama", "George W. Bush"]);
let question3 = new Question("What was Prince's favorite color?", "purple", ["blue", "purple", "gold", "silver"]);
let question4 = new Question("How many continents are there in the world?", "7", ["150", "1", "6", "7"]);
let question5 = new Question("What is the capital of the Netherlands?", "Amsterdam", ["London", "Bern", "Amsterdam", "Copenhagen"]);
let quiz = new Quiz();
for (var i = 0; i < 5; i++) {
quiz.addQuestion("question" + i);
}

// call populate page method
quiz.populatePage();

// function used to check that an answer was selected for every question
function isThereNull(setOfAnswers) {
  for (var i = 0; i < setOfAnswers.length; i++) {
    let userAnswer = <HTMLInputElement> document.getElementById(setOfAnswers[i].id);
    if (userAnswer.checked) {
      return true;
    }
  }
  return false;
}

// Traverses each question to check if there is a null (unanswered question)
// What do we input into the isThereNull method? Clueless tbh
var flag = true;
for (var i = 0; i < this.questions.length; i++) {
  // flag = isThereNull(); [need input]
}

// if they did not answer every question, we throw an alert instead
if (!flag) {
  alert("You need to select answer for every question!");
}

// if our flag is true (every question was answered, we proceed with scoring)
else {

  // instantiate the answers array and number of answers correct (score count)
  let answers = [];
  let scoreCount = 0;

  // traverses the checkboxes to figure out whether or not the answer selected is correct
  // Using our array we store "C" for correct answers and "I" for incorrect answers
  function grabAnswers(setOfAnswers, realAnswer) {
    for (var i = 0; i < setOfAnswers.length; i++) {
      let userAnswer = <HTMLInputElement> document.getElementById(setOfAnswers[i].id);
        if (userAnswer.checked) {
          if (userAnswer.value == realAnswer) {
            answers.push("C");
          }
          else {
            answers.push("I");
          }
        }
    }
  }

  // loop through all of our questions to use the grabAnswers method on each
  for (var i = 0; i < quiz.questions.length; i++) {
    grabAnswers("submitAnswers" + (i + 1), this.questions.answer);
  }

  // determine how many answers they got correct
  for (var i = 0; i < answers.length; i++) {
    if (answers[i] == "C") {
      scoreCount++;
    }
  }
}

/* To Do List */
// 1. Check that every question was answered (fix null input)
// 2. Properly allow the user to add new questions (grab user input)
;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVpei5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlF1aXoudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0E7SUFFRSxZQUFtQixRQUFnQixFQUFTLE1BQWMsRUFBUyxPQUFpQjtRQUFqRSxhQUFRLEdBQVIsUUFBUSxDQUFRO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLFlBQU8sR0FBUCxPQUFPLENBQVU7SUFBRyxDQUFDO0lBR3hGLFFBQVEsQ0FBQyxVQUFVO1FBQ2pCLE1BQU0sQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNuQyxDQUFDO0NBQ0Y7QUFJRDtJQVlFLFdBQVcsQ0FBQyxRQUFRO1FBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFHRCxZQUFZO1FBRVYsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUduRCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ25ELFNBQVMsQ0FBQyxTQUFTLEdBQUcsZUFBZSxHQUFHLENBQUMsR0FBRyxhQUFhLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLDZCQUE2QixDQUFDO1lBQ3pILEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUM5RCxTQUFTLENBQUMsU0FBUyxHQUFHLDBDQUEwQyxHQUFHLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsa0JBQWtCLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUM7WUFDdEssQ0FBQztRQUNILENBQUM7UUFHRCxTQUFTLENBQUMsU0FBUyxHQUFHLDhEQUE4RCxDQUFDO1FBR3JGLFNBQVMsQ0FBQyxTQUFTLEdBQUcsMERBQTBELENBQUM7UUFHakYsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUMzQixTQUFTLENBQUMsU0FBUyxHQUFHLFNBQVMsR0FBRyxDQUFDLEdBQUcsMENBQTBDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM3RixDQUFDO1FBSUQsU0FBUyxDQUFDLFNBQVMsR0FBRyxvRUFBb0UsQ0FBQztRQUczRixTQUFTLENBQUMsU0FBUyxHQUFHLDJEQUEyRCxDQUFDO1FBR2xGLFNBQVMsQ0FBQyxTQUFTLEdBQUcscURBQXFELENBQUM7SUFDaEYsQ0FBQztJQUdDLFFBQVE7UUFHTixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ2pELEdBQUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4R2QsQ0FBQTtRQUFBLENBQUMsQUFBRDtJQUFBLENBQUMsQUFBRDtDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLypcbjEuVGhlcmUgaXMgYSBmb3JtIHdoZXJlIHlvdSBjYW4gY3JlYXRlIG11bHRpcGxlIGNob2ljZSBxdWVzdGlvbnMgKHR5cGljYWxseSA0IGFuc3dlcnMsIGJ1dCBwdXQgaG93ZXZlciBtYW55IHlvdSBsaWtlKVxuMi5BIOKAnFN1Ym1pdCBRdWVzdGlvbuKAnSBidXR0b24gYWRkcyB0aGUgcXVlc3Rpb24gdG8gYSBxdWl6XG4zLkEg4oCcVGFrZSBRdWl64oCdIGJ1dHRvbiBhbGxvd3MgeW91IHRvIGF0dGVtcHQgdGhlIHF1aXogeW91IGNyZWF0ZWRcbjQuQSDigJxHcmFkZSBRdWl64oCdIGJ1dHRvbiB3aWxsIHRhbGx5IHlvdXIgZ3JhZGUuXG41LllvdSBtdXN0IHV0aWxpemUgYXQgbGVhc3QgdHdvIGNsYXNzZXMgaW4geW91ciBpbXBsZW1lbnRhdGlvbjogUXVpeiBhbmQgUXVlc3Rpb24uXG42LlRoZSBRdWVzdGlvbiBhbmQgUXVpeiBjbGFzc2VzIG11c3QgYm90aCBjb250YWluIGFuIGV2YWx1YXRlKCkgZnVuY3Rpb24gKG9yIOKAnGdyYWRl4oCdIG9yIOKAnGNoZWNr4oCdLCB3aGF0ZXZlciBtYWtlcyB0aGUgbW9zdCBzZW5zZSB0byB5b3UpLlxuYS5UaGUgUXVpeiBldmFsdWF0ZSgpIG11c3QgY2FsbCBldmFsdWF0ZSgpIG9uIGVhY2ggb2YgdGhlIFF1ZXN0aW9uIG9iamVjdHMuXG5iLlRoZSBRdWVzdGlvbiBldmFsdWF0ZSgpIG11c3QgcmV0dXJuIHRydWUgb3IgZmFsc2UgZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhlIHN1Ym1pdHRlZCBxdWVzdGlvbiBpcyBjb3JyZWN0LiAqL1xuXG4vLyBlYWNoIHF1ZXN0aW9uIHNob3VsZCBoYXZlIHRoZSBxdWVzdGlvbiwgb3B0aW9ucyBhbmQgYW5zd2VyIHZhbHVlc1xuY2xhc3MgUXVlc3Rpb24ge1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBxdWVzdGlvbjogc3RyaW5nLCBwdWJsaWMgYW5zd2VyOiBzdHJpbmcsIHB1YmxpYyBvcHRpb25zOiBzdHJpbmdbXSkge31cblxuICAvLyBjb21wYXJlcyBlYWNoIHF1ZXN0aW9uJ3MgYW5zd2VyIHRvIHRoZSB1c2VyJ3MgYW5zd2VyIGFuZCByZXR1cm5zIHRydWUgb3IgZmFsc2VcbiAgZXZhbHVhdGUodXNlckFuc3dlcikge1xuICAgIHJldHVybiB1c2VyQW5zd2VyID09IHRoaXMuYW5zd2VyO1xuICB9XG59XG5cbi8vIHNob3VsZCBob2xkIHF1ZXN0aW9uIG9iamVjdHMgYW5kIGFsbG93IHRoZSB1c2VyIHRvIGNyZWF0ZSBhIG5ldyBxdWVzdGlvblxuLy8gcG9wdWxhdGUgdGhlIHBhZ2Ugd2l0aCB0aGUgbmV3bHkgY3JlYXRlZCBxdWVzdGlvbiBvbiBzdWJtaXRcbmNsYXNzIFF1aXoge1xuXG4gIC8vIGhvbGQgYW4gYXJyYXkgb2YgcXVlc3Rpb24gb2JqZWN0c1xuICBxdWVzdGlvbnM6IHN0cmluZ1tdO1xuXG4gIC8vIGhvbGQgYSB0YWxseSBmb3IgY29ycmVjdCBhbnN3ZXJzXG4gIGNvcnJlY3RDb3VudDogMDtcblxuICAvLyBob2xkIHRoZSBwZXJjZW50YWdlXG4gIHBlcmNlbnRhZ2U6IDA7XG5cbiAgLy8gbWFrZSBhIG1ldGhvZCB0byBhZGQgYSBxdWVzdGlvblxuICBhZGRRdWVzdGlvbihxdWVzdGlvbikge1xuICAgIHRoaXMucXVlc3Rpb25zLnB1c2gocXVlc3Rpb24pO1xuICB9XG5cbiAgLy8gcG9wdWxhdGUgdGhlIHBhZ2Ugd2l0aCB0aGUgcXVlc3Rpb25zIVxuICBwb3B1bGF0ZVBhZ2UoKSB7XG4gICAgLy8gZ3JhYiBvdXIgSFRNTCBjb250YWluZXJcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJxdWVzdGlvbnNcIik7XG5cbiAgICAgIC8vIHRyYXZlcnNlcyBxdWVzdGlvbnMgYW5kIGRpc3BsYXlzIHRoZW0gb24gdGhlIHBhZ2UgdXNpbmcgaW5uZXJIVE1MXG4gICAgICBmb3IgKHZhciBpID0gMTsgaSA8IHRoaXMucXVlc3Rpb25zLmxlbmd0aCArIDE7IGkrKykge1xuICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCI8bGFiZWwgaWQ9XFxcInFcIiArIGkgKyBcIlxcXCI+PHN0cm9uZz5cIiArIGkgKyBcIi4gXCIgKyB0aGlzLnF1ZXN0aW9uc1tpXSArIFwiPC9zdHJvbmc+PC9sYWJlbD4gPGJyPiA8YnI+XCI7XG4gICAgICAgIGZvciAodmFyIGogPSAxOyBqIDwgdGhpcy5xdWVzdGlvbnNbaV0ub3B0aW9ucy5sZW5ndGggKyAxOyBqKyspIHtcbiAgICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCI8aW5wdXQgdHlwZSA9IFxcXCJyYWRpb1xcXCIgbmFtZSA9IFxcXCJhbnN3ZXJzXCIgKyBpICsgXCJpZCA9IFxcXCJxXCIgKyBpICsgXCJhXCIgKyBqICsgXCJ2YWx1ZSA9IFxcXCJhbnN3ZXJcIiArIGogKyBcIj5cIiArIHRoaXMucXVlc3Rpb25zLm9wdGlvbnNbaV0gKyBcIjxicj5cIjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBuZXcgcXVlc3Rpb24gYm94XG4gICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJOZXcgUXVlc3Rpb246IDxpbnB1dCB0eXBlID0gXFxcInRleHRcXFwiIG5hbWUgPSBcXFwibmV3UXVlc3Rpb25cXFwiPlwiO1xuXG4gICAgICAvLyBuZXcgYW5zd2VyIGJveFxuICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiTmV3IEFuc3dlcjogPGlucHV0IHR5cGUgPSBcXFwidGV4dFxcXCIgbmFtZSA9IFxcXCJuZXdBbnN3ZXJcXFwiPlwiO1xuXG4gICAgICAvLyBuZXcgZm91ciBvcHRpb24gYm94ZXNcbiAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIk9wdGlvbiBcIiArIGkgKyBcIjogPGlucHV0IHR5cGUgPSBcXFwidGV4dFxcXCIgbmFtZSA9IFxcXCJvcHRpb25cIiArIGkgKyBcIj5cIjtcbiAgICAgIH1cblxuICAgICAgLy8gU3VibWl0IFF1ZXN0aW9uIGJ1dHRvblxuICAgICAgLy8gd2UgbmVlZCB0byBncmFiIHRoZSB1c2VyIGlucHV0cyBhbmQgcGFzcyB0aGVtIGludG8gdGhlIGFkZFF1ZXN0aW9uIG1ldGhvZFxuICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiPGJ1dHRvbiBvbmNsaWNrPVxcXCJhZGRRdWVzdGlvbigpXFxcIj5TdWJtaXQgUXVlc3Rpb248L2J1dHRvbj48YnI+PGJyPlwiO1xuXG4gICAgICAvLyBUYWtlIFF1aXogYnV0dG9uXG4gICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCI8YnV0dG9uIG9uY2xpY2s9XFxcImV2YWx1YXRlKClcXFwiPlRha2UgUXVpejwvYnV0dG9uPjxicj48YnI+XCI7XG5cbiAgICAgIC8vIEdyYWRlIFF1aXogYnV0dG9uXG4gICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCI8YnV0dG9uIG9uY2xpY2s9XFxcInNob3dTY29yZSgpXFxcIj5HcmFkZSBRdWl6PC9idXR0b24+XCI7XG4gIH1cblxuICAgIC8vIHRyYXZlcnNlcyBlYWNoIG9mIHRoZSBxdWVzdGlvbnMgdG8gdGFsbHkgY29ycmVjdCBhbnN3ZXJzXG4gICAgZXZhbHVhdGUoKSB7XG5cbiAgICAgIC8vIGdyYWIgZWFjaCBzZXQgb2YgYW5zd2VycyBmcm9tIHRoZSBIVE1MXG4gICAgICBmb3IgKHZhciBpID0gMTsgaSA8IHRoaXMucXVlc3Rpb25zLmxlbmd0aCArIDE7IGkrKykge1xuICAgICAgICAgIGxldCBgc3VibWl0QW5zd2VycyArIGkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcImFuc3dlcnNcIiArIGkpO1xuICAgICAgfVxuXG4gICAgICAvLyBjaGVja3MgZWFjaCBjaGVja2VkIGFuc3dlciB0byBzZWUgaWYgaXQgbWF0Y2hlcyB0aGUgY29ycmVjdCBhbnN3ZXIsIGlmIHNvIHdlIGFkZCB0byBvdXIgY29ycmVjdCBjb3VudFxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnF1ZXN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgdXNlckFuc3dlciA9IDxIVE1MSW5wdXRFbGVtZW50PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdEFuc3dlcnNcIiArIChpICsgMSkuaWQpO1xuICAgICAgICBpZiAodXNlckFuc3dlci5jaGVja2VkKSB7XG4gICAgICAgICAgaWYgKHF1ZXN0aW9uLmV2YWx1YXRlKHRoaXMucXVlc3Rpb25zW2ldKS5hbnN3ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuY29ycmVjdENvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGNhbGN1bGF0ZXMgdGhlIHBlcmNlbnRhZ2UgdGhhdCB3aWxsIGJlIHNob3duIG9uIHRoZSBwYWdlXG4gICAgICAgIHRoaXMucGVyY2VudGFnZSA9IHBhcnNlSW50KCh0aGlzLmNvcnJlY3RDb3VudCAvIDUpICogMTAwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgICAvLyBjYWxjdWxhdGUgYW5kIGRpc3BsYXkgdGhlIGZpbmFsIHNjb3JlIGF0IHRoZSB0b3Agb2YgdGhlIHBhZ2VcbiAgICAgIHNob3dTY29yZSgpIHtcbiAgICAgICAgbGV0IHNjb3JlRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njb3JlJyk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY29yZScpLmlubmVySFRNTCA9IFwiWW91ciBTY29yZSBpcyBcIiArIHRoaXMucGVyY2VudGFnZSArIFwiJVwiO1xuICAgICAgICBzY29yZURpdi5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPSAwO1xuICAgICAgfVxuXG4gICAgICAvLyBhZGRzIG5ldyB1c2VyIHF1ZXN0aW9uIHRvIHF1aXogYW5kIHJlcG9wdWxhdGVzIHBhZ2UgdG8gaW5jbHVkZSBuZXcgcXVlc3Rpb25cbiAgICAgIGFkZE5ld1F1ZXN0aW9uKHF1ZXN0aW9uLCBhbnN3ZXIsIGlucHV0cykge1xuICAgICAgICAvLyBhZGQgdGhlIG5ldyB1c2VyIHF1ZXN0aW9uIHRvIHRoZSBxdWl6XG4gICAgICAgIHZhciBuZXdRdWVzdGlvbiA9IG5ldyBRdWVzdGlvbihxdWVzdGlvbiwgYW5zd2VyLCBbaW5wdXRzWzBdLCBpbnB1dHNbMV0sIGlucHV0c1syXSwgaW5wdXRzWzNdXSk7XG4gICAgICAgIHRoaXMuYWRkUXVlc3Rpb24obmV3UXVlc3Rpb24pO1xuXG4gICAgICAgIC8vIHJlcG9wdWxhdGUgcGFnZVxuICAgICAgICB0aGlzLnBvcHVsYXRlUGFnZSgpO1xuICAgICAgfVxuICAgIH1cblxuLy8gYWRkIGluaXRpYWwgcXVlc3Rpb24gb2JqZWN0cyB0byBxdWl6IGNsYXNzXG5sZXQgcXVlc3Rpb24xID0gbmV3IFF1ZXN0aW9uKFwiV2hhdCBjb2xvciBpcyB0aGUgc2t5P1wiLCBcImJsdWVcIiwgW1wiYmx1ZVwiLCBcImJsYWNrXCIsIFwieWVsbG93XCIsIFwicmVkXCJdKTtcbmxldCBxdWVzdGlvbjIgPSBuZXcgUXVlc3Rpb24oXCJXaG8gaXMgdGhlIGN1cnJlbnQgcHJlc2lkZW50IG9mIHRoZSBVbml0ZWQgU3RhdGVzIG9mIEFtZXJpY2E/XCIsIFwiQmFyYWNrIE9iYW1hXCIsIFtcIkpvZSBCaWRlblwiLCBcIkRvbmFsZCBUcnVtcFwiLCBcIkJhcmFjayBPYmFtYVwiLCBcIkdlb3JnZSBXLiBCdXNoXCJdKTtcbmxldCBxdWVzdGlvbjMgPSBuZXcgUXVlc3Rpb24oXCJXaGF0IHdhcyBQcmluY2UncyBmYXZvcml0ZSBjb2xvcj9cIiwgXCJwdXJwbGVcIiwgW1wiYmx1ZVwiLCBcInB1cnBsZVwiLCBcImdvbGRcIiwgXCJzaWx2ZXJcIl0pO1xubGV0IHF1ZXN0aW9uNCA9IG5ldyBRdWVzdGlvbihcIkhvdyBtYW55IGNvbnRpbmVudHMgYXJlIHRoZXJlIGluIHRoZSB3b3JsZD9cIiwgXCI3XCIsIFtcIjE1MFwiLCBcIjFcIiwgXCI2XCIsIFwiN1wiXSk7XG5sZXQgcXVlc3Rpb241ID0gbmV3IFF1ZXN0aW9uKFwiV2hhdCBpcyB0aGUgY2FwaXRhbCBvZiB0aGUgTmV0aGVybGFuZHM/XCIsIFwiQW1zdGVyZGFtXCIsIFtcIkxvbmRvblwiLCBcIkJlcm5cIiwgXCJBbXN0ZXJkYW1cIiwgXCJDb3BlbmhhZ2VuXCJdKTtcbmxldCBxdWl6ID0gbmV3IFF1aXooKTtcbmZvciAodmFyIGkgPSAwOyBpIDwgNTsgaSsrKSB7XG5xdWl6LmFkZFF1ZXN0aW9uKFwicXVlc3Rpb25cIiArIGkpO1xufVxuXG4vLyBjYWxsIHBvcHVsYXRlIHBhZ2UgbWV0aG9kXG5xdWl6LnBvcHVsYXRlUGFnZSgpO1xuXG4vLyBmdW5jdGlvbiB1c2VkIHRvIGNoZWNrIHRoYXQgYW4gYW5zd2VyIHdhcyBzZWxlY3RlZCBmb3IgZXZlcnkgcXVlc3Rpb25cbmZ1bmN0aW9uIGlzVGhlcmVOdWxsKHNldE9mQW5zd2Vycykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHNldE9mQW5zd2Vycy5sZW5ndGg7IGkrKykge1xuICAgIGxldCB1c2VyQW5zd2VyID0gPEhUTUxJbnB1dEVsZW1lbnQ+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNldE9mQW5zd2Vyc1tpXS5pZCk7XG4gICAgaWYgKHVzZXJBbnN3ZXIuY2hlY2tlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLy8gVHJhdmVyc2VzIGVhY2ggcXVlc3Rpb24gdG8gY2hlY2sgaWYgdGhlcmUgaXMgYSBudWxsICh1bmFuc3dlcmVkIHF1ZXN0aW9uKVxuLy8gV2hhdCBkbyB3ZSBpbnB1dCBpbnRvIHRoZSBpc1RoZXJlTnVsbCBtZXRob2Q/IENsdWVsZXNzIHRiaFxudmFyIGZsYWcgPSB0cnVlO1xuZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnF1ZXN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAvLyBmbGFnID0gaXNUaGVyZU51bGwoKTsgW25lZWQgaW5wdXRdXG59XG5cbi8vIGlmIHRoZXkgZGlkIG5vdCBhbnN3ZXIgZXZlcnkgcXVlc3Rpb24sIHdlIHRocm93IGFuIGFsZXJ0IGluc3RlYWRcbmlmICghZmxhZykge1xuICBhbGVydChcIllvdSBuZWVkIHRvIHNlbGVjdCBhbnN3ZXIgZm9yIGV2ZXJ5IHF1ZXN0aW9uIVwiKTtcbn1cblxuLy8gaWYgb3VyIGZsYWcgaXMgdHJ1ZSAoZXZlcnkgcXVlc3Rpb24gd2FzIGFuc3dlcmVkLCB3ZSBwcm9jZWVkIHdpdGggc2NvcmluZylcbmVsc2Uge1xuXG4gIC8vIGluc3RhbnRpYXRlIHRoZSBhbnN3ZXJzIGFycmF5IGFuZCBudW1iZXIgb2YgYW5zd2VycyBjb3JyZWN0IChzY29yZSBjb3VudClcbiAgbGV0IGFuc3dlcnMgPSBbXTtcbiAgbGV0IHNjb3JlQ291bnQgPSAwO1xuXG4gIC8vIHRyYXZlcnNlcyB0aGUgY2hlY2tib3hlcyB0byBmaWd1cmUgb3V0IHdoZXRoZXIgb3Igbm90IHRoZSBhbnN3ZXIgc2VsZWN0ZWQgaXMgY29ycmVjdFxuICAvLyBVc2luZyBvdXIgYXJyYXkgd2Ugc3RvcmUgXCJDXCIgZm9yIGNvcnJlY3QgYW5zd2VycyBhbmQgXCJJXCIgZm9yIGluY29ycmVjdCBhbnN3ZXJzXG4gIGZ1bmN0aW9uIGdyYWJBbnN3ZXJzKHNldE9mQW5zd2VycywgcmVhbEFuc3dlcikge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2V0T2ZBbnN3ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgdXNlckFuc3dlciA9IDxIVE1MSW5wdXRFbGVtZW50PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZXRPZkFuc3dlcnNbaV0uaWQpO1xuICAgICAgICBpZiAodXNlckFuc3dlci5jaGVja2VkKSB7XG4gICAgICAgICAgaWYgKHVzZXJBbnN3ZXIudmFsdWUgPT0gcmVhbEFuc3dlcikge1xuICAgICAgICAgICAgYW5zd2Vycy5wdXNoKFwiQ1wiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhbnN3ZXJzLnB1c2goXCJJXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIGxvb3AgdGhyb3VnaCBhbGwgb2Ygb3VyIHF1ZXN0aW9ucyB0byB1c2UgdGhlIGdyYWJBbnN3ZXJzIG1ldGhvZCBvbiBlYWNoXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcXVpei5xdWVzdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICBncmFiQW5zd2VycyhcInN1Ym1pdEFuc3dlcnNcIiArIChpICsgMSksIHRoaXMucXVlc3Rpb25zLmFuc3dlcik7XG4gIH1cblxuICAvLyBkZXRlcm1pbmUgaG93IG1hbnkgYW5zd2VycyB0aGV5IGdvdCBjb3JyZWN0XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYW5zd2Vycy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChhbnN3ZXJzW2ldID09IFwiQ1wiKSB7XG4gICAgICBzY29yZUNvdW50Kys7XG4gICAgfVxuICB9XG59XG5cbi8qIFRvIERvIExpc3QgKi9cbi8vIDEuIENoZWNrIHRoYXQgZXZlcnkgcXVlc3Rpb24gd2FzIGFuc3dlcmVkIChmaXggbnVsbCBpbnB1dClcbi8vIDIuIFByb3Blcmx5IGFsbG93IHRoZSB1c2VyIHRvIGFkZCBuZXcgcXVlc3Rpb25zIChncmFiIHVzZXIgaW5wdXQpXG4iXX0=