export const setUser = (name, data) => {
    localStorage.setItem(name, JSON.stringify(data))
}
export const getUser = (name) => {
    return localStorage.getItem(name)
}