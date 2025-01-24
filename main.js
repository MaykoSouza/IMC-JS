const form = document.getElementById('formulario')
const peso = document.getElementById('peso')
const  altura = document.getElementById('altura')
const resultado = document.getElementById('resultadoCalculo')
const calcular = document.getElementById('calcular')

form.addEventListener('submit', (event) =>{
    event.preventDefault();

    calcular.addEventListener("click", ()=>{

        const num1 = parseFloat(peso.value)
        const num2 = parseFloat(altura.value)
        const divisao =  num1 / (num2 * num2 )
        
        resultado.textContent = divisao
    })
})
