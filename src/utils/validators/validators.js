export const required = (value) => {
    if (!value) return "Is area required!"
    return undefined
}

export const maxLength = (length) => (value) => {
    if (value.length > length) return `Must be maximum ${length} symbol!`
    return undefined
}
export const minLength = (length) => (value) => {
    if (value.length < length) return `Must be minimum ${length} symbol!`
    return undefined
}
export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined

export const composeValidators = (...validators) => (value) =>
    validators.reduce((error, validator) => error || validator(value), undefined);