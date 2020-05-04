const nameList = document.querySelector('#name-list')
const form = document.querySelector('#add-cafe-form')


var firebaseConfig = {
    apiKey: "AIzaSyDkrgPgmimPxPyZj9lbXaMFx59g6pRTUWI",
    authDomain: "webproject-2ada8.firebaseapp.com",
    databaseURL: "https://webproject-2ada8.firebaseio.com",
    projectId: "webproject-2ada8",
    storageBucket: "webproject-2ada8.appspot.com",
    messagingSenderId: "251957514726",
    appId: "1:251957514726:web:8769431263e8678399c627",
    measurementId: "G-TVM6X07NZV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.auth.Auth.Persistence.LOCAL;
   
  const db =  firebase.firestore();
       

//create element and render name

// function renderValues(child_id,date,amount){
//   let li = document.createElement('li');
//   let name = document.createElement('span');
//   let city = document.createElement('span');

//   li.setAttribute('data-id',child_id);
//   name.textContent = date;
//   city.textContent = amount;
//   li.appendChild(name);
//   li.appendChild(city);

//   nameList.appendChild(li);
  
// }
//getting data
function renderValues(child_id,date){
  let li = document.createElement('li');
  let name = document.createElement('span');
  let city = document.createElement('span');
  let cross = document.createElement('div');
  cross.textContent = '>';
  li.setAttribute('data-id',child_id);
  name.textContent = date;

  li.appendChild(name);
  li.appendChild(cross);

  nameList.appendChild(li);
  cross.addEventListener('click', (e) => {
    e.stopPropagation();
    let id = e.target.parentElement.getAttribute('data-id');
    globalPizzaName = id
    console.log(globalPizzaName)

    window.open("pizzadata.html?id="+id,"_self")
});
}


var firebaseDatabase = firebase.database();

// var dbBlogs = firebaseDatabase.ref().child("pizza").child("Antipasto");

// dbBlogs.on("value",function(snapshot){
//   if (snapshot.exists()){
//    snapshot.forEach(function(singleVal){
     
//     renderValues(singleVal.child_id,singleVal.val().date,singleVal.val().amount);
//    })
//   }
// })

var dbBlogs = firebaseDatabase.ref().child("pizzanames");

dbBlogs.on("value",function(snapshot){
  if (snapshot.exists()){
   snapshot.forEach(function(singleVal){
     
    renderValues(singleVal.val(),singleVal.val());
   })
  }
})

