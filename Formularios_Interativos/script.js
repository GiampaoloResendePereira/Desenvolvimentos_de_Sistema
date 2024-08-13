document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Validação de todos os campos
    validateField('firstName', 'firstNameError', 'O primeiro nome é obrigatório.');
    validateField('lastName', 'lastNameError', 'O sobrenome é obrigatório.');
    validateField('email', 'emailError', 'O email é obrigatório e deve ser válido.');
    validateField('password', 'passwordError', 'A senha é obrigatória.');
    validateField('phone', 'phoneError', 'O telefone é obrigatório.');
    validateField('education', 'educationError', 'Selecione uma opção de formação.');
    validateRadioButtons('horario', 'horarioError', 'Selecione um horário.');

    // Checa se há algum erro visível antes de submeter o formulário
    if (document.querySelectorAll('.error:empty').length === 7) {
        alert('Formulário enviado com sucesso!');
        this.submit();
    }
});

function validateField(fieldId, errorId, errorMessage) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(errorId);

    if (field.value.trim() === '') {
        errorElement.textContent = errorMessage;
    } else {
        errorElement.textContent = '';
    }
}

function validateRadioButtons(name, errorId, errorMessage) {
    const radioButtons = document.getElementsByName(name);
    const errorElement = document.getElementById(errorId);
    let isChecked = false;

    for (const radio of radioButtons) {
        if (radio.checked) {
            isChecked = true;
            break;
        }
    }

    if (!isChecked) {
        errorElement.textContent = errorMessage;
    } else {
        errorElement.textContent = '';
    }
}
