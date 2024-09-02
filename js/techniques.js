// Handle form submission for Ad-hoc Review
document.getElementById('ad-hoc-review-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    let feedback = document.getElementById('ad-hoc-feedback').value.trim();

    if (feedback === '') {
        alert('Please provide your feedback.');
    } else {
        document.getElementById('ad-hoc-response').innerText = 'Thank you for your feedback!';
        document.getElementById('ad-hoc-feedback').value = ''; // Clear the textarea
    }
});

// Handle form submission for Checklist-based Review
document.getElementById('checklist-review-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    let checklistItems = document.querySelectorAll('input[name="checklist"]:checked');

    if (checklistItems.length === 0) {
        alert('Please select at least one checklist item.');
    } else {
        document.getElementById('checklist-response').innerText = `You selected ${checklistItems.length} checklist items. Thank you for completing the review!`;
    }
});

// Handle form submission for Scenario-based Review
document.getElementById('scenario-review-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    let feedback = document.getElementById('scenario-feedback').value.trim();

    if (feedback === '') {
        alert('Please provide your feedback.');
    } else {
        document.getElementById('scenario-response').innerText = 'Thank you for your scenario-based review!';
        document.getElementById('scenario-feedback').value = ''; // Clear the textarea
    }
});

// Handle form submission for Role-based Review
document.getElementById('role-review-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    let role = document.getElementById('role').value;
    let feedback = document.getElementById('role-feedback').value.trim();

    if (feedback === '') {
        alert('Please provide your feedback.');
    } else {
        document.getElementById('role-response').innerText = `Thank you, ${role}, for your review!`;
        document.getElementById('role-feedback').value = ''; // Clear the textarea
    }
});

// Handle form submission for Perspective-based Review
document.getElementById('perspective-review-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    let perspective = document.getElementById('perspective').value;
    let feedback = document.getElementById('perspective-feedback').value.trim();

    if (feedback === '') {
        alert('Please provide your feedback.');
    } else {
        document.getElementById('perspective-response').innerText = `Thank you for your ${perspective} review!`;
        document.getElementById('perspective-feedback').value = ''; // Clear the textarea
    }
});
