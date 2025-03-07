const categoriesList = document.querySelectorAll('#categories .item');

console.log(`Total categories: ${categoriesList.length}`);

categoriesList.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const categoryItems = category.querySelectorAll('ul li');
  
  console.log(`Category: ${categoryName} - Items count: ${categoryItems.length}`);
});


const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', () => {
    const trimmedValue = nameInput.value.trim();
    nameOutput.textContent = trimmedValue || 'Anonymous';
});


document.querySelector('.login-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const emailValue = this.elements.email.value.trim();
  const passwordValue = this.elements.password.value.trim();

  if (emailValue === '' || passwordValue === '') {
    alert('All form fields must be filled in');
  } else {
    const formData = {
      email: emailValue,
      password: passwordValue
    };

    console.log(formData);
    this.reset();
  }
});

const button = document.querySelector('.change-color');
const body = document.querySelector('body');
const colorSpan = document.querySelector('.color');

button.addEventListener('click', function() {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
});