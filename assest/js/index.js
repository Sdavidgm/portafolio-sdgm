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