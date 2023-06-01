let box = document.querySelector(".draggable");


box.addEventListener('touchmove', (e) => {
    //Gets movement in px of the touch movement
    let touchLocation = e.targetTouches[0];
    //Gets element data
    currentElement = e.target;
    //Gets element id
    currentElementId = currentElement.id;

    //Moves element
    box.style.left = touchLocation.pageX + 'px';
    box.style.top = touchLocation.pageY + 'px';
})



box.addEventListener('touchend', (e) => {
    //Picks up the id of the dragged element
    console.log(currentElementId)

    //Picks up the new element position
    let x = parseInt(box.style.left);
    let y = parseInt(box.style.top);

})