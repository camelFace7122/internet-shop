const required = (text) => (value) => {
    if (value) return undefined;
    return text;
}

export const requiredEmail = required('Пожалуйста, введите вашу электронную почту');
export const requiredPassword = required('Пожалуйста, введите ваш пароль к учетной записи')