$(document).ready(function() {
    const mazeData = [
        {
            story: "You find yourself deep inside the Meeseeks Maze. A mysterious voice echoes: 'Choose your path wisely.'",
            choices: [
                { text: "Explore the dark corridor", next: 1 },
                { text: "Enter the enchanted garden", next: 5 },
                { text: "Climb the crumbling stairs", next: 9 }
            ]
        },
        // Choice 1: Explore the dark corridor
        {
            story: "In the dark corridor, you find a torch and a locked door. What do you do?",
            choices: [
                { text: "Light the torch and unlock the door", next: 2 },
                { text: "Leave the corridor and explore elsewhere", next: 0 }
            ]
        },
        {
            story: "You light the torch and unlock the door. You find a chest with a map inside.",
            choices: [
                { text: "Follow the map", next: 3 },
                { text: "Ignore the map and continue exploring", next: 4 }
            ]
        },
        {
            story: "Following the map, you reach a library with ancient Meeseeks scrolls. You learn the maze's secrets.",
            choices: [
                { text: "Study the scrolls further", next: 6 },
                { text: "Exit the library and explore", next: 0 }
            ]
        },
        // Choice 2: Enter the enchanted garden
        {
            story: "In the enchanted garden, you encounter a talking tree. It offers you a magical fruit.",
            choices: [
                { text: "Eat the fruit", next: 7 },
                { text: "Decline the fruit and continue", next: 8 }
            ]
        },
        {
            story: "You eat the magical fruit and gain the ability to talk to animals. A wise owl gives you a riddle.",
            choices: [
                { text: "Solve the riddle", next: 10 },
                { text: "Ignore the riddle and explore", next: 0 }
            ]
        },
        {
            story: "You solve the riddle and the owl guides you to the maze's exit. Congratulations, you've escaped!",
            choices: [],
            win: true
        },
        {
            story: "You decline the fruit and the tree gets angry. It casts a spell, trapping you in a maze illusion.",
            choices: [
                { text: "Try to dispel the illusion", next: 11 },
                { text: "Wait and observe", next: 12 }
            ]
        },
        {
            story: "You dispel the illusion and find the real path. The tree apologizes, and you continue your journey.",
            choices: [
                { text: "Forgive the tree and continue", next: 0 }
            ]
        },
        {
            story: "You wait and observe. The illusion fades away, revealing the true path. The tree apologizes.",
            choices: [
                { text: "Forgive the tree and continue", next: 0 }
            ]
        },
        {
            story: "You climb the crumbling stairs and reach a room with a Meeseeks philosopher. He asks you a profound question.",
            choices: [
                { text: "Answer the philosopher's question", next: 13 },
                { text: "Ignore the question and explore further", next: 0 }
            ]
        },
        {
            story: "Your answer impresses the philosopher. He opens a secret passage, guiding you to the maze's exit.",
            choices: [],
            win: true
        },
        {
            story: "You ignore the question and explore further. You encounter a maze guardian who challenges you to a duel.",
            choices: [
                { text: "Accept the duel", next: 14 },
                { text: "Attempt to negotiate", next: 15 }
            ]
        },
        {
            story: "You accept the duel and defeat the guardian. He respects your bravery and shows you the way out.",
            choices: [],
            win: true
        },
        {
            story: "Your negotiation skills impress the guardian. He agrees to let you pass peacefully. You continue your journey.",
            choices: [
                { text: "Continue your journey", next: 0 }
            ]
        }
    ];



    let currentStoryIndex = 0;
    const storyElement = $("#story");
    const choicesElement = $("#choices");
    const resultElement = $("#result");

    function displayStory(index) {
        const currentData = mazeData[index];
        storyElement.text(currentData.story);
        choicesElement.empty();
        if (currentData.choices.length > 0) {
            for (const choice of currentData.choices) {
                const button = $(`<button>${choice.text}</button>`);
                button.click(function() {
                    currentStoryIndex = choice.next;
                    if (currentStoryIndex < mazeData.length) {
                        const nextData = mazeData[currentStoryIndex];
                        if (nextData.win) {
                            endGame("Congratulations! You've successfully navigated the Meeseeks Maze!");
                        } else if (nextData.lose) {
                            endGame("Game over. You lost in the Meeseeks Maze.");
                        } else {
                            displayStory(currentStoryIndex);
                        }
                    }
                });
                choicesElement.append(button);
            }
        }
    }

    function endGame(message) {
        storyElement.text("");
        choicesElement.empty();
        resultElement.text(message);
    }

    displayStory(currentStoryIndex);
});
