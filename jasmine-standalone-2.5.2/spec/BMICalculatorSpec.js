describe("BMICalculator", function() {
  var calculator;
  var person;

  beforeEach(function() {
    person = new Person({weight: 90, height: 186});
    calculator = new BMICalculator();
  });

  it("Calculates BMI using metric method", function() {
    calculator.metric_bmi(person);
    expect(person.bmiValue).toEqual(26.01);
  });

  it ("Prompts a BMI message", function(){
    calculate.bmi(person);
    expect(person.bmiMessage).toEqual("overweight");
  });

    });

  describe ("Calculates BMI using imperial method", function(){
      beforeEach(function(){
        person = new Person({weight: 140, height_feet: 5, height_inches: 0});
        calculate = new BMICalculator();
      });

      it("Calculates BMI using imperial method", function() {
        calculator.imperial_bmi(person);
        expect(person.bmiValue).toEqual(27.33);
      });
  });
