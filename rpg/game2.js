const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const tileSize = 32;
const mapWidth = 32;
const mapHeight = 19;
const moveSpeed = 4; // player speed 

const tiles = [
    'grass.png',
    'dirt.png',
    'bush.png'
];

const map = [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	[2, 0, 0, 1, 1, 1, 2, 0, 0, 0, 1, 1, 1, 2, 0, 0, 0, 1, 1, 1, 2, 0, 0, 0, 1, 1, 1, 2, 0, 0, 0, 2],
	[2, 0, 0, 1, 1, 1, 2, 0, 0, 0, 1, 1, 1, 2, 0, 0, 0, 1, 1, 1, 2, 0, 0, 0, 1, 1, 1, 2, 0, 0, 0, 2],
	[2, 0, 0, 1, 1, 1, 2, 0, 0, 0, 1, 1, 1, 2, 0, 0, 0, 1, 1, 1, 2, 0, 0, 0, 1, 1, 1, 2, 0, 0, 0, 2],
	[2, 0, 0, 1, 1, 1, 2, 0, 0, 0, 1, 1, 1, 2, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 2, 0, 0, 0, 2],
	[2, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 2, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 2, 0, 0, 0, 2],
	[2, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 2, 0, 0, 0, 1, 1, 1, 2, 0, 0, 0, 1, 1, 1, 2, 0, 0, 0, 2],
	[2, 0, 0, 1, 1, 1, 2, 0, 0, 0, 1, 1, 1, 2, 0, 0, 0, 1, 1, 1, 2, 0, 0, 0, 1, 1, 1, 2, 0, 0, 0, 2],
	[2, 0, 0, 1, 1, 1, 2, 0, 0, 0, 1, 1, 1, 2, 0, 0, 0, 1, 1, 1, 2, 0, 0, 0, 1, 1, 1, 2, 0, 0, 0, 2],
	[2, 0, 0, 1, 1, 1, 2, 0, 0, 0, 1, 1, 1, 2, 0, 0, 0, 1, 1, 1, 2, 0, 0, 0, 1, 1, 1, 2, 0, 0, 0, 2],
	[2, 0, 0, 1, 1, 1, 2, 0, 0, 0, 1, 1, 1, 2, 0, 0, 0, 1, 1, 1, 2, 0, 0, 0, 1, 1, 1, 2, 0, 0, 0, 2],
	[2, 0, 0, 1, 1, 1, 2, 0, 0, 0, 1, 1, 1, 2, 0, 0, 0, 1, 1, 1, 2, 0, 0, 0, 1, 1, 1, 2, 0, 0, 0, 2],
	[2, 0, 0, 1, 1, 1, 2, 0, 0, 0, 1, 1, 1, 2, 0, 0, 0, 1, 1, 1, 2, 0, 0, 0, 1, 1, 1, 2, 0, 0, 0, 2],
	[2, 0, 0, 1, 1, 1, 2, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 2, 0, 0, 0, 1, 1, 1, 2, 0, 0, 0, 2],
	[2, 0, 0, 1, 1, 1, 2, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 2, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 2],
	[2, 0, 0, 1, 1, 1, 2, 0, 0, 0, 1, 1, 1, 2, 0, 0, 0, 1, 1, 1, 2, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 2],
	[2, 0, 0, 1, 1, 1, 2, 0, 0, 0, 1, 1, 1, 2, 0, 0, 0, 1, 1, 1, 2, 0, 0, 0, 1, 1, 1, 2, 0, 0, 0, 2],
	[2, 0, 0, 1, 1, 1, 2, 0, 0, 0, 1, 1, 1, 2, 0, 0, 0, 1, 1, 1, 2, 0, 0, 0, 1, 1, 1, 2, 0, 0, 0, 2],
	[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
    
];

const player = {
    x: 64,
    y: 64,
    width: tileSize,
    height: tileSize,
    sprite: 'playerR.png',
    direction: 'right'
};

const coins = [
// Add more coins as needed
    { x: 5, y: 5, sprite: 'coin.png' },
	{ x: 3, y: 14, sprite: 'coin.png' },
	{ x: 23, y: 12, sprite: 'coin.png' },
	{ x: 29, y: 16, sprite: 'heart.png' },
	
    
];

const keys = {};

window.addEventListener('keydown', (e) => {
    keys[e.key] = true;
});

window.addEventListener('keyup', (e) => {
    keys[e.key] = false;
});

function loadImages(sources, callback) {
    let images = {};
    let loadedImages = 0;
    let numImages = sources.length;

    for (let i = 0; i < numImages; i++) {
        images[sources[i]] = new Image();
        images[sources[i]].onload = () => {
            if (++loadedImages >= numImages) {
                callback(images);
            }
        };
        images[sources[i]].src = sources[i];
    }
}

function update() {
    if (keys['ArrowUp']) player.y -= moveSpeed; //was tileSize-too fast
    if (keys['ArrowDown']) player.y += moveSpeed;
    if (keys['ArrowLeft']) {
        player.x -= moveSpeed;
        player.sprite = 'playerL.png';
    }
    if (keys['ArrowRight']) {
        player.x += moveSpeed;
        player.sprite = 'playerR.png';
    }

    // Collision detection with bushes
    let tileX = Math.floor(player.x / tileSize);
    let tileY = Math.floor(player.y / tileSize);
    if (map[tileY] && map[tileY][tileX] === 2) {
        // Undo movement
        if (keys['ArrowUp']) player.y += tileSize;
        if (keys['ArrowDown']) player.y -= tileSize;
        if (keys['ArrowLeft']) player.x += tileSize;
        if (keys['ArrowRight']) player.x -= tileSize;
    }

    // Collect coins
    coins.forEach((coin, index) => {
        if (player.x === coin.x * tileSize && player.y === coin.y * tileSize) {
            coins.splice(index, 1);
        }
    });
}

function draw(images) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let y = 0; y < mapHeight; y++) {
        for (let x = 0; x < mapWidth; x++) {
            let tile = map[y][x];
            ctx.drawImage(images[tiles[tile]], x * tileSize, y * tileSize, tileSize, tileSize);
        }
    }

    ctx.drawImage(images[player.sprite], player.x, player.y, player.width, player.height);

    coins.forEach(coin => {
        ctx.drawImage(images[coin.sprite], coin.x * tileSize, coin.y * tileSize, tileSize, tileSize);
    });
}

function gameLoop(images) {
    update();
    draw(images);
    requestAnimationFrame(() => gameLoop(images));
}

loadImages([...tiles, 'playerL.png', 'playerR.png', 'coin.png', 'heart.png'], (images) => {
    gameLoop(images);
});
