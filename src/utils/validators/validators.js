export const required = (value) => {
    if (value) return undefined;
    return 'Пожалуйста, напишите электронную почту'
}