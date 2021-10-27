const images = ['img/01.jpg','img/02.jpg','img/03.jpg','img/04.jpg','img/05.jpg'];
const slider = document.getElementById('full-image');
let contatore = 0;

for(let i = 0; i < images.length; i++){

  console.log(images[i]);
  const item = document.createElement('div');
  item.className = 'item';
  if(i === contatore){
    item.classList.add('active');
  }

  item.innerHTML = `<img src="${images[i]}" alt="">`;

  console.log(item);
  slider.append(item);

}

const items = document.getElementsByClassName('item');

console.log('items',items);
console.log('contatore',contatore);
console.log('item in base al contatore', items[contatore]);

const prev = document.getElementById('btn-down');
const next = document.getElementById('btn-up');

prev.addEventListener('click',function(){
  console.log('contatore',contatore);
  console.log(items[contatore]);
  items[contatore].classList.remove('active');
  console.log(items[contatore]);

  contatore--;
  if(contatore < 0) contatore = items.length - 1;

  console.log('contatore',contatore);
  items[contatore].classList.add('active');
  console.log(items[contatore]);
});

next.addEventListener('click',function(){
  console.log('contatore',contatore);
  console.log(items[contatore]);
  items[contatore].classList.remove('active');
  console.log(items[contatore]);

  contatore++;
  if(contatore > items.length - 1) contatore = 0;
  items[contatore].classList.add('active');
  console.log(items[contatore]);
});