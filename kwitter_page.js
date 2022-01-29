var firebaseConfig = {
      apiKey: "AIzaSyCmsthtwND9BiKWAC5opoKed2udp7imFBk",
      authDomain: "kwitter-89b59.firebaseapp.com",
      databaseURL: "https://kwitter-89b59-default-rtdb.firebaseio.com",
      projectId: "kwitter-89b59",
      storageBucket: "kwitter-89b59.appspot.com",
      messagingSenderId: "996801738734",
      appId: "1:996801738734:web:e1ba0278442fdcdec540ff"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    Username = localStorage.getItem("Username");
    room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      msg=document.getElementById("message").value;
      firebase.database().ref(room_name).push({
            name:Username,
            message:msg,
            like:0
      });
      document.getElementById("message").value="";
}