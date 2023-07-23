let contPlay = true;
do {
  let approve = confirm("Press ok to start the game");
  if (approve) {
    let user = prompt("Enter rock or paper or scissor");
    let userChoice = user.trim().toLowerCase();
    let options = ["rock", "paper", "scissor"];
    if (options.includes(userChoice)) {
      let cpu = Math.round((Math.random() * 24) / 6 + 5 - 1) % 3;
      let cpuChoice = null;
      switch (cpu) {
        case 0:
          cpuChoice = options[2];
          break;
        case 1:
          cpuChoice = options[0];
          break;
        case 2:
          cpuChoice = options[1];
      }
      if (cpuChoice === userChoice) {
        console.log("Game is tie");
      } else if (
        (userChoice === options[0] && cpuChoice === options[2]) ||
        (userChoice === options[1] && cpuChoice === options[0]) ||
        (userChoice === options[2] && cpuChoice === options[1])
      ) {
        console.log("You won");
      } else {
        console.log("Computer Won");
        let bool = confirm("Do you want to See Computer choice");
        if (bool) {
          console.log("CompterChoice is :" + cpuChoice);
        } else {
          console.log("Thank You!");
        }
      }
      contPlay = confirm("Do you want to continue !");
    } else {
      console.log("Invalid Choice");
    }
  } else {
    crossOriginIsolated.log("Thanks For Playing !");
  }
} while (contPlay);
