<script>
import SidebarButton from "./SidebarButton.svelte";
</script>

<div id="sidebar">
    <div class="top">
        <SidebarButton image={"https://avatars.githubusercontent.com/u/108143702?s=35&v=4"}/>
        <hr>
        <SidebarButton icon={"fa-solid fa-house"} on:click={() => document.querySelector("#home").scrollIntoView({behavior: "smooth"})}/>
        <SidebarButton icon={"fa-solid fa-code"}/>
        <hr>
        <SidebarButton icon={"fa-brands fa-github"} on:click={() => window.open("https://github.com/OrangeFalcon14/")}/>
    </div>
    <div class="bottom">
        <SidebarButton icon={"fa-solid fa-heart"} style={"color: #ff3d5e; font-size: 30px"}/>
        <hr>
        <SidebarButton style={"padding: 0.5rem 1.2rem; font-size: 17px;"} icon={"devicon-vscode-plain"} title={"vscode"} />
        <SidebarButton style={"padding: 0.5rem 1.2rem; font-size: 17px;"} icon={"devicon-linux-plain"} title={"linux"} />
        <SidebarButton style={"padding: 0.5rem 1.2rem; font-size: 17px;"} icon={"devicon-svelte-plain"} title={"svelte"} />
        <SidebarButton style={"padding: 0.5rem 1.2rem; font-size: 17px;"} icon={"devicon-html5-plain"} title={"html"} />
        <SidebarButton style={"padding: 0.5rem 1.2rem; font-size: 17px;"} icon={"devicon-css3-plain"} title={"css"} />
        <SidebarButton style={"padding: 0.5rem 1.2rem; font-size: 17px;"} icon={"devicon-javascript-plain"} title={"javascript"} />
        <SidebarButton style={"padding: 0.5rem 1.2rem; font-size: 17px;"} icon={"devicon-python-plain"} title={"python"} />
    </div>
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
hr{
    width: 60%;
}
</style>
