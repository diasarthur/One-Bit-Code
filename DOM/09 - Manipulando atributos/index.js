const input = document.getElementById('input');

document.getElementById('value').addEventListener('click', function () {
  input.value = 'olá mundo'
  
  console.log(input.value)
  console.log(input.getAttribute('value'));
})

document.getElementById('type').addEventListener('click', function() {
  // input.type = input.type !== 'radio' ? 'radio' : 'text'
  input.setAttribute('type', 'radio')
})

document.getElementById('placeholder').addEventListener('click', function () {
  input.placeholder = 'Digite algo...'
})

document.getElementById('disable').addEventListener('click', function() {
  input.setAttribute('disabled', !input.disable)
})

document.getElementById('data').addEventListener('click', function() {
  const data = input.dataset.
})