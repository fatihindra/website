document.getElementById('tanya').addEventListener('click', function(){

    
    let userInput = '';

while (!userInput) {
  userInput = prompt('Silakan masukkan nama panggilanmu:');
  if (!userInput) {
    alert('Input tidak boleh kosong. Silakan coba lagi.');
  }
}


    let nama = userInput;

    let say1 = document.getElementById("hihello");
    let say2 = document.getElementById("hiuser").innerHTML = "Welcome To web";


    if (nama !== "" ) {
        say1.innerHTML = "Hi, " + nama;
        say2
        // console.log(nama)
    } else if (nama == "") {
        say1.innerHTML = "Hi, Guest";
        say2

    }


});


