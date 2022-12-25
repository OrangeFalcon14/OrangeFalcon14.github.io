<script>
import SidebarButton from "./SidebarButton.svelte";
</script>

<div id="sidebar">
    <SidebarButton image={"https://avatars.githubusercontent.com/u/108143702?s=35&v=4"}/>
    <hr>
    <SidebarButton icon={"fa-solid fa-house"} on:click={() => document.querySelector("#home").scrollIntoView({behavior: "smooth"})}/>
    <SidebarButton icon={"fa-solid fa-code"}/>
    <hr>
    <SidebarButton icon={"fa-brands fa-github"} on:click={() => window.open("https://github.com/OrangeFalcon14/")}/>
</div>

<style>
#sidebar{
    width: fit-content;
    height: 100%;
    overflow: hidden;
    left: 0rem;
    top: 0rem;
    background: var(--color1);
    position: fixed;
    /* margin: 0.75rem; */
    /* border-radius: 1rem; */
}
hr{
    width: 60%;
}
</style>
