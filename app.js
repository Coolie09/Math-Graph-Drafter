"use strict";
let max = 200; 
let start = -100;
let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d")

canvas.height= window.innerHeight;
canvas.width = window.innerWidth;

function resize() {
    canvas.height= window.innerHeight;
    canvas.width = window.innerWidth;
}

function drawGraph() {
    ctx.strokeStyle= "red"
    ctx.beginPath();
    ctx.moveTo(0, window.innerHeight/2);
    ctx.lineTo(window.innerWidth, window.innerHeight/2)
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(window.innerWidth/2,0);
    ctx.lineTo(window.innerWidth/2, window.innerHeight)
    ctx.stroke()
}

function getValues(x) {
    return Math.sin(x)*20;
}

function drawFunction() {
    ctx.beginPath();
    ctx.moveTo(window.innerWidth/2, window.innerHeight/2)
    ctx.lineCap = "round";
    for (let i = start; i <= max; i++) { 
        i -= 0.9;
        let yValue = getValues(i);
        ctx.lineTo((window.innerWidth/2)+i*20,(window.innerHeight/2)-yValue);
        if (i%2 == 0) {
            ctx.lineWidth = 2;
            ctx.font = '10px Verdana';
            ctx.textAlign='center';
            ctx.textBaseline='middle';
            ctx.fillText((i*20).toString(),i*20,(window.innerHeight/2));
        }
        ctx.stroke()
    }
}

function labelGraph() {
    for (let i = window.innerWidth/10; i > 0; i--) { 
        fillText('20',x,y)
    }
}

window.addEventListener("load", e => { 
    drawGraph();
    drawFunction();
})

window.addEventListener("resize", resize)
