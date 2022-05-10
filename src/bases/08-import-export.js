import heroes,{owner} from  './data/heroes';
console.log(owner)


//const getHeroeById = (id) =>{
 //   return heroes.find( (heroe) => {
    //    if( heroe.id === id){
        //    return true;
      //  }else{
          //  return false
 //       }
 //   });
//}



//lo mismo de arriba mas simplificado 
//const getHeroeById = (id) =>{
   // return heroes.find( (heroe) => heroe.id ===id);
//}

//console.log (getHeroeById(3));




//ahora mas simplificado que arriba

//const getHeroeById = (id) => heroes.find( (heroe) => heroe.id ===id);
//console.log (getHeroeById(2));


const getHeroesByOwner = ( owner ) => heroes.filter((heroe) => heroe.owner ===owner);
console.log(getHeroesByOwner('Marvel') );