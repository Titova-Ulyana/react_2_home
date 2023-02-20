import React from "react";

const Authentication = () => {
    return (
<div>
<h2 class="text-center text-white bg-primary m-2">Аутентификация</h2>
    <div class="p-3">
        <form class="w-50 m-auto border p-3" style="min-width: 300px;">

            <div class="mb-3">
                <label for="email" class="form-label">Введите адрес электронной почты</label>
                <input type="email" class="form-control" id="email" required/>
                <div  class="form-text">Мы никогда не делимся Вашими e-mail ни с кем.</div>
            </div>

            <div class="mb-3">
                <label for="password" class="form-label">Введите пароль:</label>
                <input type="password" class="form-control" id="password" required/>
                <div  class="form-text">Не менее 7 символов, обязательно: 1 - цифра, 1 - строчная буква, 1 - заглавная буква</div>
            </div>

            <input type="submit" class="btn btn-primary" value="Войти"/>
        </form>
    </div>
</div>

    );
};

export default Authentication;