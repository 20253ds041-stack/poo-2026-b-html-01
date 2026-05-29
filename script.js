
const btnSaludar = document .getElementById('btn-saludar');
console.log(btnSaludar);
let mensajeMostrado =false;
btnSaludar.addEventListener('click', function(){
    console.log('click');
    if(!mensajeMostrado){ //hacemos comparacion si esta escrito o no para que no escriba el mensaje N cantiad de veces
            const seccionContacto = document.getElementById('contacto');
            const mensaje =document.createElement('p');
            mensaje.textContent ='Gracias por tu visita :3';
            mensaje.style.color='#f7b374';
            mensaje.style.fontWeight ='bold';

            seccionContacto.appendChild(mensaje); 
            mensajeMostrado = true;
            btnSaludar.textContent = 'Mensaje enviado';
            btnSaludar.disabled=true;
            btnSaludar.style.backgroundColor= '#c0c0c0';
    }

}
) //Alerta de mensaje declaramos la constante y hacemos referencia con el document . getElementId(id del objeto)
