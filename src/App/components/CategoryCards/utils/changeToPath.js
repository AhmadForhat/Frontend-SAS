const changeToPath = (str) => {
    return str.toLocaleLowerCase().replace(' ', '-').normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

export default changeToPath