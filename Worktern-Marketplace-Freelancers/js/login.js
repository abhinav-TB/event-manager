


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDCwbOZa_IPC9unxXA9ChnS7am1_k8g5zA",
    authDomain: "em-platform-253dc.firebaseapp.com",
    databaseURL: "https://em-platform-253dc.firebaseio.com",
    projectId: "em-platform-253dc",
    storageBucket: "em-platform-253dc.appspot.com",
    messagingSenderId: "199362652316",
    appId: "1:199362652316:web:828a9fe0e45f7ce692e559",
    measurementId: "G-M65M26ZXRQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
   // Reference messages collection
   var messagesRef = firebase.database().ref('messages');
  
   // Listen for form submit
   document.getElementById('events').addEventListener('submit', submitForm);
   
   // Submit form
   function submitForm(e){
     e.preventDefault();
   
     // Get values
     var name = getInputVal('name');
     var caption = getInputVal('caption');
     var description = getInputVal('description');
     var status = getInputVal('status');
     var NAME =getInputVal('NAME');
     var image = getInputVal('imgInp');
     var phone = getInputVal('phone');
   
     // Save message
     saveMessage(name , caption , description , status  ,NAME,image, phone);
   
     // Show alert
     document.querySelector('.alert').style.display = 'block';
   
     // Hide alert after 3 seconds
     setTimeout(function(){
       document.querySelector('.alert').style.display = 'none';
     },3000);
   
     // Clear form
     document.getElementById('events').reset();
   }
   
   // Function to get get form values
   function getInputVal(id){
     return document.getElementById(id).value;
   }
   
   // Save message to firebase
   function saveMessage(NAME , caption , description , status  ,NAME,image, phone){
     var newMessageRef = messagesRef.push();
     newMessageRef.set({
       name: name,
       caption : caption,
       description : description,
       status : status,
       NAME :NAME,
       image: image,
       phone : phone
     });
   }


