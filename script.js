const main = () => {
    const editor = document.querySelector('#editor');
    const preview = document.querySelector('#preview');
    readTextURL('welcome.txt', updatePreview);
    
}

const updatePreview = (markdown) => {
    editor.innerText = markdown
    preview.innerHTML = marked(markdown);
}

const readTextURL = (url, callback) => {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.send(null);
    request.onreadystatechange = () => {
        var type = request.getResponseHeader('Content-Type');
            if (type.indexOf("text") !== 1) {
                markdown = request.responseText.replace("\n", '&#13;&#10;');
                callback(markdown);
            }
    }
}

document.addEventListener('DOMContentLoaded', main);