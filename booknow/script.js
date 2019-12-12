let hotel = {
    Rooms: 10
  }
  
  var rooms = 10;
  function myFunction() {
    var booking = document.getElementById("roomsAvailable").value;
    if (booking > rooms) {
        document.getElementById("roomsLeft").innerHTML = "I'm sorry, there are only " + rooms + " rooms left!"
      } else {
    rooms = rooms - booking; document.getElementById("roomsLeft").innerHTML = "There are " + rooms + " rooms left!"
  }
  }