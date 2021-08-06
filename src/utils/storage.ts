export const getAuthUser = (key: string) => {
    let user = localStorage.getItem(key)
    if (user){
        user = JSON.parse(user)
        return user;
    }
    return {};
}

export const setAuthUser = (key: string, user: Object) => {
    localStorage.setItem(key, JSON.stringify(user))
}

export const deleteAuthUser = () => {
    localStorage.clear()
}