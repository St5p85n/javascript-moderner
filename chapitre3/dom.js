import { newLineTable,reload,saveProduct } from "./modules.js"
const mondiv = document.querySelector("#mondiv")
const h1 = document.createElement("h1")
const para = document.createElement("p")

//h1.textContent="Contenu depuis Js"
//h1.classList.add("textRg")
//para.textContent="Nouveau paragraphe"
//mondiv.append(h1,para)
//mondiv.innerHTML="<h1>Bonjour</h1>"
//console.log(mondiv)

const etat = {
    produits: reload(),
    recherche:""
}
const render = ()=>{
    
    document.querySelector("#maTable").innerHTML= etat
                                                 .produits
                                                 .map(newLineTable)
                                                 .join("")
}
const btnA = document.querySelector("#btnA")
btnA.addEventListener("click",(event)=>{
    event.preventDefault()
    const formProd = document.querySelector("#formProd")
    const {nom,prix,categorie} = Object.fromEntries(new FormData(formProd))
    const produit = {nom:nom,prix:prix,categorie:categorie}
    const donnees = reload()
    produit.id = donnees.length+1
    donnees.push(produit)
    saveProduct(donnees)
    // const nom = document.querySelector("#nom").value
   //document.querySelector("#maTable").innerHTML+=
   // newLineTable(1,nom,prix,categorie)

    document.querySelector("#nom").value=""
    document.querySelector("#prix").value=0
    document.querySelector("#categorie").value=""

    etat.produits= reload()
    render()
})

const rechercher = document.querySelector("#rechercher")
rechercher.addEventListener("input",(event)=>{
   const value = event.target.value.toLowerCase()
   etat.produits= reload().filter(p=> p.nom.toLowerCase().includes(value))
    render()
})
render()