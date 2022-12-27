<script>
import Sidebar from "./lib/Sidebar.svelte";
import ThreeJs from "./lib/ThreeJS.svelte";
import SpaceBG from "./lib/SpaceBG.svelte";

let SHOOT_LASERS = false;
</script>

<SpaceBG bind:SHOOT_LASERS/>
<div id="home" on:dblclick={() => SHOOT_LASERS = !SHOOT_LASERS}>
    <Sidebar />
    <div id="abt-me">
        <h1>Hi! I am Vishnu.</h1>
        <p>A web developer who also knows Python</p>
    </div>
    <div id="three-js">
        <ThreeJs />
    </div>
</div>

<style>
#home{
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    color: #ddd;
    /* display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem; */
    display: flex;
}
#abt-me{
    display: flex;
    align-items: start;
    justify-content: flex-start;
    flex-direction: column;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    padding: 5rem 5rem 5rem 7rem;
    /* flex-direction: column; */
}
h1{
    font-size: 6.5rem;
    font-family: SpaceMono;
    font-weight: 100;
    margin: 1rem;
}
p{
    font-size: 1.5rem;
    font-family: Quicksand;
    font-weight: 600;
}

#three-js{
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
