const getImagen = async() => {

  try {
    
const apiKey = '96t8goQ3FA3NyDpZEPSkcgib0Z4KJFjo';
const resp = await  fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
const { data } = await resp.json();
const { url} = data.images.original;
const img = document.createElement('img');
img.src = url;

document.body.append ( img);
  } catch (error) {
   // manejo del error 
   console.error(error);
  }

}



