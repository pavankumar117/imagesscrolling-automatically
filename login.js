function login123() {
  $('#login123').show();
  $('#login234').hide();
  $('#login345').hide();
  $('#baselogin123').show();
  $('#baselogin234').hide();
  $('#baselogin345').hide();
  setTimeout(login234,5000);
}

function login234() {
  $('#login123').hide();
  $('#login234').show();
  $('#login345').hide();
  $('#baselogin123').hide();
  $('#baselogin234').show();
  $('#baselogin345').hide();
  setTimeout(login345,5000);
}
function login345() {
  $('#login123').hide();
  $('#login234').hide();
  $('#login345').show();
  $('#baselogin123').hide();
  $('#baselogin234').hide();
  $('#baselogin345').show();
  setTimeout(login123,5000);
}

$(document).ready(function(){
  $('#icon').click(function(){
    $('#menu').toggle();
  });
});
