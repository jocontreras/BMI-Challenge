
function Person(attr) {
  this.weight = attr.weight;
  this.height = attr.height;
  this.weight_imperial = attr.weight_imperial;
  this.height = attr.height;
  this.height_inches = attr.height_inches;
  this.height_feet = attr.height_feet;
  this.method = attr.method;
};


/*Person.prototype.calculate_bmi = function() {
  this.bmiValue = 26.01;
  this.bmiMessage = "Overweight"
};*/

Person.prototype.calculate_bmi = function() {
  calculator = new BMICalculator();
  if (this.method == "metric") {
    calculator.metric_bmi(this);
  }else if (this.method == "imperial") {
    calculator.imperial_bmi(this);
  }
  else {
    alert("Please enter a height and weight!")
  };
};
