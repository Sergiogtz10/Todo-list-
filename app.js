
const list = [];
const newtask = document.querySelector("#newtask")
newtask.addEventListener("keypress", (event) => {
    if(event.code === "Enter"){
        list.push(event.target.value);
        console.log(list)
        render()
        event.target.value="";
    }

});

function render(){
const todolist = document.querySelector("#todo-list" );
let todos ="";
list.forEach((element, index) => {
    todos += `<li class="list-group-item mx-auto">${element}<button onclick="functdelete(${index})" type="button" class="btn btn-light float-end"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
  </svg></button></li>`
});
todolist.innerHTML = todos

}

const functdelete  =  (index) => {
    list.splice(index,1);  
    render() 
}
window.onload = render()