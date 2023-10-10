document.addEventListener('mousemove', function(e){
    document.querySelectorAll('.par').forEach(currentItem =>{
        let speed=currentItem.getAttribute('data-speed')
        currentItem.style.transform=`translate(${e.clientX*speed/1500}px,${e.clientY*speed/1500}px)`
    })
})