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
let n = 5;
let pattern = "";

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
        pattern += " ";
    }

    for (let j = 1; j <= 2 * i - 1; j++) {
        pattern += "*";
    }

    pattern += "\n";
}

for (let i = n - 1; i >= 1; i--) {
    for (let j = 1; j <= n - i; j++) {
        pattern += " ";
    }

    for (let j = 1; j <= 2 * i - 1; j++) {
        pattern += "*";
    }

    pattern += "\n";
}

console.log(pattern);
console.log(" ")
let rows1 = 5;
let result1 = "";

for (let i = 1; i <= rows1; i++) {
    for (let j = 1; j <= i; j++) {
        result1 += "* ";
    }
    result1 += "\n";
}

console.log(result1);
console.log(" ")
let rows4 = 5;
let result4 = "";

for (let i = 3; i <= rows4; i++) {
    for (let j = 1; j <= rows4 - i; j++) {
        result4 += " ";
    }

    for (let j = 1; j <= 4 * i - 2; j++) {
        result4 += "*";
    }

    result4 += "\n";
}

console.log(result4);
