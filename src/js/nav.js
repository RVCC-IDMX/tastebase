// Class checking functions
const checkClass = c => document.getElementsByClassName(c).length > 0;
const findClass = (c, n=0) => document.getElementsByClassName(c)[n];
const setClass = (c, str, n=0) => document.getElementsByClassName(c)[n].innerHTML = str;

// Toggle a list of element-class pairs based on conditionals
const toggleClasses = (addCondition, removeCondition, ...pairs) => {
    if (addCondition) {
        pairs.forEach(pair => pair[0].classList.add(pair[1]))
    } else if (removeCondition) {
        pairs.forEach(pair => pair[0].classList.remove(pair[1]))
    }
}

// Adds an event listener with full touch/click coverage
const addClickListener = func => {
    let funcStr = func.toString();
    funcStr = funcStr.slice(funcStr.indexOf("{") + 1, funcStr.lastIndexOf("}"));
    const funcTouch = new Function(funcStr + "\n" + 'e.preventDefault()');
    window.addEventListener('touchstart', funcTouch);
    window.addEventListener('click', func);
}

export const Nav = () => {
    // Icon sticks when selected on mobile, darken and freeze
    window.onload = () => {
        addClickListener(e => {
            const links = findClass("links");
            const menu = findClass("nav__toggle");
            const main = findClass("main");
            const footer = findClass("footer");
            toggleClasses(
                menu.contains(e.target) && !menu.classList.contains("enlarge"),
                !links.contains(e.target) && menu.classList.contains("enlarge"),
                [links, "open"],
                [menu, "enlarge"],
                [main, "darken"],
                [footer, "darken"],
            )
        })
    }
}