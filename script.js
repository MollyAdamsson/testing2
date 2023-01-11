<script>
        let round = 1;
        let playerScore = 0;
        let computerScore = 0;

        const play = (playerChoice) => {
            let computerChoice = Math.floor(Math.random() * 5) + 1;

            switch (computerChoice) {
                case 1:
                    computerChoice = "rock";
                    break;
                case 2:
                    computerChoice = "paper";
                    break;
                case 3:
                    computerChoice = "scissors";
                    break;
                case 4:
                    computerChoice = "lizard";
                    break;
                case 5:
                    computerChoice = "spock";
                    break;
            }

            if (playerChoice === computerChoice) {
                document.getElementById("result").innerHTML = `It's a tie! You both picked ${computerChoice}.`;
                return;
            }

            if (
                (playerChoice === "rock" && computerChoice === "scissors") ||
                (playerChoice === "rock" && computerChoice === "lizard") ||
                (playerChoice === "paper" && computerChoice === "rock") ||
                (playerChoice === "paper" && computerChoice === "spock") ||
                (playerChoice === "scissors" && computerChoice === "paper") ||
                (playerChoice === "scissors" && computerChoice === "lizard") ||
                (playerChoice === "lizard" && computerChoice === "paper") ||
                (playerChoice === "lizard" && computerChoice === "spock") ||
                (playerChoice === "spock" && computerChoice === "scissors") ||
                (playerChoice === "spock" && computerChoice === "rock")
            ) {
                playerScore++;
                document.getElementById("result").innerHTML = `You win! ${playerChoice} beats ${computerChoice}.`;
            } else {
                computerScore++;
                document.getElementById("result").innerHTML = `You lose! ${computerChoice} beats ${playerChoice}.`;
            }
            document.getElementById("round").innerHTML = `Round: ${round++}`;
            document.getElementById("player-score").innerHTML = `Player Score: ${playerScore}`;
            document.getElementById("computer-score").innerHTML = `Computer Score: ${computerScore}`;
        }