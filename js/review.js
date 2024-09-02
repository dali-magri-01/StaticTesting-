// Function to count words in a string
function countWords(str) {
    return str.trim().split(/\s+/).filter(word => word.length > 0).length;
}

// Handle form submissions and showing correct answers
document.addEventListener('DOMContentLoaded', function () {

    // Handle form submission for Informal Review
    document.getElementById('review-form')?.addEventListener('submit', function (event) {
        event.preventDefault();
        let feedback = document.getElementById('feedback').value.trim();

        if (countWords(feedback) < 3) {
            alert('Please provide a more detailed review (at least 3 words).');
        } else {
            document.getElementById('response').innerText = 'Thank you for your feedback!';
            document.getElementById('feedback').value = ''; // Clear the textarea
            document.getElementById('show-answer-btn-review').style.display = 'block'; // Show the "Show Correct Answer" button
        }
    });

    // Handle showing the correct answer for Informal Review
    document.getElementById('show-answer-btn-review')?.addEventListener('click', function () {
        document.getElementById('correct-answer-review').style.display = 'block'; // Show the correct answer
        this.style.display = 'none'; // Hide the "Show Correct Answer" button
    });

    // Handle form submission for Walkthrough
    document.getElementById('walkthrough-form')?.addEventListener('submit', function (event) {
        event.preventDefault();
        let comments = document.getElementById('comments').value.trim();

        if (countWords(comments) < 3) {
            alert('Please provide more detailed comments (at least 3 words).');
        } else {
            document.getElementById('walkthrough-response').innerText = 'Thank you for your comments!';
            document.getElementById('comments').value = ''; // Clear the textarea
            document.getElementById('show-answer-btn-walkthrough').style.display = 'block'; // Show the "Show Correct Answer" button
        }
    });

    // Handle showing the correct answer for Walkthrough
    document.getElementById('show-answer-btn-walkthrough')?.addEventListener('click', function () {
        document.getElementById('correct-answer-walkthrough').style.display = 'block'; // Show the correct answer
        this.style.display = 'none'; // Hide the "Show Correct Answer" button
    });

    // Handle form submission for Technical Review
    document.getElementById('technical-review-form')?.addEventListener('submit', function (event) {
        event.preventDefault();
        let checklistItems = document.querySelectorAll('input[name="checklist"]:checked');

        if (checklistItems.length === 0) {
            alert('Please select at least one checklist item.');
        } else {
            document.getElementById('technical-review-response').innerText = 'Thank you for completing the checklist!';
            document.getElementById('show-answer-btn-technical').style.display = 'block'; // Show the "Show Correct Answer" button
        }
    });

    // Handle showing the correct answer for Technical Review
    document.getElementById('show-answer-btn-technical')?.addEventListener('click', function () {
        document.getElementById('correct-answer-technical').style.display = 'block'; // Show the correct answer
        this.style.display = 'none'; // Hide the "Show Correct Answer" button
    });

    // Handle form submission for Inspection
    document.getElementById('inspection-form')?.addEventListener('submit', function (event) {
        event.preventDefault();
        let findings = document.getElementById('findings').value.trim();

        if (countWords(findings) < 3) {
            alert('Please provide more detailed findings (at least 3 words).');
        } else {
            document.getElementById('inspection-response').innerText = `Thank you for your findings!`;
            document.getElementById('show-answer-btn-inspection').style.display = 'block'; // Show the "Show Correct Answer" button
        }
    });

    // Handle showing the correct answer for Inspection
    document.getElementById('show-answer-btn-inspection')?.addEventListener('click', function () {
        document.getElementById('correct-answer-inspection').style.display = 'block'; // Show the correct answer
        this.style.display = 'none'; // Hide the "Show Correct Answer" button
    });

});
