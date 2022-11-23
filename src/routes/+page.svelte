<script>
import DownChevrons from "./about/down-chevrons.svelte";
import HeroText from "./about/hero-text.svelte";
import TitleContainer from "./about/title-container.svelte";
import Projects from "./projects/projects.svelte";
</script>

<div class="hero-bg">
    <div class="hero-bg-cover"></div>
    <TitleContainer />
    <HeroText />
    <DownChevrons />
</div>
<Projects />

<style>
.hero-bg{
    height: 120vh;
    width: 100%; 
    background-image: url("/hero-bg.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.hero-bg-cover{
    height: 120vh;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    backdrop-filter: blur(1rem);
    z-index: 0;
}
</style>
