


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
  var messagesRef = firebase.database().ref('user');
  
  // Listen for form submit
  document.getElementById('registrationform').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
   let name = document.querySelector('#name').value;
   let email = document.querySelector('#email').value;
   let password = document.querySelector('#password').value;
   let bio = document.querySelector('#bio').value;
   let job = document.querySelector('#job').value;
   let interest = document.querySelector('#interest').value;
 
  
    // Save message
    saveMessage(name, email, password, bio, job, interest) ;
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
    window.location="dashboard-completejobs.html";
  
    // Clear form
    document.getElementById('registrationform').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, email, password, bio, job, interest){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        password: password,
        bio: bio,
        job: job,
        Interest: interest
    });
  }


