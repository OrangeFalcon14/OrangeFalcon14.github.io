<script>
import ProjectCard from "./project-card.svelte";
</script>

<div class="projects-container">
    <br>
    <br>
    <header>Projects</header>
    <h3>Web Development</h3>
    <div class="card-container">
        <ProjectCard title="Nexion" description="An online desktop environment inspired by GNOME <br> <br>" githubLink="https://github.com/OrangeFalcon14/Nexion"/>
        <ProjectCard title="Code Editor" description="A HTML editor made with HTML, CSS and JS <br> <br>" githubLink="https://github.com/OrangeFalcon14/CodeEditor"/>
        <ProjectCard title="Asteroids" description="An Atari Asteroids clone <br> <br> <br>"/>
    </div>
    <h3>Python</h3>
    <div class="card-container">
        <ProjectCard title="QuickNotes" description="A simple Sticky Notes substitutes made with GTK and Python <br> <br>" githubLink="https://github.com/OrangeFalcon14/QuickNotes"/>
        <ProjectCard title="Tabs" description="A multi-tabbed text editor made with GTK and Python  <br> <br>" githubLink="https://github.com/OrangeFalcon14/Tabs"/>
    </div>
</div>

<style>
.projects-container{
    position: absolute;
    top: calc(100vh + 130px);
    background: #242a39;
    padding: 0.5rem 10rem;
    color: #ddd;
}
header{
    text-align: center;
    font-size: 3rem;
    font-family: play;
}
h3{
    font-size: 2rem;
}
.card-container{
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: center;
}
@media (max-width: 1000px){
    .projects-container{
        padding: 0.5rem 1rem;
    }
}
</style>
