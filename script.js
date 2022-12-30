let words = prompt("Enter several words (separated by commas)");
let tab = words.split(",");

// Get max words
let nbStars = 0;
for (const item of tab) {
    if (nbStars<item.length) {
        nbStars = item.length;
    }
}

let starsStr = "**";
for (let index = 0; index < nbStars; index++) {
    starsStr += "*";
}


// show first line
console.log(starsStr);

for (const item of tab) {
    // add spaces
    let space = "";
    if (item.length<nbStars) {
        let nb = nbStars-item.length;
        for (let index = 0; index < nb; index++) {
            space += " ";
        }
    }
    console.log(`*${item+space}*`);
}

// show last line
console.log(starsStr);