/*====== Psuedocode! BY CAS! <^^> =======

*/


$(document).ready(function() {
// animation for middle text
let byline = document.getElementById('byline');
bylineText = byline.innerHTML;
bylineArr = bylineText.split('');
byline.innerHTML = '';

let span;
let letter;

for(i=0;i<bylineArr.length;i++){
  span = document.createElement("span");
  letter = document.createTextNode(bylineArr[i]);
  if(bylineArr[i] == ' ') {
    byline.appendChild(letter);
  } else {
    span.appendChild(letter);
    byline.appendChild(span);
  }
}
  // hide scroll bar
  setTimeout(hideURLbar, 0);
  function hideURLbar(){ window.scrollTo(0,1);

  // prevent Default
  $('#search-form').submit(function(e){
      e.preventDefault()
  })

  // grab value from form
  $('#search-btn').click((event) =>{
    event.preventDefault()
    yodaTalk = $('#yoda-box').val().toLowerCase()
    console.log(yodaTalk)

  // if no value, exit
    if (!yodaTalk){
    return;
    }

  // parameter for call
    search(yodaTalk)

  //clear form
    $('#yoda-box').val('')
    })
  }

  // async function begins

  async function search(yodaTalk) {

    console.log(yodaTalk)
    // try {

      const url = 'https://yodish.p.rapidapi.com/yoda.json'

      let response = await fetch(url, {
        method: 'POST',
        headers: {
          "x-rapidapi-host": "yodish.p.rapidapi.com",
          "x-rapidapi-key": "YOUR API KEY",
          "content-type": "application/json"
        },
        body: JSON.stringify({"text": yodaTalk})
      }).then((response) => response.json()).catch((err) => console.log(err))
      console.log(response)
    //   await axios.post(url, {
    //       params: {
    //       text: yodaTalk
    //     },
    //     headers: {
    //       "x-rapidapi-host": "yodish.p.rapidapi.com",
    //       "x-rapidapi-key": "fda0bef684msh11c0a151cb3dbc4p1d4251jsn1ffbc7da45f5",
    //       "content-type": "application/x-www-form-urlencoded"
    //     },
    //     })
    //     console.log(response)
        displayResults(response)
    //
    //   } catch (error) {
    //     console.log(error)
    //     alert('Please enter a valid string')
    //   }
    // }
}
  function displayResults(yodaData) {

  // add yoda text back to html
  $('#translation').text(`${yodaData.contents.translated}`)
 }
// end document ready
})
