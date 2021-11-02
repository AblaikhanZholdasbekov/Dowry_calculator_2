var education = document.getElementById("education");  //DOM getElementById() Method
var networth = document.getElementById("networth");
var caste=document.getElementById("Caste");
var skills=document.getElementById("skills");
var age=document.getElementById("Age");                          //saving all elements
var reputation=document.getElementById("Reputation");  

const calculate=()=>{           //my arrow function.It is more readable than the usual functions
    let name = document.getElementById('name').value; //declaring a variable with let
    let price = document.getElementById('startingBid').value;
    let letter = document.getElementById('letter').value;
  
  
    if(name != "" && price != ""){  
      price = Number(price);
      //EDUCATION
      const education = document.getElementById('education').value;  //3
       price *= Number(education);
      console.log(price);
      //FAMILY
      const family = document.getElementById('networth').value; //4
      price *= Number(family);
      console.log(price);
      //CASTE
      const caste = document.getElementById('Caste').value;
      if(caste.value=='-50'){   //if caste is equal to -50(Varna - untouchable (-50$)) then it will take away from price
        price -= Number(caste);
        console.log(price);
      }else {
          price += Number(caste);  //otherwise adding 
      console.log(price);
      
      }
      
  
      const skills = document.getElementsByName('skills');  //6
      //here i used forEach as in AGE because i did filterReduce but not fully i think.
      /* price = getCheckboxValuesReduce(skills, price)
      const getCheckboxValuesReduce = (skills, price) => { // create a function that accepts your HTMLCollection of elements and the current price
    let list = Array.from(skills).filter(filteration) // this method turn your HTMLCollection into array
    let result = list.reduce((price,item)=>{
         if(item.checked){ 
         price+Number(item.value)
         console.log(price); 
        }
         }
         return result;
    })
      */   /**This is my attempt to make Array filter Reduce, it seems to have done correctly, but it gives an error in the console, 
              I guess that the getValue function does not work here because the 
               Function is inside the function. I also wrote the condition correctly, the code first checks and adds coefficients */
        
    
      skills.forEach(item => {
      //and then decided to do with forEach
          if (item.checked) {
  
              price += Number(item.value);
              console.log(price);
  
          }
  
      })
  
  const ages = document.getElementsByName('Age');  //first of all,saving element  //7
  
  ages.forEach(item => {  //by  example that u shared, i take frame of code, it was helpful
  
      if (item.checked) { // first it will check
  
          price *= Number(item.value);  //then multiply by coefficient which are values 
          console.log(price);
  
      }
  
  })
  //REPUTATION
  const reputation=document.getElementsByName("Reputation");   //8
   for (var i = 0; i < reputation.length; i++) {
     
      if (reputation[i].checked && reputation[i].value == '20') {     //here if reputation value is equal to '20'
  
          price -= Number(reputation[i].value);    //it will take away -20
          console.log(price);
  
      } else if (reputation[i].checked) {  // and else it will add the values thaat we have 
  
          price *= Number(reputation[i].value);
          console.log(price);
  
      }
  
  }
  //Save everything as an object with 3 properties (name, price, and love letter). //OBJECT
  let person = {
  
    bride_name: name,
  
    bride_price: price,
  
    letter_to_bride: letter
  
  }
  
  
  
  //alert +console to see in console
  alert(`The price for your bride ${person.bride_name} is ${person.bride_price}. Your love letter is "${person.letter_to_bride}"`);
  console.log(`The price for your bride ${person.bride_name} is ${person.bride_price}. Your love letter is "${person.letter_to_bride}"`);
  
  } else {
  
  alert('Enter name and starting bid!');
  console.log('Enter name and starting bid!');
  
  }
  
    }
    let button = document.getElementById('button');
  
  button.addEventListener('click', calculate);
  