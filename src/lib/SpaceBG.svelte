<script>
//@ts-nocheck

import { onMount } from "svelte";

export let SHOOT_LASERS = false;
const SHIP_SPEED = 100;
const LASER_SPEED = 1000;

const mouseCoordinates = {
    x: 0,
    y: 0,
}

onMount(() => {
    function drawShip(id, ctx, x, y, a, color = "white", fill = "white") {
        ctx.strokeStyle = "orange";
        ctx.fillStyle = "red";
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo( // rear left
            x - 15 * (2 / 3 * Math.cos(a) + 0.5 * Math.sin(a)),
            y + 15 * (2 / 3 * Math.sin(a) - 0.5 * Math.cos(a))
        );
        ctx.lineTo( // rear centre
            x - 15 * (6 / 3 * Math.cos(a)),
            y + 15 * (6 / 3 * Math.sin(a))
        );
        ctx.lineTo( // rear right
            x - 15 * (2 / 3 * Math.cos(a) - 0.5 * Math.sin(a)),
            y + 15 * (2 / 3 * Math.sin(a) + 0.5 * Math.cos(a))
        );
        ctx.closePath();
        ctx.fill()
        ctx.stroke();

        ctx.strokeStyle = color;
        ctx.fillStyle = fill;
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo( // nose of the ship
            x + 4 / 3 * 15 * Math.cos(a),
            y - 4 / 3 * 15 * Math.sin(a)

        );
        ctx.lineTo( // rear left
            x - 15 * (2 / 3 * Math.cos(a) + Math.sin(a)),
            y + 15 * (2 / 3 * Math.sin(a) - Math.cos(a))
        );
        ctx.lineTo( // rear right
            x - 15 * (2 / 3 * Math.cos(a) - Math.sin(a)),
            y + 15 * (2 / 3 * Math.sin(a) + Math.cos(a))
        );
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        for (let j = 0; j < ships[id].lasers.length; j++) {
            ctx.fillStyle = "lime";
            ctx.beginPath();
            ctx.arc(ships[id].lasers[j].x, ships[id].lasers[j].y, 4, 0, Math.PI * 2, false);
            ctx.fill();
        }
    }

    function addLaser() {
        ships.forEach(ship => {
            ship.lasers.push({
                x: ship.x + 4 / 3 * 15 * Math.cos(ship.angle),
                y: ship.y - 4 / 3 * 15 * Math.sin(ship.angle),
                xv: LASER_SPEED * Math.cos(ship.angle) / (1000 / 30),
                yv: -LASER_SPEED * Math.sin(ship.angle) / (1000 / 30),
            });
            for(let laser of ship.lasers){
                if(laser.x > canvas.width || laser.x < 0 || laser.y > canvas.height || laser.y < 0){
                    ship.lasers.splice(ship.lasers.indexOf(laser), 1);
                }
            }
        });
    }

    setInterval(() => {
        SHOOT_LASERS && addLaser()
    }, 1000);
    
    const canvas = document.querySelector("#bg");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "#00080f";
    ctx.fillRect(0, 0, canvas.innerWidth, canvas.innerHeight);


    const stars = [];
    for (let i = 0; i < 200; i++) {
        stars.push({
            x: Math.floor(Math.random() * canvas.width),
            y: Math.floor(Math.random() * canvas.height),
        })
        
    }

    const ships = [
        {
            id: 0,
            x: 300,
            y: canvas.height - 750,
            angle: 50 / 180 * Math.PI,
            lasers: []
        },
        {
            id: 1,
            x: 1400,
            y: 150,
            angle: 50 / 180 * Math.PI,
            lasers: []
        },
        {
            id: 2,
            x: 1300,
            y: canvas.height - 100,
            angle: 50 / 180 * Math.PI,
            lasers: []
        },
        {
            id: 3,
            x: 400,
            y: canvas.height - 130,
            angle: 50 / 180 * Math.PI,
            lasers: []
        },
    ];

    setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        stars.forEach(star => {
            ctx.fillStyle = "#606060";
            ctx.fillRect(star.x, star.y, 4, 4);
        });

        ships.forEach(ship => {
            if(distBetweenPoints(ship.x, ship.y, mouseCoordinates.x, mouseCoordinates.y) > 100){
                ship.x += SHIP_SPEED * Math.cos(ship.angle) / (1000 / 30);
                ship.y += -SHIP_SPEED * Math.sin(ship.angle) / (1000 / 30);
            }
            for (let i = 0; i < ship.lasers.length; i++) {
                ship.lasers[i].x += ship.lasers[i].xv;
                ship.lasers[i].y += ship.lasers[i].yv;
            }

            drawShip(ship.id, ctx, ship.x, ship.y, ship.angle, "#fff", "#00080f");
        })
        
    }, 30);
    
    document.querySelector("#home").addEventListener("mousemove", (event) => {
        ships.forEach(ship => {
            ship.angle = -angleToPoint(event.pageX, event.pageY, ship.x, ship.y) - Math.PI;
        })
        mouseCoordinates.x = event.pageX;
        mouseCoordinates.y = event.pageY;
    })

    window.onresize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
})

function angleToPoint(cx, cy, ex, ey) {
    const dx = ex - cx;
    const dy = ey - cy;

    return Math.atan2(dy, dx);
}


function distBetweenPoints(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}
</script>

<canvas id="bg"></canvas>

<style>
#bg{
    animation: bg 5s infinite;
}

@keyframes bg{
    0%{
        background: #00080f;
        /* background: linear-gradient(#00080f, #004177); */
    }
    50%{
        background: #000a12;
    }
    100%{
        background: #00080f;
    }
}
</style>
