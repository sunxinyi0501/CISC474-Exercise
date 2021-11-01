$( document ).ready(function() {
    console.log( "ready!" );
    $( "#go" ).click(function(){
        $("#jumbotron").append("<h1>" + $("#fname").val() + " " + $("#lname").val() + "</h1>");
        return false;
    });
});