document.addEventListener('DOMContentLoaded', function () {
    const answers = document.querySelectorAll('.answer');
    const expandBtns = document.querySelectorAll('.expand');

    expandBtns.forEach((button, index) => {
        button.addEventListener('click', () => {
            answers.forEach((answer, answerIndex) => {
                if (index === answerIndex) {
                    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
                } else {
                    answer.style.display = 'none';
                }
            });
        });
    });
});