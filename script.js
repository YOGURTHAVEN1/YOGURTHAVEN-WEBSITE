

//FAQ JAVASCRIPT//

document.getElementById('faq-button').addEventListener('click', function() {
    document.getElementById('faq-modal').style.display = 'block';
});

function closeModal() {
    document.getElementById('faq-modal').style.display = 'none';
}

// Close modal if user clicks outside of it
window.onclick = function(event) {
    var modal = document.getElementById('faq-modal');
    if (event.target == modal) {
        closeModal();
    }
}

