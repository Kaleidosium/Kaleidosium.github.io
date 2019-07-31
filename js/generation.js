"use strict";

(function window_call() {
var canvas;
var ctx;
var allocatedFrames;
var currentDrawStyle;
var procedural = true;
var colorLock = 0;
window.onload = init;

function init() {
    canvas = document.querySelector("#canvas");
    ctx = canvas.getContext('2d');
    ctx.fillStyle = "black";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    updateSize();
    window.addEventListener('resize', updateSize);
    colorLock = Math.round(random(0, 2));
    console.log(colorLock);

    if (procedural) {
    requestAnimationFrame(updateCanvas);
    } else {
    var i;

    for (i = 0; i < 600; i++) {
        updateCanvas();
    }
    }
}

function updateCanvas() {
    allocatedFrames = random(5, 20);
    currentDrawStyle = Math.round(random(0, 0));
    console.log(currentDrawStyle);

    switch (currentDrawStyle) {
    case 0:
        algSpiral(ctx);
        break;

    case 1:
        algCurve(ctx);
        break;

    default:
        algCurve(ctx);
        break;
    }

    if (procedural) {
    requestAnimationFrame(updateCanvas);
    }
}

// Helper Functions

function updateSize() {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
}

function random(bound1, bound2) {
    return Math.random() * (bound2 - bound1 + 1) + bound1;
}

function color(r, g, b, a) {
    return "rgba(" + r + "," + g + "," + b + "," + a + ")";
}

function randomColor() {
    var alpha = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var colors = [0, 0, 0, 0];
    var i;

    for (i = 0; i < colors.length; i++) {
    if (i < colors.length - 1) {
        colors[i] = random(0, 255);
    } else {
        colors[i] = random(0, 1);
    }
    }

    if (!alpha) colors[3] = 1.0;
    colors[colorLock] = 200;
    var newColor = color(colors[0], colors[1], colors[2], colors[3]);
    return newColor;
}

function translateRandom() {
    var c = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ctx;
    c.translate(random(0, canvas.width), random(0, canvas.height));
}

function rotateRandom() {
    var c = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ctx;
    c.rotate(2 * Math.PI / random(0, 360));
}

// Shape Algorithms

function algCurve(c) {
    c.save();
    translateRandom(c);
    rotateRandom(c);
    c.fillStyle = randomColor(false);
    var maxDist = 200;
    var maxSize = 20;
    var distx = random(0, maxDist);
    var disty = random(0, maxDist);
    var sizew = random(0, maxSize);
    var sizeh = random(0, maxSize);
    var sizeIncr = random(0, 2);
    var distIncr = random(0, 3);
    var resize = false;
    var decideSize = random(0, 10);
    if (decideSize > 8) resize = true;
    var move = false;
    var decideMove = random(0, 10);
    if (decideMove > 8) move = true;
    var stroke = false;
    var decideStroke = random(0, 10);
    if (decideStroke > 5) stroke = true;
    var rotateIncr = Math.PI * 2 / random(0, 5);
    var i;

    for (i = 0; i < allocatedFrames; i++) {
    var x = void 0,
        y = void 0,
        w = void 0,
        h = void 0;

    if (decideMove) {
        x = distx + distIncr * i;
        y = disty + distIncr * i;
    }

    if (decideSize) {
        w = sizew + sizeIncr * i;
        h = sizeh + sizeIncr * i;
    }

    if (stroke) {
        c.strokeStyle = randomColor(false);
        c.lineWidth = random(0, 5);
        c.strokeRect(x, y, w, h);
    } else {
        c.fillRect(x, y, w, h);
    }

    if (i % 20 == 0) {
        c.translate(random(0, 10), random(0, 10));
    } else {
        c.rotate(rotateIncr);
    }
    }

    c.restore();
}

function algSpiral(c) {
    c.save();
    translateRandom(c);
    rotateRandom(c);
    c.strokeStyle = randomColor(false);
    c.lineWidth = random(0, 10);
    var size = random(2, 10);
    var circles = random(50, 300);
    var rotateIncr = Math.PI / 360 * circles;
    var heightIncr = random(0, 10);
    var sizeIncr = random(0, 2);
    var i;

    for (i = 0; i < circles; i++) {
    c.beginPath();
    var x = void 0,
        y = void 0,
        r = void 0,
        b = void 0,
        e = void 0,
        n = void 0;
    x = sizeIncr * i;
    y = heightIncr * i;
    r = size;
    b = 0;
    e = Math.PI * 2;
    n = false;
    c.arc(x, y, r, b, e, n);
    c.rotate(rotateIncr);
    c.stroke();
    c.closePath();
    }

    c.restore();
}
})();