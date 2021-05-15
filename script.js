class Slider {
  constructor(wrapper, dots, time, classDisplay, classDot) {
    this.classDisplay = classDisplay
    this.classDot = classDot;
    this.time = time
    this.wrapper = wrapper
    this.dots = dots
    this.element = 0
    this.loop = null
    this.children = null
  };


  start = () => {
    const changeElement = () => {
      Object.values(this.children).forEach(el => {
        el.classList.remove(this.classDisplay);
      })
      Object.values(this.dots.children).forEach(el => {
        el.classList.remove(this.classDot)
      })
      
      
      
      this.children[this.element%this.children.length].classList.add(this.classDisplay);
      this.dots.children[this.element%this.children.length].classList.add(this.classDot);
      this.element++;
    }
  Object.values(this.dots.children).forEach((el, index) => {
    el.addEventListener('click', () => {
      this.element = index;
      changeElement();
      clearLoop();
      startLoop();
    })
  })

  const startLoop = () => {
    this.loop = setInterval(changeElement, this.time);
  }

  const clearLoop = () => {
    clearInterval(this.loop);
  }

  this.children = [...this.wrapper.children];
  startLoop();
  }
}


const headerContainer = document.querySelector('.wrapperBanner');
const headerSwitcher = document.querySelector('.header__switcher');

const headerSlider = new Slider(headerContainer,headerSwitcher, 1000, 'slider--display', 'header__switcher_circle--active');
headerSlider.start();

const commentsContainer = document.querySelector('.clients__comments_container');
const commentsSwitcher = document.querySelector('.comments__dots');

const commentsSlider = new Slider(commentsContainer,commentsSwitcher, 3000, 'clients__slider--display', 'comments__dots_dot--active');
commentsSlider.start();



document.querySelectorAll('a.nav__link').forEach(link => link.addEventListener('click', () => {
  document.querySelector('.nav__link--active').classList.remove('nav__link--active');
  link.classList.add('nav__link--active');
}))






const texts = ['11111111111 dolor sit amet consectetur adipisicing elit. Dolores vitae natus odit beatae voluptatibus exercitationem id ipsam reiciendis iste perferendis rem alias voluptatem consectetur, minus, nihil fugiat, eius eligendi ut esse! Eaque omnis ratione perferendis! Ex unde, sunt ipsam impedit cumque porro molestiae ut quidem, sit beatae voluptas, nesciunt odio.',
'22222222222222 dolor sit amet consectetur adipisicing elit. Dolores vitae natus odit beatae voluptatibus exercitationem id ipsam reiciendis iste perferendis rem alias voluptatem consectetur, minus, nihil fugiat, eius eligendi ut esse! Eaque omnis ratione perferendis! Ex unde, sunt ipsam impedit cumque porro molestiae ut quidem, sit beatae voluptas, nesciunt odio.',
'3333333333333333 dolor sit amet consectetur adipisicing elit. Dolores vitae natus odit beatae voluptatibus exercitationem id ipsam reiciendis iste perferendis rem alias voluptatem consectetur, minus, nihil fugiat, eius eligendi ut esse! Eaque omnis ratione perferendis! Ex unde, sunt ipsam impedit cumque porro molestiae ut quidem, sit beatae voluptas, nesciunt odio.',
'44444444444 dolor sit amet consectetur adipisicing elit. Dolores vitae natus odit beatae voluptatibus exercitationem id ipsam reiciendis iste perferendis rem alias voluptatem consectetur, minus, nihil fugiat, eius eligendi ut esse! Eaque omnis ratione perferendis! Ex unde, sunt ipsam impedit cumque porro molestiae ut quidem, sit beatae voluptas, nesciunt odio.',
'55555555555 dolor sit amet consectetur adipisicing elit. Dolores vitae natus odit beatae voluptatibus exercitationem id ipsam reiciendis iste perferendis rem alias voluptatem consectetur, minus, nihil fugiat, eius eligendi ut esse! Eaque omnis ratione perferendis! Ex unde, sunt ipsam impedit cumque porro molestiae ut quidem, sit beatae voluptas, nesciunt odio.',
'66666666666666666 dolor sit amet consectetur adipisicing elit. Dolores vitae natus odit beatae voluptatibus exercitationem id ipsam reiciendis iste perferendis rem alias voluptatem consectetur, minus, nihil fugiat, eius eligendi ut esse! Eaque omnis ratione perferendis! Ex unde, sunt ipsam impedit cumque porro molestiae ut quidem, sit beatae voluptas, nesciunt odio.']


const listQuestion = document.querySelectorAll('.faq__question')
if(listQuestion.length) {
  listQuestion.forEach((el, index) => {
    if(!el) return
    el.addEventListener('click', (e) => {
      const active = document.querySelector('.faq__question--active');
      const activeSpan = active.querySelector('span')
      const spanToAddSign = el.querySelector('span');
      const questionContent = document.querySelector('.faq__question_content');

      if(!active) return;
      if(!activeSpan) return;
      if(!spanToAddSign) return;
      if(!questionContent) return;

      activeSpan.textContent = '+';
      active.classList.remove('faq__question--active');

      el.classList.add('faq__question--active');
      spanToAddSign.textContent = '-'
      questionContent.textContent = texts[index];
    });
  });
}

const setContentQestion = () => {
  if(!texts.length) return;
  document.querySelector('.faq__question_content').textContent = texts[0];
}

window.onload = setContentQestion();


const normalSize = document.querySelector('#normalSize');
const biggerSize = document.querySelector('#biggerSize');
const biggestSize = document.querySelector('#biggestSize');

const listSize = [normalSize, biggerSize, biggestSize];

if(listSize.length) {
  listSize.forEach(el => el.addEventListener('click', (e) => {
    let size = null;
    if(e && e.target) {
      switch (e.target.id) {
        case 'normalSize':
          size = 16;
          break;
        case 'biggerSize':
          size = 18;
          break;
        case 'biggestSize':
          size = 20;
          break;
        default:
          return;
      }
    }
    if(!size) return
  
    document.documentElement.style.setProperty("--basicSize", `${size}px`);
  }))
}


document.querySelector('.fa-eye').addEventListener('click', () => {
  if(document.body.classList.contains('dark')) {
    document.documentElement.style.setProperty("--bgcolor", `#fff`);
    document.documentElement.style.setProperty("--colorText", `#000`);
    document.documentElement.style.setProperty("--colorDescription", `#666`);
    document.body.classList.remove('dark');
    return;
  }
  document.documentElement.style.setProperty("--bgcolor", `#000`);
  document.documentElement.style.setProperty("--colorText", `#fbff00`);
  document.documentElement.style.setProperty("--colorDescription", `#7c7e00`);
  document.body.classList.add('dark')


})




document.querySelector('.form__button').addEventListener('click', el => {
  const reg = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
  const alerts = []
  const name = document.querySelector('#name')
  if(name.value < 4) {alerts.push('Too short name')}
  if(!reg.test(document.querySelector('#email').value)) {alerts.push('Nieprawidłowy email')}
  if(!(/^\d{9}$/.test(document.querySelector('#phone').value))) {alerts.push('Phone number should have 9 number - format xxxxxxxxx')}
  if(document.querySelector('#textarea').value < 15) {alerts.push('Write a longer message')}
  
  if(alerts.length) {
    const form = document.querySelector('.contact__form');
    document.querySelectorAll('p').forEach(el => el.remove())
    alerts.forEach(el => {
      const element = document.createElement('p');
      element.style.color = 'red';
      element.style.margin = '4px 0'
      element.textContent = el;
      form.insertBefore(element, form.childNodes[0])
    });

    return;
  }
  
  document.querySelector('#form').submit();
})



