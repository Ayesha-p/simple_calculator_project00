import inquirer from "inquirer";
const answer = await inquirer.prompt([{
        message: "Enter First  Number", type: "number", name: "firstnum"
    },
    { message: "Enter Seconde  Number", type: "number", name: "secondenum" },
    { message: "Select  Oprators to perform opration", type: "list", name: "oprator", choices: ["Addition", "Subtraction", "Multiplication", "Division"] }]);
let output;
if (answer.oprator == "Addition") {
    output = answer.firstnum + answer.secondenum;
    console.log(`Answer is ${output}`);
}
else if (answer.oprator == "Subtraction") {
    output = answer.firstnum - answer.secondenum;
    console.log(`Answer is ${output}`);
}
else if (answer.oprator == "Multiplication") {
    output = answer.firstnum * answer.secondenum;
    console.log(`Answer is ${output}`);
}
else if (answer.oprator == "Division") {
    output = answer.firstnum / answer.secondenum;
    console.log(`Answer is ${output}`);
}
