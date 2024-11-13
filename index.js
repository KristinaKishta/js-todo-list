let firstMessage = ""

for (let user of users) {
       let name = user.name
       let id = user.id
       let city = user.address.city
       
       firstMessage += `Id: ${id}, Name: ${name} City: ${city}\n\n`
}

alert(firstMessage)

let userId = Number(prompt('What is your id?'))
let theUser = null

for (let user of users) {
    if (user.id === userId) {
     theUser = user
     break   
    }
}

let theTodos = []

for (let todo of todos) {
    if (todo.userId === userId) {
       theTodos.push(todo) 
    }
}

let finalMessage = ''

finalMessage += `Hello ${theUser.username}:\n\n`

for (let todo of theTodos) {
    finalMessage += `- ${todo.title}\n`
}

alert(finalMessage)