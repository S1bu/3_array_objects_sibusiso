/**
 *Create an array of Objects (At least 3 Objects). Each object should have a URL Link to an image.
Set your array in localStorage.
Get your array from localStorage and store it in a variable called "Information"
Display/Write the content of the variable "Information" on the document and make sure the images are displayed

 */
let information = JSON.parse(localStorage.getItem('list')) //getting items from local storage
let output = document.querySelector('.output') //targeting the output DOM

let randomArray =
 [

    {
        //bugatti 2
        name:'Bugatti',
        type: 'car',
        img :"https://i.postimg.cc/RZ0WNGvh/bugatti-2.jpg",
    },
    
    {
        //maserati
        name:'maserat',
        type :'car',
        img :"https://i.postimg.cc/502L11j7/maserati.jpg",
    },
    
    {
        //bugatti
        name: 'Buggati',
        type :'car',
        img :"https://i.postimg.cc/KvPPn9X5/buggati.jpg",
    }
 ];

//sending list to local storage
localStorage.setItem( 'list',JSON.stringify(randomArray))
  

//Display on html DOM
information.forEach(run => {
    output.innerHTML+=`
    <div class="card" style="width: 20rem;">
  <img src="${run.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${run.name}</h5>
    <p class="card-text">type :${run.type}</p>
  </div>
</div>
    `
});