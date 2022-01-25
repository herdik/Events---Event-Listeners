


  $('#btn1').on('click', () => { 
    console.log('Yeah, you clicked me'); 
  });

 



$('#btn2').on('click', () => { 
    $('#btn1').text("Remove"); 
 
  });

  


$('#btn3').click(() => {
    $('button').css('background', 'green');
    
  })


  /* Add some fun feature to your Event Listeners */

  /* Exercise 1 */
  
  $('#btn3').click(() => {
	let color = $('input').val();
	$('button').css('background-color', `${color}`);
});