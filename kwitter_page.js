var room_name = localStorage.getItem("Room_names")
var user_name = localStorage.getItem("user_name")

var firebaseConfig = {
      apiKey: "AIzaSyCtYPNIc9oK6wh1ZXB55f6MGICIjvFP7B0",
      authDomain: "kwitter-a3357.firebaseapp.com",
      databaseURL: "https://kwitter-a3357-default-rtdb.firebaseio.com",
      projectId: "kwitter-a3357",
      storageBucket: "kwitter-a3357.appspot.com",
      messagingSenderId: "164303718129",
      appId: "1:164303718129:web:b4935af15d646a2f2c8b50"
    };
    // Initialize Firebase
    
    firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+ room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>"+ name + "<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>"+message+"</h4>";
like_button = "<button class = 'btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>";
span_with_tag = "<span class ='glyphicon glyphicon-thumbs-up'> like: "+like+"</span></button> <hr>";
row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML+=row;

//End code
      } });  }); }
getData();
function updatelike(message_id){
      console.log("click on like button-"+ message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updatedlikes = Number(likes)+1;
      console.log(updatedlikes);
      firebase.database().ref(room_name).child(message_id).update({
            like:updatedlikes
      });
}
function Send(){
var msg = document.getElementById("msg").value
firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
})
      document.getElementById("msg").value="";
}

function log_out(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("Room_names")
      window.location.replace("index.html");
}
