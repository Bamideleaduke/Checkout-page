
// Card item One
const itemNum = document.querySelector(".item-num");
const addItem = document.querySelector(".plus");
const removeItem = document.querySelector(".minus");


addItem.addEventListener("click", () => {
    itemNum.innerHTML++
})

removeItem.addEventListener("click", () => {
    itemNum.innerHTML--
})

//Card Item Two

const itemNum2 = document.querySelector(".item-num2");
const addItem2 = document.querySelector(".plus2");
const removeItem2 = document.querySelector(".minus2");

addItem2.addEventListener("click", () => {
    itemNum2.innerHTML++
})
removeItem2.addEventListener("click", () => {
    itemNum2.innerHTML--
})
