$(document).ready(function() {
  $('form#friends').submit(function(event) {
    var funny = $("input:radio[name=funny]:checked").val();
    var smart = $("input:radio[name=smart]:checked").val();
    var romance = $("input:radio[name=romance]:checked").val();

    if (funny === 'very' && smart === 'very' && romance === 'none') {
      $("#monica").show()
    }
    if (funny === 'moderate' && smart === 'equal' && romance === 'romantic') {
      $("#rachel").show()
    }
    if (funny === 'very' && smart === 'none' && romance === 'romantic') {
      $("#phoebe").show()
    }
    if (funny === 'very' && smart === 'none' && romance === 'hopeless') {
      $("#joey").show()
    }
    if (funny === 'moderate' && smart === 'very' && romance === 'romantic') {
      $("#chandler").show()
    }
    if (funny === 'none' && smart === 'equal' && romance === 'hopeless') {
      $("#ross").show()

    } else {
      alert("OOOOPPSSS! Please try again");
    }


    event.preventDefault();

  });
});
