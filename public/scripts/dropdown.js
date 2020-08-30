// This will show or hide the account settings when user clicks on arrow-down at the top right...



(function () {
    const caretDownDiv = document.getElementById('caret-down-div')
    const accountDropDown = document.getElementById('account-drop-down');
    const caretDown = document.getElementById('caret-down');
    const overlay = document.getElementById("overlay");
    let show = false;

    function handleOverlayClick() {
        toggleDropDown()
        overlay.removeEventListener('click', handleOverlayClick)
    }

    function toggleDropDown() {
        show = !show
        accountDropDown.classList.toggle('show')
        caretDown.classList.toggle('green')
        caretDown.classList.toggle('rotate')
        caretDownDiv.classList.toggle('bg-light-green')
        overlay.classList.toggle("show-overlay")
    }

    caretDownDiv.addEventListener('click', () => {
        toggleDropDown();
        if (show) {
            overlay.addEventListener('click', handleOverlayClick)
        } else {
            overlay.removeEventListener('click', handleOverlayClick)
        }
    })
})();



// VERSION 1
// (function () {
//     const caretDownDiv = document.getElementById('caret-down-div')
//     const accountDropDown = document.getElementById('account-drop-down');
//     const caretDown = document.getElementById('caret-down');
//     let show = true;
//     caretDownDiv.addEventListener('click', () => {
//         if (show) {
//             caretDown.classList.add('green')
//             caretDown.classList.remove('white')
//             caretDown.classList.add('rotate')

//             caretDownDiv.classList.add('bg-light-green')
//             caretDownDiv.classList.remove('bg-green')

//             accountDropDown.classList.add('show')
//         } else {
//             caretDown.classList.add('white')
//             caretDown.classList.remove('green')
//             caretDown.classList.remove('rotate')

//             caretDownDiv.classList.remove('bg-light-green')
//             caretDownDiv.classList.add('bg-green')

//             accountDropDown.classList.remove('show')
//         }
//         show = !show
//     })
// })();





(function () {
    const trips = document.getElementById("trips")
    const front = document.getElementById("front")
    const back = document.getElementById("back")

    trips.addEventListener("click", () => {
        trips.classList.toggle("flip")
        front.classList.toggle("opacity")
        back.classList.toggle("opacity")

    })
})()