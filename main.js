// Active Buttons function
function handleActiveButton(buttonId) {
    if (!buttonId.classList.contains("active")) {
        document.querySelectorAll(".buttons button")
        .forEach((btn) => btn.classList.remove("active"))
        buttonId.classList.add("active")
    }
}

// Add Image function 
function HandleAddImage() {
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

