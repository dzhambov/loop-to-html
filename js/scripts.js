$(document).ready(function() {
  $("form#flavors").submit(function(event) {
    event.preventDefault();
    var flavors = ["vanila", "choccolate", "black-cow", "mint-chocco-chips", "caramel"];

    flavors.forEach(function(flavor) {
      $("#" + flavor).append(flavor);
    })

  });
});