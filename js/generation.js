(function window_call() {

    let canvas;
    let ctx;

    let allocatedFrames;
    let currentDrawStyle;

    let procedural = true;

    let colorLock = 0;

    window.onload = init;
    function init() {
        canvas = document.querySelector("#canvas");
        ctx = canvas.getContext('2d');
        ctx.fillStyle = "black";
        ctx.clearRect(0,0,canvas.width,canvas.height);
        updateSize();
        window.addEventListener('resize', updateSize);

        colorLock = Math.round(random(0,2));
        console.log(colorLock);

        if(procedural) {
            requestAnimationFrame(updateCanvas);
        } else {
            let i; 
            for(i = 0; i < 600; i++) {
                updateCanvas();
            }
        }
    }

    function updateCanvas() {
        allocatedFrames = random(5,20);
        currentDrawStyle = Math.round(random(0,0));
        console.log(currentDrawStyle);
        switch(currentDrawStyle) {
            case 0: algSpiral(ctx); break;
            case 1: algCurve(ctx); break;
            default: algCurve(ctx); break;
        }

        if(procedural) {
            requestAnimationFrame(updateCanvas);
        }
    }

    //Helper Functions

    function updateSize() {
        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight;
    }

    function random(bound1, bound2) {
        return (Math.random() * (bound2 - bound1 + 1)) + bound1;
    }

    function color(r, g, b, a) {
        return "rgba(" + r + "," + g + "," + b + "," + a + ")";
    }

    function randomColor(alpha = false) {
        let colors = [0,0,0,0];
        let i;
        for(i = 0; i < colors.length; i++) {
            if(i < colors.length - 1) {
                colors[i] = random(0,255);
            } else {
                colors[i] = random(0,1);
            }
        }

        if(!alpha)
            colors[3] = 1.0;

        colors[colorLock] = 200;

        let newColor = color(colors[0],colors[1],colors[2],colors[3]);
        return newColor;
    }

    function translateRandom(c = ctx) {
        c.translate(random(0, canvas.width),random(0,canvas.height));
    }

    function rotateRandom(c = ctx) {
        c.rotate((2 * Math.PI) / random(0, 360));
    }

    //Shape Algorithms
    
    function algCurve(c) {
        c.save();
        translateRandom(c);
        rotateRandom(c);
        c.fillStyle = randomColor(false);

        let maxDist = 200;
        let maxSize = 20;
        let distx = random(0,maxDist);
        let disty = random(0,maxDist);
        let sizew = random(0,maxSize);
        let sizeh = random(0,maxSize);
        let sizeIncr = random(0,2);
        let distIncr = random(0,3);

        let resize = false;
        let decideSize = random(0,10);
        if(decideSize > 8)
            resize = true;

        let move = false;
        let decideMove = random(0,10);
        if(decideMove > 8)
            move = true;

        let stroke = false;
        let decideStroke = random(0,10);
        if(decideStroke > 5)
            stroke = true;

        let rotateIncr = (Math.PI * 2) / random(0,5);
        let i;
        for(i = 0; i < allocatedFrames; i++) {
            let x, y, w, h;
            if(decideMove) {
                x = distx + (distIncr * i);
                y = disty + (distIncr * i);
            }
            if(decideSize) {
                w = sizew + (sizeIncr * i);
                h = sizeh + (sizeIncr * i);
            }
            if(stroke) {
                c.strokeStyle = randomColor(false);
                c.lineWidth = random(0,5);
                c.strokeRect(x,y,w,h);
            } else {
                c.fillRect(x,y,w,h);
            }
            if(i % 20 == 0) {
                c.translate(random(0,10), random(0,10));
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
        c.lineWidth = random(0,10);
        let size = random(2,10);
        let circles = random(50,300);
        let rotateIncr = ((Math.PI) / 360) * circles;
        let heightIncr = random(0,10);
        let sizeIncr = random(0,2);

        let i;
        for(i = 0; i < circles; i++) {
            c.beginPath();
            let x,y,r,b,e,n;
            x = sizeIncr * i;
            y = heightIncr * i;
            r = size;
            b = 0;
            e = Math.PI * 2;
            n = false;
            c.arc(x,y,r,b,e,n);
            c.rotate(rotateIncr);
            c.stroke();
            c.closePath();
        }
        c.restore();
    }
})();