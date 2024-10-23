document.addEventListener('DOMContentLoaded', function () {
    // Handle Question Submission
    document.getElementById('submit-question').addEventListener('click', function () {
        const questionInput = document.getElementById('question-input');
        const questionText = questionInput.value;

        if (questionText.trim()) {
            const questionList = document.getElementById('questions-list');
            const questionItem = document.createElement('li');
            questionItem.textContent = questionText;
            questionList.appendChild(questionItem);
            questionInput.value = ''; // Clear the input
        } else {
            alert('Please enter a question.');
        }
    });

    // Handle Resource Sharing
    document.getElementById('submit-resource').addEventListener('click', function () {
        const resourceInput = document.getElementById('resource-input');
        const resourceText = resourceInput.value;

        if (resourceText.trim()) {
            const resourceList = document.getElementById('resources-list');
            const resourceItem = document.createElement('li');
            resourceItem.textContent = resourceText;
            resourceList.appendChild(resourceItem);
            resourceInput.value = ''; // Clear the input
        } else {
            alert('Please enter a resource to share.');
        }
    });

    // Handle Poll Voting
    document.getElementById('submit-poll').addEventListener('click', function () {
        const selectedPoll = document.querySelector('input[name="poll"]:checked');

        if (selectedPoll) {
            const resultText = `You voted for: ${selectedPoll.value}`;
            document.getElementById('poll-result').textContent = resultText;
            document.getElementById('poll-result').style.display = 'block';
        } else {
            alert('Please select an option to vote.');
        }
    });
});
