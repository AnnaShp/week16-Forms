"use strict";

// Создание переменных для работы
let form = document.querySelector('form');
let btn = document.querySelector('.btn_submit');
let gender = form.elements["user_gender"];
let confirmation = document.getElementById('confirmation');
let passwords = document.querySelectorAll('user_password');

// Находим все поля с классом field
let fields = form.querySelectorAll('.field');
let error = document.querySelector('.error');

form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    removeError();
    checkFields();
    checkRadio();
    checkPass();
    checkCheckBox();
});

// Функция вывода ошибки на экран
function checkError(text) {
    // Создание span для каждой ошибки
    let errorMessage = document.createElement('span');
    errorMessage.className = 'error_message';
    errorMessage.textContent = text;

    return errorMessage;
};

// Функция проверки полей на заполненность
function checkFields() {
    for (let i = 0; i < fields.length; i++) {
        let field = fields[i];
        // Если поле пустое
        if (!fields[i].value) {
            // Выводим названия пустых полей на экран
            let errorMessage = checkError(`Поле "${fields[i].placeholder}" не заполнено.`);
            error.append(errorMessage);
            // Поля с ошибками подчеркиваем красным
            field.style.borderBottomColor = 'red';
        }
        // Если поле заполнено выводим инфо в консоль
        else {
            console.log(fields[i].name + ': ', fields[i].value);
            field.style.borderBottomColor = 'green';
        }
    }
}

// Функция перебора данных радиокнопки/гендер и вывод итога в консоль или ошибки на экран
function checkRadio() {
    let sex;
    for (sex of gender) {
        gender[sex] = sex;
    };

    if (sex.checked) {
        console.log(`gender: ${sex.value}`);

    } else {
        let errorMessage = checkError(`Пол не указан. Выберите пол`);
        error.append(errorMessage);
    }
}

// Функция проверки наличия галки/подтверждения у checkbox
function checkCheckBox() {
    if (!confirmation.checked) {
        let errorMessage = checkError(`Подтвердите согласие на обработку персональных данных`);
        error.append(errorMessage);
    } else {
        console.log(`confirmation: yes`);
    }
}

// Очистка поля с ошибками
function removeError() {
    // Определение места для вывода ошибок
    let errors = document.querySelectorAll('.error_message');

    // Захатываем поля с ошибками и очищаем их
    for (let error of errors) {
        error.remove();
    }
}

// Функция проверки паролей на заполнение
function checkPass() {
    if (form.user_password1.value != '') {
        if (form.user_password1.value.length < 8) {
            let errorMessage = checkError('Пароль должен состоять минимум из 8 символов.');
            error.append(errorMessage);
            return false;
        }
        let re = /[0-9]/;
        if (!re.test(form.user_password1.value)) {
            let errorMessage = checkError('Пароль должен содержать как минимум 1 число (0-9).');
            error.append(errorMessage);
            return false;
        }
        re = /[a-z]/;
        if (!re.test(form.user_password1.value)) {
            let errorMessage = checkError('Пароль должен содержать как минимум 1 букву в нижнем регистре[a-z].');
            error.append(errorMessage);
            return false;
        }
        re = /[A-Z]/;
        if (!re.test(form.user_password1.value)) {
            let errorMessage = checkError('Пароль должен содержать как минимум 1 заглавную букву[A-Z].');
            error.append(errorMessage);
            return false;
        }

    }

    else if (form.user_password2.value != '') {
        if (form.user_password2.value.length < 8) {
            let errorMessage = checkError('Пароль должен состоять минимум из 8 символов.');
            error.append(errorMessage);
            return false;
        }
        let re = /[0-9]/;
        if (!re.test(form.user_password2.value)) {
            let errorMessage = checkError('Пароль должен содержать как минимум 1 число (0-9).');
            error.append(errorMessage);
            return false;
        }
        re = /[a-z]/;
        if (!re.test(form.user_password2.value)) {
            let errorMessage = checkError('Пароль должен содержать как минимум 1 букву в нижнем регистре[a-z].');
            error.append(errorMessage);
            return false;
        }
        re = /[A-Z]/;
        if (!re.test(form.user_password2.value)) {
            let errorMessage = checkError('Пароль должен содержать как минимум 1 заглавную букву[A-Z].');
            error.append(errorMessage);
            return false;
        }

    }

    else if (form.user_password1.value != form.user_password2.value) {
        let errorMessage = checkError('Пароли не совпадают');
        error.append(errorMessage);
    }
}







