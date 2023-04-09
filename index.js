let tablinks= document.getElementsByClassName("tab-links")
let tabcontents= document.getElementsByClassName("tab-contents")

function opentab(tab) {
    let ele= document.getElementById(tab);

    for(let key of tablinks){
        key.classList.remove("active-link")
        // console.log(key);
    }
    for(let key of tabcontents){
        key.classList.remove("active-tab")
        // console.log(key);
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tab).classList.add("active-tab")
}


let hamburger= document.getElementById("hamb");
        let navmenu= document.querySelector(".list");

        hamburger.addEventListener("click",()=>{
            hamburger.classList.toggle("active")
            navmenu.classList.toggle("active")
        })
        // navmenu.addEventListener("click",()=>{
        //     hamburger.classList.toggle("active")
        //     navmenu.classList.toggle("active")
        // })

        let navitem= document.querySelector(".list-item")
        navitem.forEach(key => {
            key.addEventListener("click",()=>{
                hamburger.classList.remove("active")
                navmenu.classList.remove("active")
            })
        });
