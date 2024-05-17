import inquirer from "inquirer";
let balance = 10000;
console.log("{Welcome to mybank}");
const name = await inquirer.prompt({
    type: "input",
    name: "username",
    message: "please enter your name:"
});
let ask = await inquirer.prompt({
    type: "number",
    name: "id",
    message: "Kindly enter your account id:"
});
if (ask.id === 333) {
    console.log(`{Welcome ${name.username}}`);
}
else {
    console.log("account not recongnized!");
    process.exit();
}
const askpass = await inquirer.prompt({
    type: "password",
    name: "pass",
    message: "please enter your account password for the account status:"
});
if (askpass.pass == 12345) {
    const obj = [];
    console.log("Showing current status of your account...");
    class showstatus {
        bank_name = "mybank";
        user_name = name.username;
        acc_id = ask.id;
        acc_balance = balance;
        constructor(bank_name, user_name, acc_id, acc_balance) {
            this.bank_name = bank_name;
            this.user_name = user_name;
            this.acc_id = acc_id;
            this.acc_balance = balance;
        }
    }
    const show = new showstatus("mybank", name.username, 333, balance);
    obj.push(show);
    console.table(obj);
    console.log("{please choose one the following services}");
    let options = await inquirer.prompt({
        type: "list",
        name: "opt",
        choices: [
            "Deposite",
            "withdraw",
            "exit"
        ]
    });
    if (options.opt === "Deposite") {
        let askme = await inquirer.prompt({
            type: "number",
            name: "askmee",
            message: "Enter the amount of cash u want to deposite:"
        });
        if (askme.askmee <= 0) {
            console.log("please enter a valid amount");
        }
        else {
            balance = balance + askme.askmee;
            console.log("Your balance is =>:", balance);
        }
    }
    if (options.opt === "withdraw") {
        let askme2 = await inquirer.prompt({
            type: "number",
            name: "askmee3",
            message: "Enter the amount of cash u want to Withdraw:"
        });
        if (askme2.askmee3 <= 0) {
            console.log("please enter a valid amount");
        }
        else if (askme2.askmee3 > balance) {
            console.log("we are sorry your there are insufficant funds in your ascount for this withdrawl");
        }
        else {
            balance = balance - askme2.askmee3;
            console.log("Your balance is =>:", balance);
        }
    }
    else if (options.opt === "exit") {
        console.log("Have a nice day (^-^)");
        process.exit(0);
    }
    let furopt = await inquirer.prompt({
        type: "list",
        name: "futher_options",
        choices: [
            "[Updated status]",
            "Exit"
        ]
    });
    if (furopt.futher_options == "[Updated status]") {
        const showtable = new showstatus('mybank', name.username, 333, balance);
        console.table(showtable);
    }
    if (furopt.futher_options === "Exit") {
        console.log("Have a nice day (^-^)");
        process.exit(0);
    }
}
else {
    console.log("wrong password please try again :(");
}
