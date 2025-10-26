// Active Buttons function
function handleActiveButton(buttonId) {
    if (!buttonId.classList.contains("active")) {
        document.querySelectorAll(".buttons button")
        .forEach((btn) => btn.classList.remove("active"))
        buttonId.classList.add("active")
    }
}

// Add Image function 
function handleAddImage() {
    const input = document.getElementById("image-input")
    
    input.onchange = (event) => {
        const file = event.target.files[0]
        if (file) {
            const imageURL = URL.createObjectURL(file)
            const newImage = document.createElement("img")
            newImage.src = imageURL
            document.querySelector(".gallery-images").append(newImage)
        }

        input.value = "";
    }
    input.click()
}

// Left and right arrows functions
function handleArrows() {
    const rightArrow = document.getElementById("right-arrow");
    const leftArrow = document.getElementById("left-arrow");
    const gallery = document.querySelector(".gallery-images");


    let index = 0;
    const visibleCount = 3;
    const imageWidth = 211;
    
    function updateGallery() {
        gallery.style.transform = `translateX(-${index * imageWidth}px)`
    }

    rightArrow.addEventListener("click", () => {
        const total = gallery.children.length;
        console.log(total)
        if ( index < total - visibleCount ) {
            index++;
            updateGallery()
            console.log("...")
        } 
    })

    leftArrow.addEventListener('click', () => {
        const total = gallery.children.length;
        if (index > 0) {
            index--;
            updateGallery();
        }
    });

}
window.addEventListener("DOMContentLoaded", handleArrows);
