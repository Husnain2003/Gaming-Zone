// Sticky navbar
window.addEventListener('scroll',function(){
    var header =document.querySelector('header');
    header.classList.toggle('sticky',this.window.scrollY > 0);
});
// Responsive navbar
function toggleMenu(){
    const  toggleMenu = document.querySelector('.toggleMenu');
    const nav = document.querySelector('.nav'); 
    toggleMenu.classList.toggle('active')
    nav.classList.toggle('active')

}
// cards selection 
let list = document.querySelectorAll('.list');
let cards = document.querySelectorAll('.card');

// Filter cards based on data-filter outside the loop for efficiency
function filterCards(dataFilter) {
  for (let k = 0; k < cards.length; k++) {
    cards[k].classList.remove('active');
    cards[k].classList.add('hide');

    if (cards[k].getAttribute('data-item') === dataFilter || dataFilter === 'all') {
      cards[k].classList.remove('hide');
      cards[k].classList.add('active');
    }
  }
}

// Event listener for list items
for (let i = 0; i < list.length; i++) {
  list[i].addEventListener('click', function () {
    // Remove active class from all list items
    for (let j = 0; j < list.length; j++) {
      list[j].classList.remove('active');
    }

    // Add active class to clicked list item
    this.classList.add('active');

    // Get data-filter value
    let dataFilter = this.getAttribute('data-filter');

    // Call filterCards function with the dataFilter
    filterCards(dataFilter);
  });
}
