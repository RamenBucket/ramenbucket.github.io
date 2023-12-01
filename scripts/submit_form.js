async function submitForm () {
  const form = document.getElementById('form')
  const formData = new FormData(form)
  const response = await fetch(form.action, {
    method: form.method,
    body: formData
  })
  const result = await response.json()
  console.log(result)
}
