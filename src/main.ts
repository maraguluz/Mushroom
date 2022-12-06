import './style.css'

let button = document.getElementById('button') as HTMLButtonElement
let image = document.getElementById('image') as HTMLImageElement

const apiUrl =
  'https://api.nasa.gov/planetary/apod?api_key=ysKFxVTNsi8xY6enhZwXdyKCIiUvdpu2L3InXPry'

button.addEventListener('click', () => {
  fetch(apiUrl, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result)
      image.src = result.url
    })
    .catch((err) => console.log(err))
})
//getting error image is null
