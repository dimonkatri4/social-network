export const required = (value) => {
    if (!value) return "Is area required!"
    return undefined
}

export const maxLength = (length) => (value) => {
    if (value.length > length) return `Maximum ${length} symbol`
    return undefined
}