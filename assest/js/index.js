/* Skills */
const skillsTech = document.querySelector('.skills-tech')

const skills = [
  {
    path: 'assest/img/javascript.svg',
    name: 'JAVA',
  },
  {
    path: 'assest/img/html.svg',
    name: 'HTML',
  },
  {
    path: 'assest/img/css.svg',
    name: 'CSS',
  },
  {
    path: 'assest/img/netlify.svg',
    name: 'NETLIFY',
  }
]

let html = ''

for (const skill of skills) {
  html += `
  <div class='skill'>
    <img src='${skill.path}' alt='${skill.name}'>
    <h3>${skill.name}</h3>
  </div>
`
}

skillsTech.innerHTML = html

/*navbar*/

const navbar = document.querySelector('.nav')
const menu = document.querySelector('.nav-menu')
const links = document.querySelectorAll('.list-link')

navbar.addEventListener('click', function (e) {
  if (e.target.closest('.btn-menu')) {
    menu.classList.toggle('show-menu')
  }

  if (e.target.closest('.btn-close')) {
    menu.classList.remove('show-menu')
  }

  if (e.target.closest('.lista-link')) {
    menu.classList.remove('show-menu')
  }

  if (e.target.closest('.lista-link')) {
    for (const link of links) {
      link.parentElement.classList.remove('active')
    }

    e.target.parentElement.classList.add('active')
  }
})