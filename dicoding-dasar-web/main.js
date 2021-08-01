var modal = document.querySelector(".modal");
var modalImage = document.querySelector(".modalImage");
Array.from (document.querySelectorAll(".gambar")).forEach(img => {
    img.addEventListener('click', function(event) {
        modal.style.display = "block";
        modalImage.src = event.target.src;
    });
});

document.querySelector(".close").addEventListener("click", () => {
    modal.style.display = "none";
})
