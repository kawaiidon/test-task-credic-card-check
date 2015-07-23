$(document).ready(function(){
  $("#paymentForm").validate({
  //Отключение всплывающих текстовых сообщений об ошибке
  errorPlacement: function(error,element) {
    return true;
  },
    rules: {
      cardnum1: {
        required: true,
        digits: true,
        rangelength: [4,4]
      },
      cardnum2: {
        required: true,
        digits: true,
        rangelength: [4,4]
      },
      cardnum3: {
        required: true,
        digits: true,
        rangelength: [4,4]
      },
      cardnum4: {
        required: true,
        digits: true,
        rangelength: [4,4]
      },
      cardname: {
        required: true,
        namecheck: true,
        minlength: 4  
      },
      cardcvv: {
        required: true,
        digits: true,
        rangelength: [3,3]
      }

    }
      
  });   // Для проверки ввода латинских букв.
        $.validator.addMethod("namecheck",
        function(value, element) {
            return /^[A-Za-z]+$/.test(value);
    });
});

