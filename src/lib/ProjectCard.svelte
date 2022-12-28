<script>
export let name;
export let description;
export let gitHubLink = "";
export let playLink = "";

const isAsteroids = name === "Asteroids";
</script>

<div class="project-card">
    <img src={`/images/${name.toLowerCase()}.png`} class:quicknotes={name === "QuickNotes"} alt={name} />
    <header>{name}</header>
    <p>{description}</p>
    <a href={!isAsteroids ? gitHubLink : "#"} target="_blank" rel="noreferrer" class:inactive={name === "Asteroids"}><i class="fa-brands fa-github"></i> {name}</a>
    {#if name === "Asteroids"}
        <a href={playLink} target="_blank" rel="noreferrer" style="margin-left: 0.75rem;"><i class="fa-solid fa-play"></i> Play</a>
    {/if}
</div>

<style>
.project-card{
    display: inline-block;
    min-width: 25rem;
    width: 25rem;
    border-radius: 1rem;
    background: var(--color2);
    position: relative;
    padding: 1.5rem 2rem;
    box-shadow: -2rem 0 3rem #000;
    transition: 0.2s ease;
}
.project-card img{
    width: 100%;
    aspect-ratio: 16 / 9;
    /* border-radius: 1rem; */
}
/* .project-card .quicknotes{
    height: 100%;
    /* aspect-ratio: 16 / 9; */
    /* border-radius: 1rem; */
/* } */
.project-card header{
    font-size: 2.5rem;
    font-family: SpaceMono;
}
.project-card p{
    font-family: Quicksand;
}
.project-card a {
    text-decoration: none;
    font-family: Quicksand;
    color: #86a3f4;
}
.project-card a.inactive{
    cursor:not-allowed;
    color: grey;
}
</style>
