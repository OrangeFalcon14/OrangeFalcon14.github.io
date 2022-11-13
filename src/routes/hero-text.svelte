<div class="hero-text">
    <img src="/hero-text.png" alt=""/>
    <img src="/hero-output.png" alt=""/>
</div>

<style>
.hero-text {
    width: 100%;
    position: absolute;
    top: 68%;
    left: 50%;
    translate: -50% -50%;
    z-index: 2;
    padding: 4rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    overflow: hidden;
}

@media (max-width: 1000px) {
    .hero-text {
        height: 80%;
        grid-template-columns: 1fr; 
    }
}

@media (max-width: 500px) {
    .hero-text {
        grid-template-columns: 1fr;
        padding: 0 10px;
        gap: 10px;
    }

    .hero-text img:first-child{
        content: url("/hero-text-m.png");
    }
    .hero-text img:nth-child(2){
        content: url("/hero-output-m.png");
    }
}


.hero-text img{
    width: 100%;
    filter: drop-shadow(10px 10px 1rem);
    transition: all 0.2s;
}

.hero-text img:hover{
    filter: drop-shadow(10px 10px 2rem);
}
</style>
