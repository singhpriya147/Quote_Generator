const btn = document.getElementById('btn');
const quote = document.querySelector('.quote');
const person=document.querySelector('.person')



// Fetch the JSON data from your file
fetch('quote.json')
  .then(response => response.json())
  .then(data => {
    // Use the data to manipulate the DOM
    console.log(data.quotes);
       btn.addEventListener("click",()=>{
        let random=Math.floor(Math.random()*data.quotes.length);
        quote.innerText=data.quotes[random].quote;
        person.innerText=data.quotes[random].author;
       })
  })
  .catch(error => {
    console.error('Error:', error);
  });





