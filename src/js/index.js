const closeModalBtn = document.querySelectorAll('.closeModal')
const openModal = document.querySelectorAll('.openModal')
const modalItems = document.querySelectorAll('.popup__item')
const MODAL_BG = document.querySelector('.popup__bg')

// Открытие/закрытие модальных окон
function closeModal() {
    MODAL_BG.classList.remove('active')
    modalItems.forEach((item) => {
        item.classList.remove('active')
    })
}

closeModalBtn.forEach((item) => {
    item.addEventListener('click', () => {
        closeModal()
    })
})

const submit = document.querySelectorAll('.submit')

openModal.forEach((item) => {
    item.addEventListener('click', () => {
        modalItems.forEach((modals) => {
            let popup = modals.classList.contains(item.getAttribute('data-popup'))

            if (popup) {
                MODAL_BG.classList.add('active')
                modals.classList.add('active')
                if (item.getAttribute('data-popup') === 'popup__item-3') {
                    setDataOne()
                } else {
                    setDataTwo()
                }
            }
        })
    })
})

function setDataOne() {
    submit.forEach((item) => {
        item.addEventListener('click', () => {
            console.log('Send Data')
        })
    })
}

function setDataTwo() {
    submit.forEach((item) => {
        item.addEventListener('click', () => {
            console.log('Not Send')
        })
    })
}

const LANG_BLOCK = document.querySelector('.lang-block__select')
const LANG_SELECT = document.querySelectorAll('.lang-select')

LANG_BLOCK.addEventListener('click', (event) => {
    let element = event.target
    if (element.classList.contains('lang-select')) {
        LANG_SELECT.forEach((item) => {
            item.classList.remove('active')
        })
    }
    element.classList.add('active')
})
