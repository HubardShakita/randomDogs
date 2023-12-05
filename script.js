function fetchData() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                let responseData = JSON.parse(xhr.responseText);
                let imageUrl = responseData.url;
                let imageContainer = document.querySelector('.container');
                if (imageContainer.firstChild) {
                    imageContainer.removeChild(imageContainer.firstChild);
                }
                let image = document.createElement('img');
                image.src = imageUrl;
                imageContainer.appendChild(image);
            }
            else {
                alert('Произошла ошибка при получении данных');
            }
        }
    };

    xhr.open('GET', 'https://random.dog/woof.json', true);
    xhr.send();
}

fetchData();
