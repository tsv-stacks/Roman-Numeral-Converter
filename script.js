function convertToRoman(num) {
    const arabicArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    const romanArr = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
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
            console.log(c)
        }
    }

    console.log("arr2: " + arabicArr2)
    console.log("arr3: " + arabicArr3)
    return romanArr2.join('')
}

convertToRoman(36);
