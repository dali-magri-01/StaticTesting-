// Handle form submission for Ad-hoc Review
document.getElementById('ad-hoc-review-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    let feedback = document.getElementById('ad-hoc-feedback').value.trim();

    if (feedback === '') {
        alert('Please provide your feedback.');
    } else {
        document.getElementById('ad-hoc-response').innerText = 'Thank you for your feedback!';
        document.getElementById('ad-hoc-feedback').value = ''; // Clear the textarea
        document.getElementById('show-answer-btn-ad-hoc').style.display = 'block'; // Show the "Show Correct Answer" button
    }
});

// Handle showing the correct answer for Ad-hoc Review
document.getElementById('show-answer-btn-ad-hoc')?.addEventListener('click', function() {
    document.getElementById('correct-answer-ad-hoc').style.display = 'block'; // Show the correct answer
    this.style.display = 'none'; // Hide the "Show Correct Answer" button
});

// Handle form submission for Checklist-based Review
document.getElementById('checklist-review-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    let checklistItems = document.querySelectorAll('input[name="checklist"]:checked');

    if (checklistItems.length === 0) {
        alert('Please select at least one checklist item.');
    } else {
        document.getElementById('checklist-response').innerText = `You selected ${checklistItems.length} checklist items. Thank you for completing the review!`;
        document.getElementById('show-answer-btn-checklist').style.display = 'block'; // Show the "Show Correct Answer" button
    }
});

// Handle showing the correct answer for Checklist-based Review
document.getElementById('show-answer-btn-checklist')?.addEventListener('click', function() {
    document.getElementById('correct-answer-checklist').style.display = 'block'; // Show the correct answer
    this.style.display = 'none'; // Hide the "Show Correct Answer" button
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
        document.getElementById('show-answer-btn-scenario').style.display = 'block'; // Show the "Show Correct Answer" button
    }
});

// Handle showing the correct answer for Scenario-based Review
document.getElementById('show-answer-btn-scenario')?.addEventListener('click', function() {
    document.getElementById('correct-answer-scenario').style.display = 'block'; // Show the correct answer
    this.style.display = 'none'; // Hide the "Show Correct Answer" button
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
        document.getElementById('show-answer-btn-role').style.display = 'block'; // Show the "Show Correct Answer" button
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
        document.getElementById('show-answer-btn-role').style.display = 'block'; // Show the "Show Correct Answer" button
    }
});

// Handle showing the correct answer for Role-based Review based on selected role
document.getElementById('show-answer-btn-role')?.addEventListener('click', function() {
    let role = document.getElementById('role').value;
    let answerText;

    switch (role) {
        case 'Security Analyst':
            answerText = 'The code should not log sensitive information such as credit card numbers. Instead, it should handle this data securely and ensure that no sensitive information is exposed in the logs.';
            break;
        case 'Developer':
            answerText = 'The code should be optimized for better error handling. It currently lacks validation checks to ensure the card number is in the correct format.';
            break;
        case 'Tester':
            answerText = 'The code should be tested for edge cases, such as invalid card numbers, very large amounts, or unsupported card types.';
            break;
        default:
            answerText = 'Please select a role to see the correct answer.';
    }

    document.getElementById('role-specific-answer').innerText = answerText;
    document.getElementById('correct-answer-role').style.display = 'block'; // Show the correct answer
    this.style.display = 'none'; // Hide the "Show Correct Answer" button
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
        document.getElementById('show-answer-btn-perspective').style.display = 'block'; // Show the "Show Correct Answer" button
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
        document.getElementById('show-answer-btn-perspective').style.display = 'block'; // Show the "Show Correct Answer" button
    }
});

// Handle showing the correct answer for Perspective-based Review based on selected perspective
document.getElementById('show-answer-btn-perspective')?.addEventListener('click', function() {
    let perspective = document.getElementById('perspective').value;
    let answerText;

    switch (perspective) {
        case 'Performance':
            answerText = 'The code uses nested loops, which can be optimized for better performance. Consider using more efficient data processing techniques to reduce time complexity.';
            break;
        case 'Usability':
            answerText = 'The code is functional, but it could be made more user-friendly by providing clear error messages if the data is not in the expected format.';
            break;
        case 'Security':
            answerText = 'The code should ensure that data being processed is sanitized to avoid potential security vulnerabilities, such as injection attacks.';
            break;
        default:
            answerText = 'Please select a perspective to see the correct answer.';
    }

    document.getElementById('perspective-specific-answer').innerText = answerText;
    document.getElementById('correct-answer-perspective').style.display = 'block'; // Show the correct answer
    this.style.display = 'none'; // Hide the "Show Correct Answer" button
});
