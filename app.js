'use strict'

const buttonSwitch = document.getElementById('switch')

const buttonAuto = document.getElementById('auto-switch')

buttonSwitch.addEventListener('click', switchImage)

buttonAuto.addEventListener('click', autoSwitch)

function autoSwitch() {
    const images = ["chimpanze", "bono", "gorila", "mico", "orangotango"]
    const randomIndex = Math.floor(Math.random() * images.length)
    document.documentElement.style.setProperty('--bg-image', `url(./img/${images[randomIndex]}.jpg)`)
}

function switchImage() {
    const image = document.getElementById('image-name').value

    document.documentElement.style.setProperty('--bg-image', `url(./img/${image}.jpg)`)
}