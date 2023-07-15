const moreButton = document.querySelector('.more-button');
const moreDropdown = document.querySelector('.more-dropdown');

moreButton.addEventListener('click', function() {
  moreDropdown.classList.toggle('show');
});

const cartLink = document.querySelector('.cart-link');

cartLink.addEventListener('click', function(event) {
  event.preventDefault();
  window.location.href = 'custom_page.html';
});
function toggleColumns(word) {
    const columnsContainer = document.querySelector('.columns-container');
    const columns = columnsContainer.querySelectorAll('.columns');
    
    columns.forEach(function(column) {
      column.classList.remove('show');
    });
    
    const wordIndex = Array.from(word.parentNode.children).indexOf(word);
    const targetColumns = columnsContainer.querySelectorAll('.columns')[wordIndex];
    
    targetColumns.classList.toggle('show');
  }


// Define functions toggleColumns2, toggleColumns3, ..., toggleColumns8 in a similar way
  // ...lumns.classList.toggle('show');

  function toggleColumns1(isHovered) {
    const columnsContainer = document.querySelector('#columns1');
    
    columnsContainer.classList.toggle('show', isHovered);
  }
  function toggleColumns2(isHovered) {
    const columnsContainer = document.querySelector('#columns2');
    
    columnsContainer.classList.toggle('show', isHovered);
  }
  function toggleColumns3(isHovered) {
    const columnsContainer = document.querySelector('#columns3');
    
    columnsContainer.classList.toggle('show', isHovered);
  }
  function toggleColumns4(isHovered) {
    const columnsContainer = document.querySelector('#columns4');
    
    columnsContainer.classList.toggle('show', isHovered);
  }
  function toggleColumns5(isHovered) {
    const columnsContainer = document.querySelector('#columns5');
    
    columnsContainer.classList.toggle('show', isHovered);
  }
  function toggleColumns6(isHovered) {
    const columnsContainer = document.querySelector('#columns6');
    
    columnsContainer.classList.toggle('show', isHovered);
  }
  function toggleColumns7(isHovered) {
    const columnsContainer = document.querySelector('#columns7');
    
    columnsContainer.classList.toggle('show', isHovered);
  }
  function toggleColumns8(isHovered) {
    const columnsContainer = document.querySelector('#columns8');
    
    columnsContainer.classList.toggle('show', isHovered);
  }
  
  const imageSlider = document.querySelector('.image-slider');
  const images = imageSlider.querySelectorAll('img');
  let currentImageIndex = 0;
  
  function rotateImages() {
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add('active');
  }
  
  setTimeout(() => {
    rotateImages();
    setInterval(rotateImages, 4000); 
  }, 4000); 