const form = document.querySelector('.signup form'),
    continueBtn = form.querySelector('.button input');

form.onsubmit = (e) => {
    e.preventDefault(); // preventing form from submitting
}

continueBtn.onclick = () => {
    let xhr = new XMLHttpRequest(); // creating XML object
    xhr.open("POST", "php/signup.php", true);
    xhr.onload = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                let data = xhr.response;
                console.log(data);
            }
        }
    }
    xhr.send();
}