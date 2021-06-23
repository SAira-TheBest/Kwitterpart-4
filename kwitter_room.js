var userName = localStorage.getItem("user_name")

function addRoom(){
    Room_names = document.getElementById("room_name").value
console.log(Room_names)
firebase.database().ref("/").child(Room_names).update({
      purpose : "adding room name"
});

localStorage.setItem("Room_names", Room_names);

window.location ="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
 Room_names = childKey;
 //Start code
 console.log("Room Name -", Room_names);
    row = "<div class='room names' id="+Room_names+"onclick = 'redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"
    document.getElementById("output").innerHTML += row;
 //End code
 });});}
getData();
function redirectToRoomName(){
    localStorage.setItem("Room_names" )
    window.location = "kwitter_page.html";
}


