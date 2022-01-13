let dropdownMenu = document.querySelector(".dropdown-menu")
let dropdownButton = document.querySelector(".dropdown-button")

dropdownButton.addEventListener("click", function(event) {
  if (this.active) {
    dropdownMenu.classList.remove("active")
  } else {
    dropdownMenu.classList.add("active")
  }

  this.active = !this.active
})

dropdownButton.active = false