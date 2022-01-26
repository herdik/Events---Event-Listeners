


  $('#btn1').on('click', function(e){
    console.log('Yeah, you clicked me'); 
    $( this ).off(e); /* Exercise 2 */
  });

 



$('#btn2').on('click', (e) => { 
    $('#btn1').text("Remove"); 
    $( this ).off(e); /* Exercise 2 */
  });

  


$('#btn3').click((e) => {
    $('button').css('background', 'green');
    $( this ).off(e); /* Exercise 2 */
  })


  /* Add some fun feature to your Event Listeners */

  /* Exercise 1 */
  $("#btn3").click(function(e) {
    let color = $('input').val();
	$('button').css('background-color', `${color}`)
  $( this ).off(e); /* Exercise 2 */
  });

