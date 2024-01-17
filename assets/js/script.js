let navList = document.querySelectorAll('a.inner-link');

navList.forEach((item) => {

    item.addEventListener('click', function () {

        document.querySelector('nav ul li a.active').classList.remove('active')
        document.querySelector(`nav ul li a[href='${item.getAttribute('href')}']`).classList.add('active')
        document.querySelector('main > section.active').classList.remove('active')
        document.querySelector(`main > section${item.getAttribute('href')}`).classList.add('active')
        document.querySelector('#sidebar').classList.toggle('open')
    })

})


document.querySelector('#sidebar .toggle-sidebar').addEventListener('click', function () {
    document.querySelector('#sidebar').classList.toggle('open')
})

var options = {
    strings: ['Software Developer', 'Front-End Developer', 'Back-End Developer', 'Full-Stack Developer', 'Android Developer', 'IOS Developer', 'Web Developer'],
    loop: true,
    typeSpeed: 70,
    backSpeed: 10
};

new Typed('.field h2', options);

for (let i = 1; i <= 15; i++) {
    let meteor = document.createElement('span');
    meteor.classList = 'meteor'
    document.querySelector('#home .meteor-shower').append(meteor);
}

const shuffleInstance = new Shuffle(document.querySelector('#my_work .work-items'), {
    itemSelector: '.item'
});

const filterButtons = document.querySelectorAll('#my_work .filters button')

filterButtons.forEach((item) => {
    item.addEventListener('click', workFilter)
})

function workFilter() {
    const clickedButton = event.currentTarget;
    const clickedButtonGroup = clickedButton.getAttribute('data-group');
    const activeButton = document.querySelector('#my_work .filters button.active');

    activeButton.classList.remove('active');
    clickedButton.classList.add("active");

    shuffleInstance.filter(clickedButtonGroup)
}

var workModal = new bootstrap.Modal(document.getElementById('workModal'))
const workElements = document.querySelectorAll("#my_work .work-items .wrap");

workElements.forEach((item) => {
    item.addEventListener('click', function () {
        document.querySelector('#workModal .modal-body img').setAttribute('src', item.getAttribute('data-image'))
        document.querySelector('#workModal .modal-body .title').innerText = item.getAttribute('data-title')
        document.querySelector('#workModal .modal-body .description').innerText = item.getAttribute('data-description')
        document.querySelector('#workModal .modal-body .client .value').innerText = item.getAttribute('data-client')
        document.querySelector('#workModal .modal-body .completed .value').innerText = item.getAttribute('data-completed')
        document.querySelector('#workModal .modal-body .skills .value').innerText = item.getAttribute('data-skills')
        document.querySelector('#workModal .modal-body .project-link a').setAttribute('href', item.getAttribute('data-project-link'))

        workModal.show();
    })
})

var workModalElement = document.getElementById('workModal')
workModalElement.addEventListener('show.bs.modal', function (event) {
    document.getElementById('my_work').classList.add('blur');
    document.getElementById('sidebar').classList.add('blur');
})

workModalElement.addEventListener('hide.bs.modal', function (event) {
    document.getElementById('my_work').classList.remove('blur');
    document.getElementById('sidebar').classList.remove('blur');
})

let quotesImages = document.querySelectorAll('#quotes .images img');

quotesImages.forEach((item, index) => {
    let position = index + 1;

    item.addEventListener('click', function () {
        document.querySelector('#quotes .images img.active').classList.remove('active')
        document.querySelector(`#quotes .images img:nth-child(${position})`).classList.add('active')

        document.querySelector('#quotes .comments .item.active').classList.remove('active')
        document.querySelector(`#quotes .comments .item:nth-child(${position})`).classList.add('active')
    })
})

let contactFromItems = document.querySelectorAll('#contact_me .form input, #contact_me .form textarea');

contactFromItems.forEach((item) => {
    item.addEventListener('focus', function () {
        item.parentElement.classList.add('focus')
    })

    item.addEventListener('blur', function () {
        if (!item.value) {
            item.parentElement.classList.remove('focus')
        }
    })
})

function toggleMode() {
    let theme = document.querySelector('html').getAttribute('theme');

    if(theme == "dark") {
        theme = "light";
        new Audio('./assets/audio/light.wav').play()
    } else {
        theme = "dark";
        new Audio('./assets/audio/light.wav').play()
    }

    document.querySelector('html').setAttribute("theme", theme)
}

// let contactFromSubmit = document.querySelector('#contact_me .form button');

// contactFromSubmit.addEventListener('click', function onClick() {

//     Email.send({
//         Host: "smtp.gmail.com",
//         Username: "johnwickpart2468@gmail.com",
//         Password: "John@wick1",
//         To: 'yashrajchauhan6789@gmail.com',
//         From: document.getElementById("email").value,
//         Subject: document.getElementById("subject").value,
//         Body: "Name: " + document.getElementById("name").value
//                + "<br> Email: " + document.getElementById("email").value
//                + "<br> Phone Number: " + document.getElementById("phone").value
//                + "<br> Message: " + document.getElementById("message").value
//     }).then(
//         message => alert("Message Sent Succesfully")
//     );
// })