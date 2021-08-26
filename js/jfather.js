function displayPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => showPhotos(data))
}
function showPhotos(data) {
    const ul = document.getElementById('photos');
    for (const photo of data) {
        console.log(photo);
        const li = document.createElement('li');
        li.innerText = `title: ${photo.title} url: ${photo.url}`
        ul.appendChild(li);
    }
}