document.addEventListener('DOMContentLoaded', function() {
    const readMoreButton = document.getElementById('read-more');
    const hiddenContent = document.querySelector('.section-biografia .hidden');
    const content = document.querySelector('.section-biografia .content');

    readMoreButton.addEventListener('click', function() {
        if (hiddenContent.style.display === 'none' || hiddenContent.style.display === '') {
            hiddenContent.style.display = 'block';
            content.classList.add('expanded');
            readMoreButton.textContent = 'Ver menos';
        } else {
            hiddenContent.style.display = 'none';
            content.classList.remove('expanded');
            readMoreButton.textContent = 'Leia mais';
        }
    });
});
