$(function() {


    $('.btn.bank.btn-success').click(function() {
  
      var val = $(this).attr("value");
  
      console.log(val);
  
      $('#editDefinition').append(val);
      $('#Edit').modal('toggle');
  
    });
  
  
  });

