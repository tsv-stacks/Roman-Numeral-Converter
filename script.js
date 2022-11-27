const arabicArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
const romanArr = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
let btn = document.getElementById("btn")
let resultInput = document.getElementById("roman-num")
let numberInput = document.getElementById("number-input")

btn.addEventListener("click", () => conversionCheck())

// Make sure this code gets executed after the DOM is loaded.
//document.querySelector("#addLinks").addEventListener("keyup", event => {
//if(event.key !== "Enter") return; // Use `.key` instead.
//document.querySelector("#linkadd").click(); // Things you want to do.
//event.preventDefault(); // No need to `return false;`.
//});

function conversionCheck() {
    let num = parseInt(numberInput.value)
    if (num < 1 || num > 4000 || "") {
        alert("The largest number that can be represented in Standard Roman numerals is 3999. \nPlease enter a number between 1 and 3999!")
        numberInput.value = ""
    } else {
        let result = convertToRoman(num)
        resultInput.innerText = result
    }
}

function convertToRoman(num) {
    let arabicArr2 = []
    let arabicArr3 = []
    let romanArr2 = []
    for (let i = 0; i < arabicArr.length; i++) {
        if (num / arabicArr[i] >= 1) {
            let x = Math.floor(num / arabicArr[i])
            num = num - (x * arabicArr[i])
            arabicArr3.push(x)
            arabicArr2.push(arabicArr[i])
        } else {
            arabicArr2.push("0")
            arabicArr3.push("0")
        }
    }
    for (let i = 0; i < arabicArr3.length; i++) {
        if (arabicArr3[i] != 0) {
            let a = arabicArr3[i]
            let b = romanArr[i]
            let c = b.repeat(a)
            romanArr2.push(c)
        }
    }
    // console.log(romanArr2.join(''))
    return romanArr2.join('')
}
