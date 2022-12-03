<script>
export let title;
export let description;
export let githubLink = "";
</script>

<div class="project-card" class:python={title === "QuickNotes" || title === "Tabs"}>
    <img src={`/projects/${title.toLocaleLowerCase()}.png`} alt={title} />
    <div class="card-body">
        <header>{title}</header>
        <p class="project-description">{@html description}</p>
                
        <a target="blank" href={githubLink} class:inactive={githubLink === ""}>{title}</a>
        
        {#if title === "Asteroids"}
            <a target="blank" href="https://orangefalcon14.github.io/IT-Fair-Project/old_projects/Asteroids.html"><i class="fa fa-play" style="font-size: 13px; position: relative; bottom: 2px; display: inline; margin-left: 5px;"></i> Play</a>
        {/if}
    </div>
</div>

<style>
.project-card{
    /* min-width: ; */
    width: calc(25% - 2rem);;
    background: #39405b;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.card-body{
    padding: 1rem;
}
.project-card header{
    font-size: 2rem;
}
.project-card:not(.python) img{
    width: 100%;
    aspect-ratio: 16/9;
}
.python img{
    width: 100%;
}
a{
    color: #86a3f4;
    text-decoration: none;
    cursor: pointer;
}
a:not(.inactive)::after{
    content: "";
    /* display: block; */
    background: #86a3f4;
    width: 0;
    height: 2px;
}
a:not(.inactive):hover::after{
    width: 100%;
}
a.inactive{
    color: grey;
}
</style>
