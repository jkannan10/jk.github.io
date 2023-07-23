let approve = confirm("Press ok to start the game");
if (approve) {
  let user = prompt("Enter rock or paper or scissor");
  let userChoice = user.trim().toLowerCase();
  if (
    userChoice === "rock" ||
    userChoice === "paper" ||
    userChoice === "scissor"
  ) {
    let cpu = Math.round((Math.random() * 24) / 6 + 5 - 1) % 3;
    let cpuChoice = null;
    switch (cpu) {
      case 0:
        cpuChoice = "scissor";
        break;
      case 1:
        cpuChoice = "rock";
        break;
      case 2:
        cpuChoice = "papper";
    }
    if (cpuChoice === userChoice) {
      console.log("Game is tie");
    } else if (
      (userChoice === "rock" && cpuChoice === "scissor") ||
      (userChoice === "paper" && cpuChoice === "rock") ||
      (userChoice === "scissor" && cpuChoice === "paper")
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
  } else {
    console.log("Invalid Choice");
  }
} else {
  console.log("Thank You!");
}
