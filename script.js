const main = () => {
    editor = document.querySelector('#editor');
    preview = document.querySelector('#preview');
    preview.innerHTML = marked(editor.value);
}

const readTextURL = url => {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.send(null);
    request.onreadystatechange = () => {
        var type = request.getResponseHeader('Content-Type');
            if (type.indexOf("text") !== 1) {
                return request.responseText;
            }
    }
}

document.addEventListener('DOMContentLoaded', main);