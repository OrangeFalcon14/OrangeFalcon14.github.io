<script>
import Sprite from "./sprite.svelte";

let showAnimationFlag = false;
const showAnimation = () => {
    showAnimationFlag = true;
    setTimeout(() => {
        showAnimationFlag = false;
    }, 1 * 1000)
}

let jump = false;
let shrink = false;

const handleClick = (event) => {
    event.preventDefault();
    if(event.button == 1) jump = true;
    else if(event.button == 2) shrink = true;
}
</script>

<div class="title-container">
    <h1>OrangeFalcon14</h1>
    <img src="https://github.com/OrangeFalcon14/OrangeFalcon14/raw/main/GitHub%20Avatar.png" on:contextmenu={(event) => {event.preventDefault()}} class:shrink={shrink} class:jump-up={jump} class="github-avatar" alt="" on:dblclick={showAnimation} on:mousedown={handleClick} on:mouseup={() => {jump = false; shrink = false}}/>
    {#if showAnimationFlag}
        <Sprite />
    {/if}
</div>

<style>

.title-container{
    color: #ddd;
    position:absolute;
    font-size: 2rem;
    margin-top: 11%;
    left: 50%;
    translate: -50% -50%;
    text-align: center;
}
.title-container h1{
    margin-bottom: 10px;
}

@media (max-width: 500px) {
    .title-container {
        font-size: 1.5rem;
    }
}

.github-avatar{
    border-radius: 50%;
    margin-top: 1rem;
    height: 15rem;
    filter: drop-shadow(0 0 10px #000033);
    transition: filter 0.2s, rotate 0.4s ease-out;
}
.github-avatar:hover{
    filter: drop-shadow(0 0 40px #000033);
    rotate: 360deg;
}

@keyframes jump-up{
    0%{
        bottom: 0;
    }
    50%{
        bottom: 30px;
    }
    100%{
        bottom: 0;
    }
}

.jump-up{
    position: relative;
    animation: jump-up 0.2s linear;
}

/* @keyframes shrink{
    0%{
        scale: 1;
    }
    50%{
        scale: 0.25;
    }
    100%{
        scale: 1;
    }
} */

@keyframes shrink{
    0%{
        left: 2%;
        top: 4%;
    }
    10%{
        bottom: -2%;
        left: -4%;
    }
    20%{
        left: 2%;
        top: 4%;
    }
    30%{
        left: -2%;
        top: -4%;
    }
    40%{
        left: 2%;
        top: 4%;
    }
    50%{
        left: -2%;
        top: -4%;
    
    }
    60%{
        left: 2%;
        top: 4%;
    }
    70%{
        left: -2%;
        top: -4%;
    }
    80%{
        left: 2%;
        top: 4%;
    }
    90%{
        left: -2%;
        top: -4%;
    }
    100%{
        left: 0%;
        top: 0%;
    }
}

.shrink{
    position: relative;
    animation: shrink 1s linear;
}
</style>
