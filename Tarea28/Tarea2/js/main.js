class ejercicio{
dividir(N) {
       let i , con = []
      for ( i = 1; i <= N; i++) {
           if (N%i==0) {
           debugger  
           con.push(i)
 
           } else {   
           }
          }  
          return con
}
Divisor(){
      let N ;
      N =  document.getElementById("N").value;

      debugger
      let con = this.dividir(N)
        document.getElementById("Res").innerText = `${con}`
}
Perfecto(){ 
 let N = document.getElementById("N").value;
 let con = this.dividir(parseInt(N));
 let suma = 0;
 for (let i = 0; i < con.length-1; i++) {
     suma += parseInt(con[i]);
     if ( suma == N) {
          console.log("Es un numero perfecto");
          document.getElementById("Res").innerText = `Es un numero perfecto `; 
     } else {
          console.log(" No es  un numero perfecto");
          document.getElementById("Res").innerText = `No es un numero perfecto `; 
     }
 }

}
div(N){
 debugger
 let con = []
 for (let i = 1; i<= N; i++) {
     if (N%i==0) {
          con.push(i)
     } else {
     }    
  }
   return con
}
Primo(){
debugger
  let N
  N = document.getElementById("N").value
  let cont = this.div(N) 
  let D=0
   for (let i= 1; i<= cont.length; i++) {
      D+=1
    }
    if (D===2) {
      document.getElementById("Res").innerText = `Es un numero primo`
    } else {
      document.getElementById("Res").innerText = `No es un numero primo`
    }

}
PrimoGemelo(){
  debugger
  let A,B, con = [];
  let N = document.getElementById("N").value;
  let N2 = document.getElementById("N2").value;
  for (let i = 1; i <= N2; i++) {
    if (N2%i===0) {
    con.push(i);
    }
  
   }
  let D1=0
  for (let e = 1; e <= con.length; e++) {
    D1+=1;
   if (D1===2) {
       /*console.log(N2+"Es un numero primo");
       document.getElementById("Res").innerText=`Es un numero primo`*/
       A=N2
       alert(`${A} Si es numero primo`)
   } else {
       /* console.log("No es un numero primo");
        document.getElementById("Res").innerText=`No es un numero primo`*/
        A=N2
   }


  }
  let co = this.div(N)
  let D2 = 0
  for (let x = 1; x <=co.length; x++) {
    D2+=1;
    if (D2===2) {
       /*console.log(N+"Es un numero primo");
       document.getElementById("Res").innerText = `${N} Es un numero primo `;*/
       B=N
       alert(`${B} Si es numero primo`)
    } else {
       /*console.log(N+"No es un numero primo");
      document.getElementById("Res").innerText = `${N} No es un numero primo `;*/
       B=N
    }
   }


    let resta=0
     resta = B - A

   if (resta===2|| resta===-2) {
      console.log("Son primos gemelos");
      document.getElementById("Res").innerText = `${B} y ${A} Son primos gemelos`
   } else {
      console.log("No son primos gemelos");
      document.getElementById("Res").innerText= `${B} y ${A} No son primos gemelos`
   }

}
concatenar(N,N2){
let Conca = N.concat(N2)
return Conca
}
Cadenas(){
  debugger
  let N , N2
  N = document.getElementById("N").value;
  N2 = document.getElementById("N2").value;
  let cont = this.concatenar(N,N2);
  console.log(`${cont}`);
  document.getElementById("Res").innerText = `${cont}`
}
/*BuscarCadena(N,N2){
let log = []
for ( i = 0; i < N.length; i++) {
 let Frase= N[i];
  for (let index = 0; index < N2.length; index++) {
    let Buscar = N2[index];
    if (Frase==Buscar) {
       log = Frase
    } else {
      
    }
  }
}




return log




}
Cadena(){

  let N = document.getElementById("N").value;
  let N2 = document.getElementById("N2").value;

   let log = this.BuscarCadena(N,N2)



}*/
Buscarcadena(Frase,Buscar){
  debugger
let logF=0;
let LogB=0;
let PX=0;
let PF = 0;
let PB=0;
let Bandera = false
logF = Frase.length
LogB = Buscar.length
while (PF<logF && Bandera===false) { 
  if (Frase[PF]===Buscar[0]) {
    PX=PF
    PB=0

    while (PX<logF && PB<LogB && Frase[PX]===Buscar[PB] ) {
     PX++
     PB++
    }

    if (PB==LogB) {
       Bandera=true
    } else {
      PF+=1
    } 

  }else{

    PF+=1
  }
}

if (Bandera==true) {
   return PF
} else {
  return -1
}

}
cadena(){
 debugger
  let Frase=document.getElementById("Frase").value
  let Buscar=document.getElementById("Buscar").value

  let Z = this.Buscarcadena(Frase,Buscar)


  if (Z>=0) {
    console.log(`La frase que digito ${Buscar}  Se encuentra en la pocicion ${Z}`);
    document.getElementById("Res").innerText= `La frase que digito ${Buscar}  Se encuentra en la pocicion ${Z}`
  } else {
    console.log(`La frse que digito ${Buscar} No se encuentra`);
    document.getElementById("Res").innerText=`La frse que digito ${Buscar} No se encuentra`
  }

}
Agreagar(Frase,SubFrase,Pocicion){
 debugger
 let A=""
 let i = 0
 let logF = Frase.length
 
for (i= 0; i < logF; i++) {
  
  if (i===Pocicion) {
    A +=SubFrase
  }
  A+=Frase[i]
}
if (Pocicion===logF) {
  A+=SubFrase
} 

return A

}
subcadena(){
debugger
let Frase = document.getElementById("Frase").value;
let SubFrase = document.getElementById("SubFrase").value
let Pocicion = parseInt(document.getElementById("Pocicion").value)

let A = this.Agreagar(Frase,SubFrase,Pocicion)

console.log(`${A}`);
document.getElementById("Res").innerText=`${A}`

}
Buscar(Frase,Eliminar){
 debugger;
 /*let logitudF = 0 ;
 let logitudE = 0 ;
 let PocicionF = 0 ;
 let PocicionE = 0 ;
 let NuevaFrase = [];
 let Bandera = false

   logitudF = Frase.length;
   logitudE = Eliminar.length;

 while (PocicionF<logitudF && Bandera===false) {
  for (PocicionE = 0; PocicionE < logitudE; PocicionE++) {
     if (Frase[PocicionF+PocicionE]!=Eliminar[PocicionE]) {
           Bandera = true
     } else {
       PocicionF++
     }
    
  }


  if (Bandera===true) {
      PocicionF+=logitudE
  } else {
      NuevaFrase=Frase[PocicionF]
      PocicionF++
      document.getElementById("Res").innerText = `${NuevaFrase}`
  }


 }*/
  let longitudF = Frase.length;
  let longitudE = Eliminar.length;
  let PosicionF = 0;
  let PosicionE = 0;
  let NuevaFrase = [];

  while (PosicionF < longitudF) {
      let encontrado = true;

      for (PosicionE = 0; PosicionE < longitudE; PosicionE++) {
          if (Frase[PosicionF + PosicionE] !== Eliminar[PosicionE]) {
              encontrado = false;
              break;
          }
      }

      if (encontrado) {
          PosicionF += longitudE;
      } else {
          NuevaFrase += Frase[PosicionF];
          PosicionF++;
      }
  }

  return NuevaFrase;
 
}
EliminarCadena(){
  debugger
  
  let Frase = document.getElementById("Frase").value
  let Eliminar = document.getElementById("Eliminar").value 
  let  NuevaFrase = this.Buscar(Frase,Eliminar)

  document.getElementById("Res").innerText=`${NuevaFrase}`


}
Convertir(Frase){
  debugger
  let Cadena = ""
  let logitud = 0;
  let PosicionF = 0;
  logitud = Frase.length;
  for (PosicionF = 0; PosicionF < logitud; PosicionF++) {
     Cadena += Frase[PosicionF];
     if (PosicionF != logitud-1) {
       Cadena+= " "
     }
    
  }


 return Cadena

}
Convertircadena(){
  debugger
   let Frase = []
  Frase = document.getElementById("Frase").value

  let A = this.Convertir(Frase)

  console.log(`${A}`);

  document.getElementById("Res").innerText = `${A}`


}
BuscarMayor(array){
  debugger
  let logitud = 0
  let i = 0
  let  Mayor = array[0]
  logitud = array.length

 for (i = 1; i < logitud; i++) {
  if (array[i]>Mayor) {
    Mayor=array[i]
  }
  
 }


 return Mayor;


}
MayorArreglo(){
   debugger
  let array = []
  let N = 0
  let T = 0
  
  T = document.getElementById("T").value

  for (let i = 0; i < T; i++) {
    
    N = prompt("digite un valor")
    array.push(parseInt(N));
  }


 let A = this.BuscarMayor(array);

 document.getElementById("Res").innerText = `El mayor de los ${array} es ${A}`






} 
/*Buscarar( array,B){
 let logitudA = 0
 let pocicionA
 logitudA = array.length

 for ( pocicionA = 0; pocicionA < logitudA; pocicionA++) {
   if (array[pocicionA]==B) {
        return `Elemento ${B} se encuentra en la pocicion ${pocicionA}`  
      }   
      
 
    } 
 return `No se encontro nada`

}*/
/*arreglo(){

  let array= []
  let T = 0;
  let I = 0;
  let N = 0;
  let B = 0;
   T = document.getElementById("T").value
   for (I = 0; I < T ; I++) {
      N = prompt("Digite un valor")
      array.push(parseInt(N))
   }
  B = document.getElementById("B").value

  let y = this.Buscarar(array,B)
  document.getElementById("Res").innerText = `${y}`











}*/
BuscarEnArray(array, B) {
  for (let posicionA = 0; posicionA < array.length; posicionA++) {
    if (array[posicionA] === B) {
      return `Elemento ${B} se encuentra en la posición ${posicionA}`;
    }
  }
  return 'No se encontró el elemento';
}
arreglo() {
  let array = [];
  let T = parseInt(document.getElementById("T").value, 10);
  
  for (let I = 0; I < T; I++) {
    let N = parseInt(prompt("Digite un valor"), 10);
    array.push(N);
  }

  let B = parseInt(document.getElementById("B").value, 10);
  let resultado = this.BuscarEnArray(array,B)
  document.getElementById("Res").innerText = resultado;
}
Bus(arreglo,N,p){

  let logitudA = arreglo.length
  let pocicionA = 0
   let New = []
  for (pocicionA = 0; pocicionA < logitudA; pocicionA++) {
    
    if (pocicionA==p) {
      New.push(N)
    }
    New.push(arreglo[pocicionA]);
  }

 return New;

}
array(){
  let arreglo= [1, 2, 3, 4, 5]
  let  N = 0
  let  p = 0  

  N = document.getElementById("N").value;
  p = document.getElementById("p").value

 let Z = this.Bus(arreglo,N,p);

 document.getElementById("Res").innerText = `${Z}` 

}
elimininar(arreglo,N){
   let logitud = arreglo.length
   let i = 0
   let Nuevo = []
   for (i = 0; i < logitud; i++) {
     if (arreglo[i]!== N) {
        Nuevo.push(arreglo[i])
        
      }
     
   }
   
  if (Nuevo.length===logitud) {
     return`${N} No se encontro en el arreglo `
  } else {
     return `${Nuevo}`
  }
   




}
arar(A){
  let arreglo= [1, 2, 3, 4, 5]
  let N = parseInt(document.getElementById("N").value)

  let D = this.elimininar(arreglo,N)


  document.getElementById("Res").innerText=`${D}`


 
}
busc(A){

  let logitud = A.length
  let i = 0

  let nuevo = []

  for (i= 0; i < logitud; i++) {
     
    nuevo.push(A[i])
    
  }
  return nuevo
}
cadena1(){

  let A = document.getElementById("A").value
  let B = this.busc(A);

  document.getElementById("Res").innerText=`${B}`

  

}
II(N,base) {
    debugger;
    let nuevo = "";
    let residuo = 0;
    if (N == 0) {
       return 0
    }
    while (N > 0) {
      
        residuo = N % base;
        nuevo = residuo + nuevo;
        N = parseInt(N / base);
    }
    
  
    return nuevo
  }
base() {
    debugger;
    let N = document.getElementById("N").value;
    let base = 2
    let p = this.II(N,base);
    document.getElementById("Res").innerText = p;
  }
base8(){
  debugger;
  let N = document.getElementById("N").value;
  let base = 8
  let p = this.II(N,base);
  document.getElementById("Res").innerText = p;

}
baseE(){
  debugger;
  let N = document.getElementById("N").value;
  let base = 16
  let p = this.II(N,base);
  document.getElementById("Res").innerText = p;

}
A(N) {
    let nuevo = 0;
    let longitud = N.length;

    for (let i = 0; i < longitud; i++) {
      let x = parseInt(N[i]);
      nuevo += x * Math.pow(2, longitud - 1 - i);
    }

    return nuevo;
  }
base2() {
    let N = document.getElementById("N").value;
    let A = this.A(N);
    document.getElementById("Res").innerText = `${A}`;
  }
B(N) {
    while (N.length % 3 !== 0) {
      N = '0' + N; // Agregar ceros a la izquierda si no es múltiplo de 3
    }
  
    let resultadoOctal = "";
    for (let i = 0; i < N.length; i += 3) {
      let grupo = N.substring(i, i + 3); // Tomar grupos de tres dígitos
      let octal = parseInt(grupo, 2).toString(8); // Convertir el grupo binario a octal
      resultadoOctal += octal; // Agregar el resultado al número octal final
    }
  
    return resultadoOctal;
  }
Bi() {
    let N = document.getElementById("N").value;
    let resultado = this.B(N);
    document.getElementById("Res").innerText = resultado;
  }
BA(N) {
    // Asegurémonos de que la longitud del número binario sea un múltiplo de 4
    while (N.length % 4 !== 0) {
      N = '0' + N; // Agregar ceros a la izquierda si no es múltiplo de 4
    }
  
    let resultadoHexadecimal = '';
    // Iterar sobre el número binario de cuatro en cuatro dígitos
    for (let i = 0; i < N.length; i += 4) {
      let grupo = N.substring(i, i + 4); // Tomar grupos de cuatro dígitos
  
      // Convertir el grupo binario a su equivalente hexadecimal
      let decimal = parseInt(grupo, 2);
      let hexadecimal = decimal.toString(16).toUpperCase(); // Convertir a hexadecimal y en mayúsculas
  
      resultadoHexadecimal += hexadecimal; // Agregar el resultado al número hexadecimal final
    }
  
    return resultadoHexadecimal;
  }
B2() {
    let N = document.getElementById("N").value;
    let resultado = this.BA(N);
    document.getElementById("Res").innerText = resultado;
  }
  




}





let ope = new ejercicio()
//ope.Cadena() 

alert("Holaaaaaa")