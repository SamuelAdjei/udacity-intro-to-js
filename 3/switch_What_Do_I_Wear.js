switch (true) {
    case (shirtWidth >= 18):
        shirtWidth = "S";
        break;
    case (shirtWidth >= 20):
        shirtWidth = "M";
        break;
    case (shirtWidth >= 22):
        shirtWidth = "L";
        break;
    case (shirtWidth >= 24):
        shirtWidth = "XL";
        break;    
    case (shirtWidth >= 26):
        shirtWidth = "2XL";
        break;    
    case (shirtWidth >= 28):
        shirtWidth = "3XL";
        break;
    default :
        shirtWidth = "Y";
}
switch (true) {
    case (shirtLength >= 28):
        shirtLength = "S";
        break;
    case (shirtLength >= 29):
        shirtLength = "M";
        break;    
    case (shirtLength >= 30):
        shirtLength = "L";
        break;  
    case (shirtLength >= 31):
        shirtLength = "XL";
        break;    
    case (shirtLength >= 33):
        shirtLength = "2XL";
        break;    
    case (shirtLength >= 34):
        shirtLength = "3XL";
        break;    
    default :
         shirtLength = "X";
         }  
switch (true) {
    case (shirtSleeve >= 8.13):
        shirtSleeve = "S";
        break;
    case (shirtSleeve >= 8.38):
        shirtSleeve = "M";
        break;  
    case (shirtSleeve >= 8.63):
        shirtSleeve = "L";
        break;    
    case (shirtSleeve >= 8.88):
        shirtSleeve = "XL";
        break;
    case (shirtSleeve >= 9.63):
        shirtSleeve = "2XL";
        break;    
    case (shirtSleeve <= 10.13):
        shirtSleeve = "3XL";
        break;    
    default :
        shirtSleeve = "Z";
}
 
if (shirtSleeve === shirtLength && shirtLength === shirtWidth) {
    console.log(shirtSleeve);
   
} else {
    console.log("N/A");
}