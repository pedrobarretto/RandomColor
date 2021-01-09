const btn = document.querySelector('button');
const h1 = document.querySelector('h1');

const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

btn.addEventListener('click', function () {
    const color = randomColor();
    document.body.style.backgroundColor = color;
    h1.innerText = color;
    let rgb = color
    rgb = rgb.substring(4, rgb.length-1)
         .replace(/ /g, '')
         .split(',');
    r = rgb[0];
    g = rgb[1];
    b = rgb[2];
    hsp = Math.sqrt(
        0.299 * (r * r) +
        0.587 * (g * g) +
        0.114 * (b * b)
        );
    if (hsp<127.5) {
        h1.style.color = 'white';
    } else {
        h1.style.color = 'black';
    }
})