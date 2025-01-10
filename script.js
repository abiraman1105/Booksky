var delete_btn=document.querySelector(".delete-btn")
function del_btn(event){
    event.target.parentElement.remove()
}

var add_btn=document.querySelector(".add-btn")
var popup_layout=document.getElementById("popup_layout")
var popup_box=document.getElementById("popup_box")

add_btn.addEventListener("click",function(){
    popup_layout.style.display="block"
    popup_box.style.display="block"
})


var container=document.querySelector(".container")
var title=document.getElementById("title")
var author=document.getElementById("author")
var description=document.getElementById("description")
var sec_btn=document.querySelector(".sec-add-btn")
var cancel_btn=document.querySelector(".cancel-btn")

sec_btn.addEventListener("click",function(){
    var book_item=document.createElement("book_item")
    book_item.setAttribute("class",".book-item")
    book_item.innerHTML=`<div class="book-item">
            <h2>${title.value}</h2>
            <h3>${author.value}</h3>
            <h5>${description.value}</h5>
            <button class="delete-btn" onclick="del_btn(event)">Delete</button>
            </div>`
    container.append(book_item)
    popup_layout.style.display="none"
    popup_box.style.display="none"

})

cancel_btn.addEventListener("click",function(){
    popup_layout.style.display="none"
    popup_box.style.display="none"
})