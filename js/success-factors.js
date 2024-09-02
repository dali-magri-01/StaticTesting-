// success-factors.js

document.getElementById('success-checklist-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let selectedItems = document.querySelectorAll('input[name="checklist"]:checked');

    if (selectedItems.length === 0) {
        document.getElementById('success-checklist-response').innerText = 'Please select at least one success factor.';
    } else {
        document.getElementById('success-checklist-response').innerText = `You selected ${selectedItems.length} success factors. Well done!`;
    }
});
