const showBtn = document.getElementById('show-btn')
const closeBtn = document.getElementById('close-btn')
const form = document.getElementById('cards')
const cardsList = document.getElementById('cards-list')


showBtn.addEventListener('click', () => {
    cards.classList.remove('hidden') 
    closeBtn.addEventListener('click', () => {
        cards.classList.add('hidden')
    })
})



const users = [];

form.addEventListener('submit', (event)=> {
    event.preventDefault();
    const imageVal = form.image.value;
    const nameVal = form.name.value;
    const telVal = form.tel.value;
    const ageVal = form.age.value;
    const genderVal = form.gender.value;

    users.push({
        id: new Date().toLocaleString(),
        image: imageVal,
        name: nameVal,
        tel: telVal,
        age: ageVal,
        gender: genderVal,
    })

    updateUI(users);

})



function updateUI(users){
    const template = document.createDocumentFragment()
    cardsList.innerHTML = ""
    users.forEach(user => {
        const li = elementCreator("li" , "site-item");
        const itemImg = elementCreator("img" , "item-image")
        const itemName = elementCreator("h3" , "item-name")
        const itemNumber = elementCreator("h3" , "item-number")
        const itemAge = elementCreator("h3" , "item-age")
        const itemGender = elementCreator("h3" , "item-gender")

        itemImg.setAttribute("src",  user.image)
        itemImg.setAttribute("alt" , "url xato  kiritildi")
        itemName.textContent = "Name: " + user.name;
        itemNumber.textContent = "Tel: " + user.tel;
        itemAge.textContent = "Age: " + user.age;
        itemGender.textContent = "Gender: " + user.gender;
        li.appendChild(itemImg)
        li.appendChild(itemName)
        li.appendChild(itemNumber)
        li.appendChild(itemAge)
        li.appendChild(itemGender)
        template.appendChild(li)
    });
    cardsList.appendChild(template)
} 

function elementCreator(elementName , elementClass){
    const element = document.createElement(elementName)
    element.classList.add(elementClass)
    return element
}