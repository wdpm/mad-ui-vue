let rippleOnClick = function (event) {
  let ripple = document.createElement('div')
  ripple.classList.add('ripple')
  document.body.appendChild(ripple)

  ripple.style.top = event.pageY + 'px'
  ripple.style.left = event.pageX + 'px'

  setTimeout(function () {
    ripple.remove()
  }, 1000)
}

document.addEventListener('click', rippleOnClick)
