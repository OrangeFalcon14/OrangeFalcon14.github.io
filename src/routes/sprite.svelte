<div class="sprite" style="--order: 0"></div>
<div class="sprite" style="--order: 1"></div>
<div class="sprite" style="--order: 2"></div>
<div class="sprite" style="--order: 3"></div>
<div class="sprite" style="--order: 4"></div>
<div class="sprite" style="--order: 5"></div>
<div class="sprite" style="--order: 6"></div>
<div class="sprite" style="--order: 7"></div>
<div class="sprite" style="--order: 8"></div>
<div class="sprite" style="--order: 9"></div>
<style>
.sprite{
    height: 50px;
    width: 50px;
    background: #0000ff;
    position: absolute;
    top: -100%;
    left: calc(var(--order) * 10%);
    animation: sprite-animation 1s linear;
}
@keyframes sprite-animation{
    0%{
        top: 0%;
        rotate: 0deg;
        filter: hue-rotate(0deg);
    }
    100%{
        top: 100%;
        rotate: 360deg;
        filter: hue-rotate(360deg);
    }
}
</style>
