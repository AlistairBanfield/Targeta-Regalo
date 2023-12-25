function showSecondPopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('second-popup-overlay').classList.remove('hidden');
}

function closeSecondPopup() {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('second-popup-overlay').classList.add('hidden');
}
