Qualtrics.SurveyEngine.addOnload(function() {
    // Prevent copy paste
    jQuery("#"+this.questionId+" textarea,input[type=text]").on("paste", function(e) { 
    e.preventDefault();
    alert("Pasting is not allowed here.");
    });
    
    
    let allReferenceNGrams = [];
    
    function validateInput() {

      // Get the user's input from the text area
      var inputText = jQuery(this).val();
     
    
    
    // Define the parameters for the Google Custom Search API request
    var apiKey = "XYZ"; // Replace with your Google Custom Search API key

    
    var searchEngineId = "XYZ"; // Replace with your Custom Search Engine ID

    var apiUrl =
      "https://www.googleapis.com/customsearch/v1?key=" +
      apiKey +
      "&cx=" +
      searchEngineId +
      "&q=" +
      encodeURIComponent(inputText);
    
    // Create a new XMLHttpRequest instance
    var xhr = new XMLHttpRequest();
    
    // Set up the request
    xhr.open("GET", apiUrl, false);
    
    //   // Set the response type to JSON
    //   xhr.responseType = "json";
    
    var result = false;
    
    // Define the event listener for when the request is complete
    // x = result;
    
    xhr.onload = function (event) {
      
      
      if (xhr.status === 200) {
       
        var searchResults = JSON.parse(xhr.response).items;
        if(typeof searchResults=== "undefined"){
       
         alert("Error: See if you have any special characters and/or missplled words!"); 
    
      document.querySelector('#NextButton').disabled = true;
      document.querySelector('#PreviousButton').disabled = true;
    
        
        } else {
    
          var searchResultsText = "";
          for (var i = 0; i < searchResults.length; i++) {
          searchResultsText += searchResults[i].snippet + "\n";
        }
    
        }
    
      } else {
        
         document.querySelector('#NextButton').disabled = false;
         document.querySelector('#PreviousButton').disabled = false;
    
      }
    
    
          function checkConsecutiveWordMatch(userText, referenceText, n) {
            
            const referenceWords = referenceText.toLowerCase().split(' ');
            const userWords = userText.toLowerCase().split(' ');
            
            const userNGrams = [];
            for (let i = 0; i <= userWords.length - n; i++) {
              userNGrams.push(userWords.slice(i, i + n).join(' '));
            }
    
            const referenceNGrams = [];
            for (let i = 0; i <= referenceWords.length - n; i++) {
              referenceNGrams.push(referenceWords.slice(i, i + n).join(' '));
              
            }
            // Store reference n-grams in the global array
            allReferenceNGrams = [...allReferenceNGrams, ...referenceNGrams];                    
    
              // Log the generated n-grams to the console
    
    
            for (const ngram of userNGrams) {
              if (allReferenceNGrams.includes(ngram)) {
                return true;
              }
            }
    
            return false;
          }
          
    
           var referenceText = searchResultsText;
           var userText = inputText;
           const n = 5;
    
          const isMatch = checkConsecutiveWordMatch(userText, referenceText, n);
    
          if (!isMatch) {
        
              //document.querySelector('#NextButton').disabled = false;// this line also work
        document.querySelector("#NextButton").removeAttribute("disabled");
        document.querySelector("#PreviousButton").removeAttribute("disabled");
    
        //setTimeout(function () {jQuery('#NextButton').click();},100);
              
    
          }
          else{
          alert('The input text appeared to be copied from the internet. Please tell us what you have observed.');
          document.querySelector('#NextButton').disabled = true;
          document.querySelector('#PreviousButton').disabled = true;
    
          }
    
    
    
    };
    
    // Send the request
    xhr.send();
    
    
    
    }
    
    
         jQuery("#" + this.questionId + " textarea, input[type=text]").on("blur", function() {
       validateInput.call(this);
    
    });
        
    
    
    
    });