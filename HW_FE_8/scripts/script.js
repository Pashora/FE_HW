//# 1 Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.

// const div = document.createElement('div')
// div.classList.add('numbers');
// const body = document.body;
// body.appendChild(div)
// const numbers = [100, 90, 80, 70, 60, 50]
// for(let i = 100; i >= 50; i-= 10) {


// const pElem = document.createElement("p") 
// div.append(pElem)
// }

//# 2 Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом strings_container. Строки взять произвольные.

// const div = document.createElement('div');
// div.classList.add('string_container');
// const body = document.body;
// body.appendChild(div)
// const strings = ['JavaScript', 'is', 'one', 'of', 'the', 'most', 'popular', 'programming', 'languages']
// for (let i = 0; i < strings.length; i++) {
//   const pElem = document.createElement("p") 
//   pElem.innerText = strings[i] 
//   div.append(pElem)
// }


// # 3 Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом users_container.

const div = document.createElement('div')
div.classList.add('users_container');
const body = document.body;
body.appendChild(div)


const personalInfo = [{
    first_name: 'Jhon',
    second_name: 'Harris',
    age: 25
},
{
    first_name: 'Bradley',
    second_name: 'Chandler',
    age:40
},
{
    first_name: 'Olha',
    second_name: 'Bonn',
    age: 15
},
{
    first_name: 'Anna',
    second_name: 'Fox',
    age:45
},
{
    first_name: 'Djenny',
    second_name: 'Miller',
    age:30
},
{
    first_name: 'Larry',
    second_nama: 'Smith',
    age: 15
},
{
    first_name: 'Miguel',
    second_name: 'Dennis',
    age: 23
},
]
for (i = 0; i < personalInfo.length; i++) {
    const imgElem = document.createElement("img");
    const {
        first_name,
        second_name,
        age
    } = personalInfo[i]
    imgElem.innerText = ( `"${ first_name } ${ second_name } ${ age }"`)
    if (age > 18) {
        console.log(personalInfo[i])
        div.append(imgElem)

    }

}

