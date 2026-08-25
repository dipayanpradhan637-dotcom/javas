for (let i = 1; i <= 5; i++) {
    let star = "";

    for (let j = 1; j <= i; j++) {
        star += "* ";
    }

    console.log(star);
}
console.log(" ")
for (let i = 1; i <= 5; i++) {
        let star = "";
    for (let j = 1; j <= 5; j++) {
        star += "* ";
    }

    console.log(star);
}
console.log(" ")
let i, j, k;

for (i = 1; i <= 5; i++) {
    let str = "";

    for (j = 1; j <= 5 - i; j++) {
        str += " ";
    }

    for (k = 1; k <= i; k++) {
        str += "* ";
    }

    console.log(str);
}
console.log(" ")
let s, p, r;

for (s = 1; s<= 9; s++) {
    let str = "";

    for (p = 1; p<= 5 - s; p++)
    {
        str += " ";
    }

    for (r = 1; r <= s; r++) {
        str += "* ";
    }

    console.log(str);
}
console.log(" ")