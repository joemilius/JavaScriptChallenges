const data = [
    {
        id: 1,
        name: 'Cameron Williamson',
        email: 'cameron.wiliamson@example.com',
        title: 'Software Developer'
    },
    {
        id: 2,
        name: 'Jenny Wilson',
        email: 'jenny.wilson@example.com',
        title: 'Project Manager'
    },
    {
        id: 3,
        name: 'Jane Cooper',
        email: 'jane.cooper@example.com',
        title: 'Marketing Coordinator'
    },
    {
        id: 4,
        name: 'Wade Warren',
        email: 'wade.warren@example.com',
        title: 'Software Tester'
    },
    {
        id: 5,
        name: 'Esther Howard',
        email: 'esther.howard@example.com',
        title: 'Web Designer'
    },
    {
        id: 6,
        name: 'Kristin Watson',
        email: 'kristin.watson@example.com',
        title: 'Marketing Coordinator'
    },
    {
        id: 7,
        name: 'Esther Howard',
        email: 'esther.howard@example.com',
        title: 'Web Designer'
    },
    {
        id: 8,
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        title: 'UI/UX Designer'
    },
    {
        id: 9,
        name: 'Ralph Edwards',
        email: 'ralph.edwards@example.com',
        title: 'Software Tester'
    },
    {
        id: 10,
        name: 'Courtney Henry',
        email: 'courtney.henry@example.com',
        title: 'Ethical Hacker'
    },
    {
        id: 11,
        name: 'Willie Jennings',
        email: 'willie.jennings@example.com',
        title: 'Team Leader'
    },
    {
        id: 12,
        name: 'Neveah Simmons',
        email: 'neveah.simmons@example.com',
        title: 'Team Leader'
    },
    {
        id: 13,
        name: 'Theresa Webb',
        email: 'theresa.webb@example.com',
        title: 'Software Tester'
    },
    {
        id: 14,
        name: 'Debbe Baker',
        email: 'debbe.baker@example.com',
        title: 'Software Developer'
    },
    {
        id: 15,
        name: 'Ronald Richards',
        email: 'ronald.richards@example.com',
        title: 'Software Developer'
    },
    {
        id: 16,
        name: 'Deanna Curtis',
        email: 'deanna.curtis@example.com',
        title: 'Scrum Master'
    },
    {
        id: 17,
        name: 'Felicia Reid',
        email: 'felicia.reed@example.com',
        title: 'Ethical Hacker'
    },
    {
        id: 18,
        name: 'Jessie Alexander',
        email: 'jessie.alexander@example.com',
        title: 'Project Manager'
    },
    {
        id: 19,
        name: 'Sam Smith',
        email: 'sam.smith@example.com',
        title: 'Ethical Hacker'
    },
    {
        id: 20,
        name: 'Eleanor Rigby',
        email: 'eleanor.rigby@example.com',
        title: 'UI/UX Designer'
    },
    {
        id: 21,
        name: 'Devon Lane',
        email: 'devon.lane@example.com',
        title: 'Team Leader'
    },
    {
        id: 22,
        name: 'Guy Hawkins',
        email: 'guy.hawkins@example.com',
        title: 'Team Leader'
    },
    {
        id: 23,
        name: 'Jim Parks',
        email: 'jim.parks@example.com',
        title: 'Ethical Hacker'
    },
    {
        id: 24,
        name: 'Susanne Ford',
        email: 'susanne.ford@example.com',
        title: 'Software Developer Manager'
    },
    {
        id: 25,
        name: 'Kathryn Murphy',
        email: 'kathryn.murphy@example.com',
        title: 'Project Manager'
    },
    {
        id: 26,
        name: 'Cody Fisher',
        email: 'cody.fisher@example.com',
        title: 'Software Developer'
    },
    {
        id: 27,
        name: 'Jane Cooper',
        email: 'jane.cooper@example.com',
        title: 'Software Tester'
    },
    {
        id: 28,
        name: 'Karen MacAfee',
        email: 'karen.macafee@example.com',
        title: 'UI/UX Designer'
    },
    {
        id: 29,
        name: 'Dianne Russell',
        email: 'dianne.russell@example.com',
        title: 'Ethical Hacker'
    },
    {
        id: 30,
        name: 'Bessie Cooper',
        email: 'bessie.cooper@example.com',
        title: 'Scrum Master'
    },
]

let index1 = 0
let index2 = 10
let renderData = data
let tableBody = document.querySelector('tbody')
let sortButtons = document.querySelectorAll('.sort')
let idAscendingSortButton = document.querySelectorAll('path.ascending')[0]
let nameAscendingSortButton = document.querySelectorAll('path.ascending')[1]
let emailAscendingSortButton = document.querySelectorAll('path.ascending')[2]
let titleAscendingSortButton = document.querySelectorAll('path.ascending')[3]
let idDescendingSortButton = document.querySelectorAll('path.descending')[0]
let nameDescendingSortButton = document.querySelectorAll('path.descending')[1]
let emailDescendingSortButton = document.querySelectorAll('path.descending')[2]
let titleDescendingSortButton = document.querySelectorAll('path.descending')[3]
let previousButton = document.querySelector('#previous')
let nextButton = document.querySelector('#next')
let currentPage = document.querySelector('#currentPage')
let pageValue = parseInt(currentPage.value)


function renderTable(){
    tableBody.innerHTML = ''
    let displayData = renderData.slice(index1, index2)
    console.log(displayData)
    displayData.forEach(employee => {
        let tr = document.createElement('tr')
        let tdId = document.createElement('td')
        let tdName = document.createElement('td')
        let tdEmail = document.createElement('td')
        let tdTitle = document.createElement('td')
        let tdButton = document.createElement('td')
        let nameInput = document.createElement('input')
        let emailInput = document.createElement('input')
        let titleInput = document.createElement('input')
        let updateButton = document.createElement('button')
        let editButton = document.createElement('button')
        let updateImg = document.createElement('img')
        let editImg = document.createElement('img')

        tdId.textContent = employee.id
        tdName.className = 'name'

        nameInput.setAttribute('type', 'text')
        nameInput.setAttribute('disabled', 'disabled')
        nameInput.setAttribute('name', `person-name-${employee.id}`)
        nameInput.setAttribute('value', `${employee.name}`)

        emailInput.setAttribute('type', 'text')
        emailInput.setAttribute('disabled', 'disabled')
        emailInput.setAttribute('name', `person-email-${employee.id}`)
        emailInput.setAttribute('value', `${employee.email}`)

        titleInput.setAttribute('type', 'text')
        titleInput.setAttribute('disabled', 'disabled')
        titleInput.setAttribute('name', `person-title-${employee.id}`)
        titleInput.setAttribute('value', `${employee.title}`)

        updateButton.className = 'update'
        updateButton.id = `personUpdate${employee.id}`
        updateButton.setAttribute('name', `person-update-${employee.id}`)

        editButton.className = 'edit'
        editButton.id = `personEdit${employee.id}`
        editButton.setAttribute('name', `person-edit-${employee.id}`)

        updateImg.src = "./images/update.svg"
        updateImg.className = "update"
        updateImg.alt = "Update"

        editImg.src = "./images/edit.svg"
        editImg.className = "edit"
        editImg.alt = "Edit"

        tableBody.append(tr)
        tr.append(tdId, tdName, tdEmail, tdTitle, tdButton)
        tdName.append(nameInput)
        tdEmail.append(emailInput)
        tdTitle.append(titleInput)
        tdButton.append(updateButton, editButton)
        updateButton.append(updateImg)
        editButton.append(editImg)

        tdButton.addEventListener('click', event => {
        
            if(tr.className === 'edit'){
                tr.className = ''
            }else{
                tr.className = 'edit'
                nameInput.removeAttribute('disabled')
                emailInput.removeAttribute('disabled')
                titleInput.removeAttribute('disabled')
            }
        })

    })
}
renderTable()

idAscendingSortButton.addEventListener('click', event => {
    let sortedData = data.sort((a, b) => a.id - b.id)
    renderData = sortedData
    renderTable()
    for(let i = 0; i < sortButtons.length; i++){
        sortButtons[i].className = 'sort'
    }
    event.target.parentNode.parentNode.classList.add('ascending')
})

idDescendingSortButton.addEventListener('click', event => {
    let sortedData = data.sort((a, b) => b.id - a.id)
    renderData = sortedData
    renderTable()
    for(let i = 0; i < sortButtons.length; i++){
        sortButtons[i].className = 'sort'
    }
    event.target.parentNode.parentNode.classList.add('descending')
})

nameAscendingSortButton.addEventListener('click', event => {
    let sortedData = data.sort((a, b) => {
        if(a.name.toLowerCase() > b.name.toLowerCase()){
            return 1
        }else if(a.name.toLowerCase() < b.name.toLowerCase()){
            return -1
        }else {
            return 0
        }
        })
    console.log(sortedData)
    renderData = sortedData
    renderTable()

    for(let i = 0; i < sortButtons.length; i++){
        sortButtons[i].className = 'sort'
    }
    event.target.parentNode.parentNode.classList.add('ascending')
})

nameDescendingSortButton.addEventListener('click', event => {
    let sortedData = data.sort((a, b) => {
        if(a.name.toLowerCase() > b.name.toLowerCase()){
            return -1
        }else if(a.name.toLowerCase() < b.name.toLowerCase()){
            return 1
        }else {
            return 0
        }
        })
    console.log(sortedData)
    renderData = sortedData
    renderTable()

    for(let i = 0; i < sortButtons.length; i++){
        sortButtons[i].className = 'sort'
    }
    event.target.parentNode.parentNode.classList.add('descending')
})

emailAscendingSortButton.addEventListener('click', event => {
    let sortedData = data.sort((a, b) => {
        if(a.email.toLowerCase() > b.email.toLowerCase()){
            return 1
        }else if(a.email.toLowerCase() < b.email.toLowerCase()){
            return -1
        }else {
            return 0
        }
        })
    console.log(sortedData)
    renderData = sortedData
    renderTable()

    for(let i = 0; i < sortButtons.length; i++){
        sortButtons[i].className = 'sort'
    }
    event.target.parentNode.parentNode.classList.add('ascending')
})

emailDescendingSortButton.addEventListener('click', event => {
    let sortedData = data.sort((a, b) => {
        if(a.email.toLowerCase() > b.email.toLowerCase()){
            return -1
        }else if(a.email.toLowerCase() < b.email.toLowerCase()){
            return 1
        }else {
            return 0
        }
        })
    console.log(sortedData)
    renderData = sortedData
    renderTable()

    for(let i = 0; i < sortButtons.length; i++){
        sortButtons[i].className = 'sort'
    }
    event.target.parentNode.parentNode.classList.add('descending')
})

titleAscendingSortButton.addEventListener('click', event => {
    let sortedData = data.sort((a, b) => {
        if(a.title.toLowerCase() > b.title.toLowerCase()){
            return 1
        }else if(a.title.toLowerCase() < b.title.toLowerCase()){
            return -1
        }else {
            return 0
        }
        })
    console.log(sortedData)
    renderData = sortedData
    renderTable()

    for(let i = 0; i < sortButtons.length; i++){
        sortButtons[i].className = 'sort'
    }
    event.target.parentNode.parentNode.classList.add('ascending')
})

titleDescendingSortButton.addEventListener('click', event => {
    let sortedData = data.sort((a, b) => {
        if(a.title.toLowerCase() > b.title.toLowerCase()){
            return -1
        }else if(a.title.toLowerCase() < b.title.toLowerCase()){
            return 1
        }else {
            return 0
        }
        })
    console.log(sortedData)
    renderData = sortedData
    renderTable()

    for(let i = 0; i < sortButtons.length; i++){
        sortButtons[i].className = 'sort'
    }
    event.target.parentNode.parentNode.classList.add('descending')
})

previousButton.addEventListener('click', event => {
    if(index1 > 0){
        index1 -= 10
        index2 -= 10
        renderTable()
        pageValue -= 1
        currentPage.value = pageValue
        console.log(currentPage.value, pageValue)
    }
})

nextButton.addEventListener('click', event => {
    if(index2 < data.length){
        index1 += 10
        index2 += 10
        console.log(index1, index2)
        renderTable()
        pageValue += 1
        currentPage.value = pageValue
    }
})