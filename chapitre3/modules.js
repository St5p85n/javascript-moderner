const CLE_LOCAL = "gestishop.msk"
//    localStorage.setItem("gestishop.msk",JSON.stringify(produit))

export const newLineTable = ({id,nom,prix,categorie})=>{
    return `
            <tr>
                <td>${id}</td>
                <td>${nom}</td>
                <td>${prix}</td>
                <td>${categorie}</td>
            </tr>
        `
}

export const reload = ()=>{
    try {
        return JSON.parse(localStorage.getItem(CLE_LOCAL)) ?? [];
    } catch (error) {
        console.log(error.message)
        return [];
    }
}
export const saveProduct = (donnee)=>{
    localStorage.setItem(CLE_LOCAL,JSON.stringify(donnee))
}