$(document).ready(function() {
    const meeseeksCharacters = ['🤖', '🤖', '🌟', '🌟', '🔍', '🔍', '🔮', '🔮', '🎩', '🎩', '💡', '💡'];
    let selectedCards = [];
    let matchedPairs = 0;

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function createGameBoard() {
        const gameBoard = $('#game-board');
        shuffleArray(meeseeksCharacters);
        meeseeksCharacters.forEach(function(character, index) {
            const card = $(`<div class="card" data-index="${index}"></div>`);
            card.click(function() {
                if (!card.hasClass('flipped') && selectedCards.length < 2) {
                    card.addClass('flipped');
                    card.text(character);
                    selectedCards.push({ card, index });

                    if (selectedCards.length === 2) {
                        setTimeout(checkMatch, 1000);
                    }
                }
            });
            gameBoard.append(card);
        });
    }

    function checkMatch() {
        const [firstCard, secondCard] = selectedCards;
        const firstIndex = firstCard.index;
        const secondIndex = secondCard.index;

        if (meeseeksCharacters[firstIndex] === meeseeksCharacters[secondIndex]) {
            firstCard.card.addClass('matched');
            secondCard.card.addClass('matched');
            matchedPairs++;
            if (matchedPairs === meeseeksCharacters.length / 2) {
                endGame('Congratulations! You\'ve matched all the pairs!');
            }
        } else {
            selectedCards.forEach(card => {
                card.card.removeClass('flipped').text('');
            });
        }

        selectedCards = [];
    }

    function endGame(message) {
        $('#result').text(message);
    }

    createGameBoard();
});
