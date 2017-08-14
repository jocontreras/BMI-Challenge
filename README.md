# BMI-Challenge
Body mass index (BMI) is a simple tool that is generally used to estimate the total amount of body fat. In this challenge we will write a JavaScript program that calculates an individual's BMI index.

## How To Calculate BMI

To calculate BMI, you need to know your weight and height in kilograms and centimeters or meters (Metric Method). The weight of a person is then divided by the height.

If you know your height and weight in inches and pounds the calculation is a little more complex (Imperial Method).

### Metric Method

The metric formula accepts height measurements in meters and weight in kilograms. If you know your height in centimeters only, simply divide the number of centimeters by 100 convert it to meters.

For example, a person who is 183 cm tall is 1.83 m tall (183 cm / 100 = 1.83 m).

Multiply your height by itself.
Divide your weight in kilograms by the value calculated in step 1.
The resulting number is your BMI. Compare this BMI value with the weight status table below.

### Imperial Method

The imperial formula accepts height measurements in inches and weight in pounds. It's popular in the US where the imperial system is mostly used. Many people know their height in feet and inches, but not in inches only.

If this applies to you, we need to convert your height into inches so we can use it in the equation. There are 12 inches in a foot, so multiply your number of feet by 12 and add them to the number of extra inches.

For example, if your height is 5 feet 10 inches, multiply 5 by 12 (which gives 60") and add them to the extra 10 inches (which gives 70").

Now we have the right measurements we can use them in the formula.

There are three simple steps for computing BMI with imperial values:

Multiply your weight in pounds by 703.
Multiply your height in inches by itself
Divide the figure from step 1 by the figure in step 2. The resulting number is your BMI.

## Sample Run
<br>
<img src = "https://github.com/jocontreras/BMI-Challenge/images/index_page.png" />
<br>
