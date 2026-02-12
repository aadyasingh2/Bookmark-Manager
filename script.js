let bookmarks=  JSON.parse(localStorage.getItem('bookmark')) || []
let addButton=document.getElementById('my-button')
let url=document.getElementById('url')
let nameButton=document.getElementById('name')
let display=document.getElementById('display')
function BookmarkAddition(naming,urlvalue){
    let card=document.createElement('div')
    card.innerHTML=`<img src="https://www.google.com/s2/favicons?domain=${urlvalue}&sz=64">
                    <p>${naming}</p>
                    <button class="visit">Visit</button>
                    <button class="delete">Delete</button>`
    display.appendChild(card)
    bookmarks.push({'name':naming,'url':urlvalue})
    localStorage.setItem('bookmark',JSON.stringify(bookmarks))
    card.querySelector('.visit').addEventListener('click',function(){
        window.open(urlvalue,'_blank')
    })
    card.querySelector('.delete').addEventListener('click',function(){
        card.remove()
    })
}
addButton.addEventListener('click',function(){
    let name=nameButton.value
    let urlvalue=url.value
    if (name === '' || urlvalue === '') {
        alert('Please fill in both fields!')
        return
    }
    BookmarkAddition(name,urlvalue)
    }
)
bookmarks.forEach(element => {
    BookmarkAddition(element.name,element.url)
});
