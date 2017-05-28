/* global hoodie, alert */

var $form = document.querySelector('form')
var $error = document.querySelector('#error')

$form.querySelector('button[type=submit]').removeAttribute('disabled')

$form.addEventListener('submit', function (event) {
  event.preventDefault()

  var options = {
    greeting: document.querySelector('[name="greeting"]').value,
    name: document.querySelector('[name="name"]').value
  }

  hoodie.hello(options)

  .then(function (text) {
    alert(text)
    $error.style.display = 'node'
  })

  .catch(function (error) {
    $error.style.display = 'block'
    $error.textContent = error.toString()
  })
})
