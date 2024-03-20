const fs = require("fs");
const data = fs.readFileSync("masyvas3.csv", "utf8").trim().split("\n").map(line => line.split(" ").map(Number));


for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
        if (i === j || i + j === data.length - 1) {
            data[i][j] = 0;
        }
    }
}
for (let i = 0; i < data.length; i++) {
    console.log(data[i].join(" "));
}
