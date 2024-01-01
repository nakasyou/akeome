const message = document.getElementById('message')!

const msg = new URL(location.href).searchParams.get('msg')
if (msg) {
  message.textContent = msg
}
