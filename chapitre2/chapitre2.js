import * as mod from "./myModules.js";

//mod.afficheTable2([23,55,61])
//console.log(mod.etudiant)
const tableau = [23,45,12]
const som = tableau.reduce((s,e) => s+e,0)
console.log(som)
const produits=[
    {libelle:"Ordi",prix:5000,stock:2},
    {libelle:"Iphone 17",prix:500000,stock:0},
    {libelle:"MacBook",prix:10000,stock:3}
]
const total = produits.reduce((s,e)=>s + e.prix*e.stock,0)
console.log(total)
const ventes = [
    {mois:"Fevrier", montant:50000},
    {mois:"Mars", montant:100000},
    {mois:"Avril",montant:80000}
]


//const dataChart = ventes.map(e => ({label:e.mois,value:e.montant}))
//console.log(dataChart)
//const libPrix = produits.map(e => ({name:e.libelle,prixU:e.prix}))
//console.log(libPrix)
//const dispo = produits.filter(e => e.stock>0)
//console.log(dispo)
//filter
//const tPaire = tableau.filter(e => e%3==0)
//console.log(tPaire)