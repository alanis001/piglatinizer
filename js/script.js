// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

$(document).ready(function() {
     
$("button").click(function(){
    var text = $("#myText").val();
    var latinizertext = ay(text);
    // $("#message").text(text);
    console.log(latinizertext);
    


function ay(){
    var newWord = text[0];
	return newWord + " ay ";
}

$("#text").text(latinizertext);
});
    
});

// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 






// Create the sentenceToPigLatin function that takes a sentence as a parameter
	//Loops through all the words in the sentence and transforms each word
	//It should return a transfromed sentance


