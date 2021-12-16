
let edad = parseInt(prompt("Por favor Ingrese su edad")) ;

 
if(edad >= 18 && edad < 30)
{
    document.write("Eres un joven"); 
}

else if(edad >= 30 && edad < 60) 
{
    document.write("Eres un adulto");
}

else if (edad >=60)
{
    document.write("eres un adulto mayor");  
}

else if (edad >= 120)
{
    document.write("error");  
}

else
{
    document.write("Eres un niño"); 
}



