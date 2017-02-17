
method = "metric";
  $(document).ready(function () {
    $('#imperial_data').hide();
    $('#bgpicture').show();

    $('#bmi_menu input[type="radio"]').change(function () {
      if ($('#bmi_menu input[type="radio"]:checked').val() == "metric") {
        $('#metric_data').show();
        $('#imperial_data').hide();
        num_switch = '#bmi_menu input[type="number"]'
        $('num_switch, #weight_imperial').val("");
        $('num_switch, #height_inches').val("");
        $('num_switch, #height_feet').val("");
        $('#display_value').html('');
        $('#display_message').html('');
        method = "metric";
      } else {
        $('#metric_data').hide();
        $('#imperial_data').show();
        $('num_switch, #weight').val("");
        $('num_switch, #height').val("");
        $('#display_value').html('');
        $('#display_message').html('');
        method = "imperial";
      };
    });

    $('#calculate').click(function () {
      if ($('#weight').val() == "" && $('#weight_imperial').val() == "" ) {
        alert("Oooopsss...please enter your weight in the textbox!");
      };
      if ($('#height').val() == "" && ($('#height_feet').val() == "" )) {
        alert("Oooopsss...Please enter your height in the height textbox.");
      };
      if ($('#height_inches').val() == "") {
        var hi = 0;
      } else {
        var hi = parseFloat($('#height_inches').val());
      };
      var w = parseFloat($('#weight').val());
      var wi = parseFloat($('#weight_imperial').val());
      var h = parseFloat($('#height').val());
      var hf = parseFloat($('#height_feet').val());

      var person = new Person({weight: w, weight_imperial: wi, height: h, height_feet: hf, height_inches: hi, method: method});
      person.calculate_bmi();
      $('#display_value').html('Your BMI is ' + person.bmiValue);
      $('#display_message').html('and you are '+ person.bmiMessage);
    });

    $('#metric_frm').keypress(function(e){
    if(e.which == 13){
        $('#calculate').click();
    }});

    $('#imperial_frm').keypress(function(e){
    if(e.which == 13){
        $('#calculate').click();
      }
    });
  });
