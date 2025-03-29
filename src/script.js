//location modal start here
const LocationButtonModal = document.getElementById("locationModalButton");
const CloseButton = document.getElementById("modalCloseBtn");;
const locationModal = document.getElementById("locationModal");
const UPDATELOCATIONAPPLYBUTTON = document.getElementById("updateLocationApplyButton");
LocationButtonModal.addEventListener("click", function () {
    locationModal.style.display = "block"
});




CloseButton.addEventListener("click", function () { //update location close button
    locationModal.style.display = locationModal.style.display === "block" ? "none" : "block"
});



UPDATELOCATIONAPPLYBUTTON.addEventListener("click", function () {   //update location apply button
    const LOCATIONNUMBER = document.getElementById("locationNumber").value.trim();
    let credentials = LOCATIONNUMBER.match(/524126/gi)    //location check here
    if (LOCATIONNUMBER) {
        if (credentials) {
            alert(`your location is added ${LOCATIONNUMBER}`)
        } else {
            alert("your location not correct")
        }
    } else {
        alert("enter your pincode")
    }
    document.getElementById("locationNumber").value = " ";
})

//location modal end here


const NAVSEARCHBAR = document.getElementById("navSearchBarButton");//intilize search bar
if(NAVSEARCHBAR){
    NAVSEARCHBAR.addEventListener("click", function () {
        const SEARCHBAR = document.getElementById("navSearchBar").value.trim();//intialize user take value and use trim method
        if (SEARCHBAR) { // check search bar true or not
            alert(`${SEARCHBAR}`)
        }
        document.getElementById("navSearchBar").value = " "; //after search user remove old value
    })
}

const  CATEGORIES = document.getElementById("categories");
if(CATEGORIES){
    CATEGORIES.addEventListener("click",function(){
        alert("sdkfjhekrhg")
    })
}