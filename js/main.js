var myNum = Math.ceil(Math.random()*100)
console.log(myNum)
var input = document.getElementById("answer")
var btn = document.getElementById("btn")
var results = document.getElementById("results")


function guess() {
	if (input.value == myNum) {
	results.className = "correct"
	results.textContent = "You guessed my number!!!"
step()
	return

}  else if (input.value < myNum){
	results.className = "incorrect"
	results.textContent = "Guess higher"
	$('#results').addClass('animated swing 3000');
	
}
	else if(input.value > myNum) {
		results.className = "incorrect1"
	results.textContent = "Guess lower"
	$('#results').addClass('animated swing 3000');
	
	}
	input.value= ""

}// end function

   $("#answer").keypress(function(event){
    if(event.keyCode == 13){
        event.preventDefault();
        $("#btn").click();
    }
});







