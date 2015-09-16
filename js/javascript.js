/* Nina's awesome Javascript file */

$( document ).ready(function() {

  //Creating an array called images for all the images.
  var imageArray = ["images/austin.jpg","images/la.jpg","images/nyc.jpg","images/sf.jpg","images/sydney.jpg"];

  function changeImage(imageIndex){
    //Create a variable called 'city' with the input value and convert it to lowercase letters
    var city = $('#city-type').val().toLowerCase();

    //Change the body background image to the value of the variable imageIndex
    function bodyCss() {
      $('body').attr('style','background-image: url(' + imageIndex + ')');
    }

    //If the input value is a name of a city, change the value of the variable imageIndex to the relevant image number in the array imageArray
    switch (city) {
      case 'austin':
      case 'atx':
        var imageIndex = imageArray[0];
        bodyCss();
      break;
      case 'los angeles':
      case 'la':
      case 'lax':
        var imageIndex = imageArray[1];
        bodyCss();
      break;
      case 'new york':
      case 'nyc':
      case 'new york city':
        var imageIndex = imageArray[2];
        bodyCss();
      break;
      case 'san francisco':
      case 'sf':
      case 'bay area':
        var imageIndex = imageArray[3];
        bodyCss();
      break;
      case 'sydney':
      case 'syd':
        var imageIndex = imageArray[4];
        bodyCss();
      break;

      //If the input value is something else than stated above, show the following message
      default:
        alert("I'm sorry, that city doesn't exist in the world.");
    }
   }

  //When form is submitted, prevent the default function and run the function changeImage
  $('form').on('submit', function(event) {
    event.preventDefault();
    changeImage();
  });
});
