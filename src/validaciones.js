export const esNombre = (value) => {
    return !/[A-Za-z\s\,]/.test(value);
}