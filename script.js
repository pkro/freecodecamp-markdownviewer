const main = () => {
    editor = document.querySelector('#editor');
    preview = document.querySelector('#preview');
    preview.innerHTML = marked(editor.value);
}

document.addEventListener('DOMContentLoaded', main);