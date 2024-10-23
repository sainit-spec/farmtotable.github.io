document.addEventListener('DOMContentLoaded', function () {
    // Your JavaScript code here


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Capture form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display a success message
    const responseDiv = document.getElementById('formResponse');
    responseDiv.innerHTML = `<p>Thank you, ${name}! Your message has been sent.</p>`;

    // Clear the form
    this.reset();
});
document.getElementById('start-quiz').addEventListener('click', function () {
    const questions = [
        { question: "What is organic farming?", options: ["Farming without chemicals", "Using chemicals", "Genetically modified crops"], answer: "Farming without chemicals" },
        { question: "What is crop rotation?", options: ["Growing the same crop each year", "Changing the crop grown in a field each season", "Planting multiple crops"], answer: "Changing the crop grown in a field each season" }
    ];

    const questionsDiv = document.getElementById('questions');
    questionsDiv.innerHTML = ''; // Clear previous questions

    questions.forEach((q, index) => {
        const questionHTML = `
            <p>${index + 1}. ${q.question}</p>
            <ul>
                ${q.options.map(option => `<li><label><input type="radio" name="question${index}" value="${option}"> ${option}</label></li>`).join('')}
            </ul>
        `;
        questionsDiv.innerHTML += questionHTML;
    });

    document.getElementById('quiz-container').style.display = 'block';
});

document.getElementById('submit-quiz').addEventListener('click', function () {
    const questions = [
        { answer: "Farming without chemicals" },
        { answer: "Changing the crop grown in a field each season" }
    ];

    let score = 0;

    questions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="question${index}"]:checked`);
        if (selected && selected.value === q.answer) {
            score++;
        }
    });

    alert(`You scored ${score} out of ${questions.length}`);
});
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
});

