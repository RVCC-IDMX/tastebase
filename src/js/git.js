const fs = require('fs');

// Git data
export const Git = () => {
    const tag = fs.readFileSync('src/_REV', 'utf8');
    document.getElementById("version").innerHTML = tag;
}