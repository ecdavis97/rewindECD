//controller function
function getValue(){
    message = document.getElementById("message").value;
    let revMessage = reverse(message);
    displayReversed(revMessage);
}


//business logic
function reverse(message){
    //string? an array of character
    let reversedMessage = "";

    //decrementing for loop
    for (let index = message.length-1; index >=0; index--) {
        
        reversedMessage += message[index];
        
    }

    return reversedMessage;

}

//display the reversed string 
function displayReversed(revMessage){
    let results = document.getElementById("results");
    results.classList.add("revMessage"); //this adds the ability to change the style through CSS
    results.innerHTML = revMessage;
}