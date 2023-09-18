window.onload = function generateColor() {
    const divs = document.querySelectorAll("div");

    let colors = [];

    for (let i = 0; i < divs.length; i++) {
        const r = Math.random() * 255;
        const g = Math.random() * 255;
        const b = Math.random() * 255;

        colors.push(`rgb(${r}, ${g}, ${b})`);
    }

    for (let i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = colors[i];
    }

    document.getElementById("btn1").onclick = generateColor;
};