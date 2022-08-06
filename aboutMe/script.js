const popup = document.querySelector('.popup-wrapper')
const main = document.getElementById('main')
const img = document.querySelector('.cursor')

const popupOpen = () => {
    main.style.pointerEvents = 'none'
    popup.style.display = 'block'
    if (popup.style.display = 'block') return img.style.cursor = 'auto'
}

const popupClose = () => {
    if (popup.style.display = 'none') {
        img.style.cursor = 'pointer'
        
    } 
    main.style.pointerEvents = 'all'
    popup.style.display = 'none'
}