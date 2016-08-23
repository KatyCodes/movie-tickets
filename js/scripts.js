//business logic
function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}
// Ticket.prototype.ticketPrice = function() {
//   return this.movie , this.time , this.age;
// }

//user interface logic
$(document).ready(function(){
  $("form").submit(function(event) {
    event.preventDefault();

    var inputtedMovie = parseInt($("#movies").val());
    var inputtedTime = parseInt($("#time").val());
    var inputtedAge = parseInt($("#age").val());
    var newTicket = (inputtedMovie + inputtedTime + inputtedAge);
    $(".finalPrice").text(" " + "$" + newTicket);
  });
});
