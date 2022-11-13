<script>
import HeroText from "./hero-text.svelte";
import TitleContainer from "./title-container.svelte";
</script>

<div class="hero-bg">
    <div class="hero-bg-cover"></div>
    <TitleContainer />
    <HeroText />
</div>

<style>
.hero-bg{
    height: 100vh;
    width: 100%; 
    background-image: url("/hero-bg.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.hero-bg-cover{
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    backdrop-filter: blur(1rem);
    z-index: 0;
}
</style>
