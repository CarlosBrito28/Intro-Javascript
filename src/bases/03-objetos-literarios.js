
const persona ={
    nombre: 'Carlos',
    apellido: 'Brito',
    edad:22,
    direccion:{
            ciudad: 'Un lugar muy lejano de Chile',
            latitud: 14.12321,
            longitud: 3.21321
    }
};
//console.table(persona);
const persona2 ={...persona };
persona2.nombre='Daniel';
persona2.apellido= 'Moya';
console.log(persona);
console.log(persona2);