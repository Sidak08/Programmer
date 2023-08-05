const wrapper = document.getElementById("tiles");

let columns = 0,
    rows = 0,
    toggled = false;

const toggle = () => {
    toggled = !toggled;

    document.body.classList.toggle("toggled");
}

const handleOnClick = index => {
        toggle();

    anime({
        targets: ".tile",
        opacity: toggled ? 0 : 1,
        delay: anime.stagger(50, {
            grid: [columns, rows],
            from: index
        })
    }) 
}

const simulateRandomClick = () => {
    const tiles = document.getElementsByClassName("tile");
    if (tiles.length > 0) {
        const randomIndex = Math.floor(Math.random() * tiles.length);
        const randomTile = tiles[randomIndex];
        randomTile.click(); // Simulate the click event on the random tile
    }
};


const createTile = index => {
    const tile = document.createElement("div");

    tile.classList.add("tile");

    tile.style.opacity = toggled ? 0 : 1;

    tile.onclick = e => handleOnClick(index);

    return tile;
}

const createTiles = quantity => {
    Array.from(Array(quantity)).map((tile, index) => {
        wrapper.appendChild(createTile(index));
    });
}

const createGrid = () => {
    wrapper.innerHTML = "";

    const size = document.body.clientWidth > 800 ? 100 : 50;

    columns = Math.floor(document.body.clientWidth / size);
    rows = Math.floor(document.body.clientHeight / size);

    wrapper.style.setProperty("--columns", columns);
    wrapper.style.setProperty("--rows", rows);

    createTiles(columns * rows);
}

createGrid();

window.onresize = () => createGrid();

console.log("hi")

function backgroundTiles() {
    setTimeout(simulateRandomClick, 1000);
    setTimeout(simulateRandomClick, 3500);
}

setTimeout(simulateRandomClick, 1000);
setTimeout(simulateRandomClick, 3500);

setInterval(backgroundTiles, 9000);
