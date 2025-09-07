const form = document.getElementById('formulario')
const peso = document.getElementById('peso')
const  altura = document.getElementById('altura')
const resultado = document.getElementById('resultadoCalculo')
const calcular = document.getElementById('calcular')
const magreza = document.getElementById('magreza')
const normal = document.getElementById('normal')
const sobrepeso = document.getElementById('sobrepeso')
const obesidade = document.getElementById('obesidade')
const obesidadeGrav = document.getElementById('obesidadeGrave')


function LimparEstilos(){
    magreza.classList.remove('magreza')
    normal.classList.remove('normal')
    sobrepeso.classList.remove('sobrepeso')
    obesidade.classList.remove('obesidade')
    obesidadeGrave.classList.remove('obesidadeGrave')
}

form.addEventListener('submit', (event) =>{
    event.preventDefault();

    calcular.addEventListener("click", ()=>{

        const num1 = parseFloat(peso.value)
        const num2 = parseFloat(altura.value)
        const divisao =  num1 / (num2 * num2 )
        
        resultado.textContent = divisao.toFixed(2)

        LimparEstilos()
        
        if(divisao < 18.5){

            magreza.classList.add('magreza')

        } else if(divisao > 18.5 && divisao < 25){

            normal.classList.add('normal')

        }else if(divisao > 25 && divisao < 30){

            sobrepeso.classList.add('sobrepeso')

        }else if(divisao > 30 && divisao < 40){

            obesidade.classList.add('obesidade')

        }else if(divisao > 40){

            obesidadeGrave.classList.add('obesidadeGrave')

        }
    })
  


})


   