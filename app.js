
// const colors = [ "Orange", "Red", "Yellow", "Blue" ]

// const [a, ...c, d] = colors

// console.log(a,c,d);

// const studentData = { name: "Raju", age: 10, city: "Banglore" }

// const { name, age, city } = studentData

// console.log( name, age, city );

// function collect(...a) {
//     console.log(a);
// }

// collect(10, 20, 30, 40)

// function display(name, age) {
//     console.log(name, age);
// }

// display(...{ name: "Raju", age: 10 })

// const studentData = {
//     name: "Raju",
//     age: 10,
//     displayDetails: function () {
//         // console.log(this.name);
//         // console.log(this.age);
//         console.log(this);
//     }
// }

// studentData.displayDetails()

// 

// const student1 = {
//     name: "Raju",
//     age: 10,
//     city: "Banglore",
//     displayData: function () {
//         console.log(this.name, this.age, this.city);
//     }
// }

// const student2 = {
//     name: "John",
//     age: 11,
//     city: "Mumbai",
//     displayData: function () {
//         console.log(this.name, this.age, this.city);
//     }
// }

// const student3 = {
//     name: "Mary",
//     age: 12,
//     city: "Delhi",
//     displayData: function () {
//         console.log(this.name, this.age, this.city);
//     }
// }

// student1.displayData()
// student2.displayData()
// student3.displayData()

// function Student(a, b, c) {
//     this.name = a
//     this.age = b
//     this.city = c
// }



// const student1 = new Student("Raju", 10, "Banglore")
// const student2 = new Student("Mark", 9, "Mumbai")
// const student3 = new Student("Tim", 8, "Delhi")
// const student4 = new Student("Mantu", 7, "Telangana")

// console.log(student1);
// console.log(student2);
// console.log(student3);
// console.log(student4);

// student1.displayData()
// student2.displayData()
// student3.displayData()
// student4.displayData()

// console.log(student1 instanceof Object);

// class Student {
//     name
//     age
//     city
//     constructor(a, b, c) {
//         this.name = a
//         this.age = b
//         this.city = c
//         this.displayData = function () {
//             console.log(this.name, this.age, this.city);
//         }
//     }
// }

// const student1 = new Student("Raju", 10, "Banglore")
// const student2 = new Student("Kalia", 12, "Dholakpur")

// console.log(student1);
// console.log(student2);

// class BankAccount {
//     accountNo
//     accountHolderName
//     #accountHolderBalance

//     constructor(a, b, c) {
//         this.accountNo = a
//         this.accountHolderName = b
//         this.#accountHolderBalance = c
//     }

//     displayDetails() {
//         console.log(this.accountNo);
//         console.log(this.accountHolderName);
//         console.log(this.accountHolderBalance);
//     }

//     setAccountBalance(receivedBalance) {
//         if (receivedBalance > 0) {
//             this.#accountHolderBalance = receivedBalance
//         }
//     }

//     displayAccountBalance() {
//         console.log(this.#accountHolderBalance);
//     }
// }

// const b1 = new BankAccount(1111, "Mary", 10000)
// const enteredBalance = prompt("Please enter the balance to be updated: ")
// b1.setAccountBalance(enteredBalance)
// b1.displayAccountBalance()

// class Person {
//     name
//     age
//     city
//     gender

//     constructor(a, b, c, d) {
//         this.name = a
//         this.age = b
//         this.city = c
//         this.gender = d
//     }

//     displayPersonDetails() {
//         console.log(this.name, this.age, this.city, this.gender);
//     }
// }

// class Employee extends Person {
//     company
//     salary 

//     constructor(a, b, c, d, e, f) {
//         super(a, b, c, d)
//         this.company = e
//         this.salary = f
//     }

//     displayEmployeeDetails() {
//         super.displayPersonDetails()
//         console.log(this.company, this.salary);
//     }
// }

// const e1 = new Employee("Raju", 40, "Mumbai", "Male", "AJPL", 132000)

// e1.displayEmployeeDetails()

// const myButton = document.querySelector("button")
// const myContainer = document.querySelector(".container")
// const myH2 = document.createElement("h2")

// myButton.addEventListener("click", function () {
//     fetch("https://api.quotable.io/random").then(function (output) {
//         return output.json()
//     })
//         .then(function (result) {
//             let randomQuote = result.content


//             myH2.textContent = randomQuote
//             myContainer.append(myH2)
//         })
//         .catch(function (error) {
//             console.log(error);
//         })
// })

const myContainer = document.querySelector(".container")

fetch("https://fakestoreapi.com/products")
    .then(function (output) {
        return output.json()
    })
    .then(function (productsData) {
        const productsArr = []
        productsData.map(function (i) {
            const myImage = document.createElement("img")
            myImage.src = i.image

            const myH2 = document.createElement("h2")
            myH2.textContent = i.title

            const myPara = document.createElement("p")
            myPara.textContent = i.description

            const myH3 = document.createElement("h3")
            myH3.textContent = Math.floor(i.price * 84)

            const myDiv = document.createElement("div")
            myDiv.setAttribute("class", "products")

            const myButton = document.createElement("button")
            myButton.textContent = "ADD TO CART"

            myDiv.append(myImage)
            myDiv.append(myH2)
            myDiv.append(myPara)
            myDiv.append(myH3)
            myDiv.append(myButton)

            myContainer.append(myDiv)

            myButton.addEventListener("click", function () {
                const storeProducts = {
                    imageUrl: myImage.src,
                    title: myH2.textContent,
                    description: myPara.textContent,
                    price: myH3.textContent
                }

                productsArr.push(storeProducts)

                localStorage.setItem(i.id, JSON.stringify(productsArr))

                alert("Your Item Is Successfully Saved!")
            })
        })
    })
    .catch(function (error) {
        console.log(error);
    })



