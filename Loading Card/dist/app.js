const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profileImg = document.getElementById('profile-img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
    header.innerHtml = '<img src="" alt="unsplash image"/>'
    title.innerHtml = 'Lorem ipsum dolor sit amet'
    excerpt.innerHtml = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, molestiae'
    profileImg.innerHtml = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt=""/>'
    name.innerHtml = 'John Silver'
    date.innerHtml = 'Oct 08, 2020'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg'))
}