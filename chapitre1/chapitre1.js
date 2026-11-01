//user(id,nom,login,password)
const user = {
    id:1,
    nom:"Zoux",
    login:"zx@gmail.com",
    password:"passer123",
    prenom:"Stephanos"
}
const {password,...userSvg} = user
console.log(userSvg)

const tab1 = [10,30,5]
const tab2 = [7,21,5]
const tab3 = [12,...tab1,...tab2,100]

//console.log(tab3)
//const etudiant1 = {id:1,nom:"Diop",email:"st@gmail.com"}
//const etudiant2 = {id:5,nom:"Diop",age:30}
//const etudiant3 = {...etudiant2,...etudiant1}
//console.log(etudiant3)

//const [un,deux,trois] = tab

//console.log(un)




//const login = user.login
//const password = user.password
//const {login:lg,password,prenom="Steph"} = user
//console.log(prenom)

//const ucopie = structuredClone(user)
//ucopie.login = "copi@gmail.com"
//console.log(user.login)
//console.log(ucopie.login)
//Destructuring