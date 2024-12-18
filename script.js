function checkAnswers() {
    const correctAnswers = {
        q1: "a",
        q2: "b",
        q3: "c",
        q4: ["a"],
        q5: "b",
        q6: ["a", "b"],
        q7: "a",
        q8: "a",
        q9: "a",
        q10: "a"
    };

    const form = document.getElementById("quizForm");
    const resultDiv = document.getElementById("result");
    let score = 0;
    let totalQuestions = Object.keys(correctAnswers).length;

    Object.keys(correctAnswers).forEach(question => {
        const userAnswers = Array.from(form[question])
            .filter(input => input.checked)
            .map(input => input.value);

        const correct = Array.isArray(correctAnswers[question])
            ? correctAnswers[question].every(answer => userAnswers.includes(answer)) &&
              correctAnswers[question].length === userAnswers.length
            : correctAnswers[question] === userAnswers[0];

        if (correct) {
            score++;
        }
    });

    const percentage = Math.round((score / totalQuestions) * 100);
    let gif = "";

    if (percentage === 100) {
        gif = "https://media.giphy.com/media/3o6ZsYm5Yu3h5Li3oA/giphy.gif";
    } else if (percentage >= 50) {
        gif = "https://media.giphy.com/media/l1J9ur3de6lQnrQDK/giphy.gif";
    } else {
        gif = "https://media.giphy.com/media/3o7abldj0b3rxrZUxW/giphy.gif";
    }

    resultDiv.innerHTML = `
        <p>Osvojili ste ${score} od ${totalQuestions} bodova (${percentage}%).</p>
        <img src="${gif}" alt="Rezultat" style="max-width: 300px;">
    `;
}