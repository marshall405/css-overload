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
        // caretDown.classList.toggle('white')
        caretDown.classList.toggle('rotate')
        // caretDownDiv.classList.toggle('bg-light-green')
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



