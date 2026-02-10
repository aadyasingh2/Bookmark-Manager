let addButton=document.getElementById('adding')
let url=document.getElementById('url')
let nameButton=document.getElementById('name')
let display=document.getElementById('display')
addButton.addEventListener('click',function(){
    let name=nameButton.value
    let urlvalue=url.value
    if (name === '' || urlvalue === '') {
        alert('Please fill in both fields!')
    return
}
    let card=document.createElement('div')
    card.innerHTML=card.innerHTML = `
    <img src="https://www.google.com/s2/favicons?domain=${urlvalue}&sz=64">
    <p>${name}</p>
    <button class="visit">Visit</button>
    <button class="delete">Delete</button>`
    display.appendChild(card)
    card.querySelector('.visit').addEventListener('click',function(){
        window.open(urlvalue,'_blank')
    })
    card.querySelector('.delete').addEventListener('click',function(){
        card.remove()
    })
})

