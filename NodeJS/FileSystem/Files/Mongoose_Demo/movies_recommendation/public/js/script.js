// console.log("inside script")

const searchInput=document.getElementById("searchinput")

searchInput.addEventListener("keyup",()=>{
    let searchText= searchinput.value;
    console.log(searchText);
})