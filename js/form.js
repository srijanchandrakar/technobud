
const scriptURL = 'https://script.google.com/macros/s/AKfycbwFpsKGquxKJ-V6ZPvWL9s8e06Ob88EIEKmb4KTz3AtiDyYPuiXR3ISE7GBQBKz8ny_/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})