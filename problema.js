const fecha=new Date();
var Dia=fecha.getDate();
const si=document.getElementById("imagenProblema");
const mes=fecha.getMonth()+1;

if(mes==3){
if(Dia==7){si.src="Semana 1 Geo/Problema Lunes .jpg";}
else if(Dia==8){ si.src ="Semana 1 Geo/Problema Martes.jpg";}
else if(Dia==9){ si.src = "Semana 1 Geo/Problema Miercoles.jpg"}
else if(Dia==10){ si.src= "Semana 1 Geo/Problema Jueves.jpg"}
else if(Dia==11){si.src="Semana 1 Geo/Problema Viernes.jpg"}
else if(Dia==12){si.src="Semana 1 Geo/Problema Sabado.jpg"}
else (si.src="Semana 1 Geo/Problema Domingo.jpg")


}
       
        
      