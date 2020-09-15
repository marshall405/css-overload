// FLIP CARD ANIMATION
(function () {
    // grab all trips
    const trips = document.querySelectorAll('.trip')

    trips.forEach(trip => {
        trip.addEventListener('click', () => {
            trip.classList.toggle('flip')
            trip.children[0].classList.toggle('opacity')
            trip.children[1].classList.toggle('opacity')
            trip.children[1].classList.toggle('display-back')
        })
    })
})()

