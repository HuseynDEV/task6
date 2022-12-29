let images=document.querySelectorAll('.images img')
let imageContent=document.querySelector('.contentImg')


images.forEach(item=>{
    item.addEventListener('click', (e)=>{
        imageContent.src=e.target.src
    })
})