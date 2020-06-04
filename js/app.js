let list = document.querySelector('.todo');
let listItem = document.querySelector('.todo li');
let btnInserir = document.querySelector('.btn');
let itemConteudo = document.querySelector('.campo');

let listaItens = JSON.parse(localStorage.getItem('lista')) || [];

function renderItem() {
  list.innerHTML = '';

  for(item of listaItens) {
   let itemLi = document.createElement('li');
   let itensContent = document.createTextNode(item);


   //Pega a posicao do item no array
   let itm = listaItens.indexOf(item);
   
   let img = document.createElement('img');
   img.src = '../img/trash.png';
   console.log(img);
   
   
   let linkExcluir = document.createElement('a');
   linkExcluir.setAttribute('href', '#');
   
   linkExcluir.setAttribute('onclick', 'excluirItem('+ itm +')');


   linkExcluir.appendChild(img);
   
   itemLi.appendChild(itensContent);
   itemLi.appendChild(linkExcluir);
   list.appendChild(itemLi);

  }

}

renderItem();

function addItem() {
  var campo = itemConteudo.value;
  listaItens.push(campo);
  itemConteudo.value = '';

  //como estamos colocando um elemento dentro do array, precisamos atualizar quem cuida da parte de criar o elemento:
  renderItem();
  saveList();
}

btnInserir.onclick = addItem;


function excluirItem(itm){
  listaItens.splice(itm, 1);
  renderItem();
  saveList();
}

function saveList() {
  localStorage.setItem('lista', JSON.stringify(listaItens));
}