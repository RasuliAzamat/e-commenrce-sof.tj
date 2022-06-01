let modal = null

setInterval(() => {
  modal = document.querySelector('.modal')
  if (modal) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
})
