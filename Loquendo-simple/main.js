

const reproducir=document.getElementById('reproducir')
reproducir.addEventListener('click',()=>{
    let texto=document.getElementById('texto').value
    console.log(texto)
hablar(texto);
})

const hablar=texto=> speechSynthesis.speak(new SpeechSynthesisUtterance(texto))