document.getElementById('sendmessege1').addEventListener('click', function() {
    window.location.href = "index.html";
});
// document.getElementById('sendmessege2').addEventListener('click', function() {
//     let namauser = document.getElementById("");
//     let pesanuser = document.getElementById("");
// });

const scriptURL = 'https://script.google.com/macros/s/AKfycbzMwUrXBPR-oldmjDjacOpxmPCQEGF0qAIynw1_zXlCTylr8ug_vsB2ZRkFv0ifMUDQ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
    
    let userInput = '';
    
    while (!userInput) {
        userInput = form;
    }
    if (!userInput) {
        alert('Input tidak boleh kosong. Silakan coba lagi.');
    }
    
    e.preventDefault()
    
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert(" Terima Kasih! Pesan Anda Telah Disampaikan" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})