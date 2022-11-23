<script>
export let title;
export let description;
export let githubLink = "";
</script>

<div class="project-card">
    <header>{title}</header>
    <img src={`/projects/${title.toLocaleLowerCase()}.png`} alt={title} />
    <p class="project-description">{description}</p>
    <a href={githubLink}>{title}</a>
</div>
