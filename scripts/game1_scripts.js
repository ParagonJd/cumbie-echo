$(document).ready(function() {
    const riddles = [
        { question: "I speak without a mouth and hear without ears. What am I?", answer: "an echo", options: ["an echo", "a whisper", "a scream"] },
        { question: "What has keys but can't open locks?", answer: "a piano", options: ["a piano", "a locksmith", "a door"] },
        { question: "The more you take, the more you leave behind. What am I?", answer: "footsteps", options: ["morty", "footsteps", "grapes" ]},
    ];

    let currentRiddleIndex = 0;
    const questionElement = $("#question");
    const answerElement = $("#answer");
    const submitButton = $("#submit");
    const resultElement = $("#result");
    const vaultLink = $("#vault-link");

    function loadNextRiddle() {
        if (currentRiddleIndex < riddles.length) {
            const riddle = riddles[currentRiddleIndex];
            questionElement.text(`Riddle ${currentRiddleIndex + 1}: ${riddle.question}`);
            
            // Clear previous options and add the new options
            answerElement.empty().append('<option value="" disabled selected>Select your answer</option>');
            for (const option of riddle.options) {
                answerElement.append(`<option value="${option}">${option}</option>`);
            }

            resultElement.text("");
        } else {
            questionElement.text("Congratulations! You've solved all the riddles.");
            answerElement.hide();
            submitButton.hide();
            vaultLink.show(); // Show the link to Rick's Vault
        }
    }

    submitButton.click(function() {
        const userAnswer = answerElement.val();
        const correctAnswer = riddles[currentRiddleIndex].answer;

        if (userAnswer === correctAnswer) {
            resultElement.text("Correct! You may proceed to the next dimension.");
            currentRiddleIndex++;
            loadNextRiddle();
        } else {
            resultElement.text("Incorrect. Try again!");
            setTimeout(function() {
                currentRiddleIndex = 0;
                loadNextRiddle();
            }, 2000); // Restart the game after a delay (2 seconds)
        }
    });

    loadNextRiddle();
});
