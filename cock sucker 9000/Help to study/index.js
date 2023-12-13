
const { Console } = require("console");
var fs = require("fs"); 
console.log(" Writing into an file "); 
  
const frågor = { //alla frågorna ska vara här
ämne_1:{ fråga_1 : ["vad blir 1+1"]}
};

//const ämnen = {kemi : frågor={} , matte: frågor = {1: "1+1=?"}}
//console.log(ämnen.matte[1])
const frågor1 = {}; 



const svar= { // alla svaren ska vara här
    svar_ämne1 : { svar_1 :["test true"]}
}

// Sample.txt is an empty file 
fs.writeFile( 
  "questions.txt", 
  frågor.ämne_1.fråga_1[0], 
  function (err) { 
    if (err) { 
      return console.error(err); 
    } 
  
    // If no error the remaining code executes 
    console.log(" Finished writing "); 
    console.log(" Reading the data that's written"); 
    
    function Rättning(data) {
        if (frågor.ämne_1.fråga_1[0] === svar.svar_ämne1.svar_1[0]){
            return data+"   rätt" //skriver ut Rätt
        }else{
            return data+"   fel "+" rättsvar: "+svar
        .svar_ämne1
        [0] //skriver ut fel och vad som är rätt
        }
    }

    // Reading the file 
    fs.readFile("questions.txt", function (err, data) { 
      if (err) { 
        return console.error(err); 
      } 
      console.log( " Data read : " + Rättning(data).toString() ); 
        
    }); 
  } 
); 
/* todo:
            - gör så de är mer av ett träd (frågor svar)
            - gör (frågor svar har en separat för avancerade svar)
            - gör så den kan välja en random fråga och sen få svar 
            - länka ihop detta tillsammans med en basic ui i HTML
            - gör så den kan ta in och tolka svar
            
            */

fs.writeFile( 
  "awnsers.txt", 
  frågor.ämne_1.fråga_1[0], 
  function (err) { 
    if (err) { 
      return console.error(err); 
    } 



    fs.readFile("awnsers.txt", function (err, data) { 
      if (err) { 
        return console.error(err); 
      } 
      console.log( " Data read : " + data.toString() ); 
        
    }); 
  } 
); 

