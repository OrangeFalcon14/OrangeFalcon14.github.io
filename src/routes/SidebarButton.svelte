<script>
export let icon = "";
export let image = "";
</script>

<button on:click>
    {#if icon !== ""}
        <i class={icon}></i>
    {:else if image !== ""}    
        <img src={image} alt="Github Avatar" />
    {/if}
</button>

<style>
button{
    background: var(--color1);
    color: #fff;
    border: none;
    padding: 1rem 1.5rem;
    font-size: 1.25rem;
    display: block;
}
button:first-of-type{
    padding: 1rem 1.2rem
}
button img{
    border-radius: 50%;
    transition: 0.2s;
}
button i {
    filter: brightness(75%);
    transition: 0.2s;
}
button:hover i{
    filter: brightness(120) drop-shadow(0 0 1rem #eee);
}
button:hover img{
    filter: drop-shadow(0 0 1rem #eee);
}
button:active i{
    filter: drop-shadow(0 0 0.75rem #eee);
}
button:active img{
    filter: drop-shadow(0 0 1rem #eee);
}
</style>
