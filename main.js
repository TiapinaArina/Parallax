document.addEventListener('mousemove', function(e){
    document.querySelectorAll('.par').forEach(currentItem =>{
        let speed=currentItem.getAttribute('data-speed')
        currentItem.style.transform=`translateX(${e.clientX*speed/1500}px)`
    })
})