<script>
import Sidebar from "./lib/Sidebar.svelte";
import ThreeJs from "./lib/ThreeJS.svelte";
import SpaceBG from "./lib/SpaceBG.svelte";
import ProjectCard from "./lib/ProjectCard.svelte";

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
<div id="projects">
    <h2>Projects</h2>
    <div id="projects-container">
        <ProjectCard name="Nexion" description="An online desktop inspired by GNOME made with Svelte" gitHubLink="https://github.com/OrangeFalcon14/Nexion" />
        <ProjectCard name="Code Editor" description="A HTML editor with preview made with HTML, CSS and JS" gitHubLink="https://github.com/OrangeFalcon14/CodeEditor" />
        <ProjectCard name="Asteroids" description="An Atari Asteroids clone made with HTML canvas" playLink="https://orangefalcon14.github.io/IT-Fair-Project/old_projects/Asteroids.html" />
        <ProjectCard name="Tabs" description="A multi-tabbed text editor made with GTK and Python" gitHubLink="https://github.com/OrangeFalcon14/Tabs" />
        <ProjectCard name="QuickNotes" description="A simple Sticky Notes substitutes made with GTK and Python" gitHubLink="https://github.com/OrangeFalcon14/QuickNotes" />
        <!-- <ProjectCard name="Nexion" description="An online desktop inspired by GNOME" gitHubLink="https://github.com/OrangeFalcon14/Nexion" />
        <ProjectCard name="Nexion" description="An online desktop inspired by GNOME" gitHubLink="https://github.com/OrangeFalcon14/Nexion" /> -->
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
h2{
    font-size: 3.5rem;
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

#projects{
    padding: 2rem 7rem;
    height: 100vh;
}
#projects-container{
    display: flex;
    flex-direction: row;
    overflow-x: auto;
}
</style>
