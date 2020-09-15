(function () {

    const close = document.getElementById('closeModal')

    // show modal to add new post 
    const addNewButton = document.getElementById('addTrip')
    const modal = document.getElementById('addModal')
    addNewButton.addEventListener('click', () => {
        modal.classList.toggle('show-add-modal')
        close.classList.toggle("close-modal-rotate")
        setTimeout(() => {
            close.classList.add("close-opacity")
        }, 500)
    })

    // show the remaining characters for TextArea - starts with 3000
    const textarea = document.getElementById('tripTextarea')
    const textAreaLengthSpan = document.getElementById('textAreaLength')
    textarea.addEventListener('input', () => {
        textAreaLengthSpan.innerText = `${3000 - textarea.value.length} characters remaining`
    })

    // close modal if user doesnt want to create new post - nevermind
    const cancel = document.getElementById('cancelAdd')
    cancel.addEventListener('click', (e) => {
        e.preventDefault()
        modal.classList.toggle('show-add-modal')
        close.classList.toggle("close-modal-rotate")
        close.classList.remove("close-opacity")
    })

    // close modal when user clicks on X icon upper right corner

    close.addEventListener('click', () => {
        close.classList.toggle("close-modal-rotate")
        close.classList.remove("close-opacity")
        modal.classList.toggle('show-add-modal')


    })
})()