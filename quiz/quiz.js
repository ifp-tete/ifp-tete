// quiz.js
fetch('quiz/questions.json')
    .then(response => response.json())
    .then(data => {
        const quizContainer = document.getElementById('quiz');

        data.forEach((item, index) => {
            const block = document.createElement('div');
            block.className = 'question-block';

            const question = document.createElement('div');
            question.className = 'question';
            question.textContent = (index + 1) + '. ' + item.question;
            block.appendChild(question);

            const optionsDiv = document.createElement('div');
            optionsDiv.className = 'options';

            item.options.forEach((opt, i) => {
                const button = document.createElement('button');
                button.textContent = opt;
                button.onclick = () => {
                    if(i === item.answer) {
                        button.classList.add('correct');
                        alert('✔ Resposta correta!');
                    } else {
                        button.classList.add('wrong');
                        alert('❌ Resposta errada!');
                    }
                };
                optionsDiv.appendChild(button);
            });

            block.appendChild(optionsDiv);
            quizContainer.appendChild(block);
        });
    })
    .catch(error => console.error('Erro ao carregar perguntas:', error));
