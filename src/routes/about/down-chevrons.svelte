<div class="arrow-container">
    <div class="arrow" style="--order: 1"></div>
    <div class="arrow" style="--order: 2"></div>
    <div class="arrow" style="--order: 3"></div>
</div>
<style>
.arrow-container{
    position: absolute;
    bottom: 1rem;
    left: 50%;
    translate: -50%;
    display: grid;
}
.arrow{
    height: 1rem;
    width: 1rem;
    border: solid #ddd;
    border-width: 0 5px 5px 0;
    display: inline-block;
    padding: 3px;
    margin-bottom: 5px;
    rotate: 45deg;
    animation: down 1s infinite;
    position:relative;
}

@keyframes down{
    0%{
        top: 1rem;
    }
    50%{
        top: 0;
    }
    100%{
        top: 1rem;
    }
}

</style>
