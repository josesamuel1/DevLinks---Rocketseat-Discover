function toggleMode() {
    // Comando para trocar entre light mode e dark mode
    const html = document.documentElement

    html.classList.toggle("light")
    /*
    - Esse comando vai verificar se 'toggle' existe dentro de uma lista das classes de 'html'. Caso haja algo igual ao que foi descrito, ele vai remover. Caso não haja, ele vai adicionar, dando a mesma ideia de um loop entre 'true' e 'false'.
    */

    // Comando para trocar a imagem
    const img = document.querySelector("#profile img")

    if (html.classList.contains("light")) {
        // Caso esteja no light mode
        img.setAttribute("src", "./assets/avatar-light.png")
        img.setAttribute("alt", "Esse sou eu!")
    } else {
        // Caso esteja no dark mode
        img.setAttribute("src", "./assets/avatar.png")
        img.setAttribute("alt", "Esse sou eu também!")
    }
}
