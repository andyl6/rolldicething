const rollbutton = document.getElementById("rollDice");
const dice1 = document.getElementById("first");
const dice2 = document.getElementById("second");
const total = document.getElementById("total");

let rollone = 0;
let rolltwo = 0;

const generateNum = () => {
    const num = Math.floor(Math.random() * 6) + 1;
    return num;
};

const rollfirst = () => {
    const rollfirst = generateNum();
    rollone = rollfirst;
    dice1.textContent = `die 1: ${rollfirst}`;
    total.textContent = `total: ${rollfirst + rolltwo}`;
};

const rollsecond = () => {
    const rollsecond = generateNum();
    rolltwo = rollsecond;
    dice2.textContent = `die 2: ${rollsecond}`;
    total.textContent = `total: ${rollone + rollsecond}`;
};

const rollBoth = () => {
    rollfirst();
    rollsecond();
};

rollbutton.addEventListener("click", rollBoth);

const rollfirstbutton = document.getElementById("rolldie1");

rollfirstbutton.addEventListener("click",rollfirst);

const rollsecondbutton = document.getElementById("rolldie2");

rollsecondbutton.addEventListener("click",rollsecond);