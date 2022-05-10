const apiKey = '96t8goQ3FA3NyDpZEPSkcgib0Z4KJFjo';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);


peticion
.then( resp => resp.json() )
.then( ({ data} ) => {


  const { url} = data.images.original;
  const img = document.createElement('img');
  img.src = url

  document.body.append ( img);
   
  })

.catch (  console.warn);