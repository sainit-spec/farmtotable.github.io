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
