function sayHello(name){
    console.log(`Bonjour ${name}`)
}
function somme(val1,val2){
    return val1+val2
}
function afficheTable(t){
    t.forEach(element => {
        console.log(element)
    });
}
const moyenneNote = (note1,note2) => (note1+note2)/2
const afficheTable2 = (tab) => {
    tab.forEach(element => {
        console.log(element)
    });
}
const etudiant = {id:1,name:"Masseka Academy"}

export {etudiant,afficheTable,afficheTable2,moyenneNote,sayHello}