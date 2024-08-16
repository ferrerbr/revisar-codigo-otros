const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');//usamos $ para las varibles que apuntan a elementos del DOM
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');


//cambiamos .this por try y catch
async function displayUser(username) {//agregamos una async
  try{
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);  
  if(!response.ok){//si response falla entonces ejecutar 
    throw new Error(`Error en la solicitud: ${response.status}`);

  }

 const data = await response.json();//convetir a formalto json
 

  console.log(data);        // Utilizar los datos obtenidos

  $n.textContent = `${data.name}`;
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;//agregamos  esta clase a  el html 
  }catch(error) {

    handleError(error)
  }
}




function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`//n le faltaba el $al principio 
}

displayUser('stolinski');