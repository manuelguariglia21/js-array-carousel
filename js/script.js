const images = ['img/01.jpg','img/02.jpg','img/03.jpg','img/04.jpg','img/05.jpg'];
const slider = document.getElementById('full-image');
const navMenu = document.querySelector(".nav-menu");
const title = [
  'Svezia',
  'Svizzera',
  'Gran Bretagna',
  'Germania',
  'Paradise'
]

const text = [
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
  'Lorem ipsum',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
  'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]
let contatore = 0;

for(let i = 0; i < images.length; i++){

  console.log(images[i]);
  const item = document.createElement('div');
  const thumb = document.createElement('div');
  thumb.className = 'thumb';
  item.className = 'item';
  if(i === contatore){
    item.classList.add('active');
  }

  item.innerHTML = `<img src="${images[i]}" alt="">
  <div class="paragraph">
    <h2 class="title">${title[i]}</h2>
    <div class="text">${text[i]}</div>
  </div>`;
  thumb.innerHTML = `<img class="nav-image" src="${images[i]}" alt="">`;

  console.log(item);
  slider.append(item);
  navMenu.append(thumb);

}

const items = document.getElementsByClassName('item');
const navImages = document.getElementsByClassName('thumb');

console.log('items',items);
console.log('contatore',contatore);
console.log('item in base al contatore', items[contatore]);

const prev = document.getElementById('btn-down');
const next = document.getElementById('btn-up');

next.addEventListener('click',function(){
  console.log('contatore',contatore);
  console.log(items[contatore]);
  items[contatore].classList.remove('active');
  navImages[contatore].classList.remove('active');
  console.log(items[contatore]);

  contatore--;
  if(contatore < 0) contatore = items.length - 1;

  console.log('contatore',contatore);
  items[contatore].classList.add('active');
  navImages[contatore].classList.add('active');
  console.log(items[contatore]);
});

prev.addEventListener('click',function(){
  console.log('contatore',contatore);
  console.log(items[contatore]);
  items[contatore].classList.remove('active');
  navImages[contatore].classList.remove('active');
  console.log(items[contatore]);

  contatore++;
  if(contatore > items.length - 1) contatore = 0;
  items[contatore].classList.add('active');
  navImages[contatore].classList.add('active');
  console.log(items[contatore]);
});