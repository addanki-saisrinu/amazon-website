//location modal start here
const LocationButtonModal = document.getElementById("locationModalButton");
const CloseButton = document.getElementById("modalCloseBtn");;
const locationModal = document.getElementById("locationModal");
LocationButtonModal.addEventListener("click", function () {
    locationModal.style.display = "block"
});

CloseButton.addEventListener("click", function () {
    locationModal.style.display = locationModal.style.display === "block" ? "none" : "block"
})
//location modal end here