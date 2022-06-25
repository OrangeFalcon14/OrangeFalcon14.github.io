function toggle_theme(){
    if(document.body.classList.contains("light")){
        document.body.classList.replace("light", "dark");
        console.log(document.body.classList.contains("dark"));
        console.log(document.body.classList.contains("light"));
    }
    else if(document.body.classList.contains("dark")){
        document.body.classList.replace("dark", "light");
        console.log(document.body.classList.contains("light"));
        console.log(document.body.classList.contains("dark"));
    }
}
