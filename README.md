# BMI-Challenge
Body mass index (BMI) is a simple tool that is generally used to estimate the total amount of body fat. In this challenge we will write a JavaScript program that calculates an individual's BMI index.

## How To Calculate BMI

To calculate BMI, you need to know your weight and height in kilograms and centimeters or meters (Metric Method). The weight of a person is then divided by the height.

If you know your height and weight in inches and pounds the calculation is a little more complex (Imperial Method).

### Metric Method

The metric formula accepts height measurements in meters and weight in kilograms. If you know your height in centimeters only, simply divide the number of centimeters by 100 convert it to meters.

For example, a person who is 183 cm tall is 1.83 m tall (183 cm / 100 = 1.83 m).

Three simple steps for computing BMI with  values:
1. Multiply your height by itself.
2. Divide your weight in kilograms by the value calculated in step 1.
3. The resulting number is your BMI. Compare this BMI value with the weight status table below.

### Imperial Method

The imperial formula accepts height measurements in inches and weight in pounds. It's popular in the US where the imperial system is mostly used. Many people know their height in feet and inches, but not in inches only.

If this applies to you, we need to convert your height into inches so we can use it in the equation. There are 12 inches in a foot, so multiply your number of feet by 12 and add them to the number of extra inches.

For example, if your height is 5 feet 10 inches, multiply 5 by 12 (which gives 60") and add them to the extra 10 inches (which gives 70").

Now we have the right measurements we can use them in the formula.

Three simple steps for computing BMI with imperial values:
1. Multiply your weight in pounds by 703.
2. Multiply your height in inches by itself
3. Divide the figure from step 1 by the figure in step 2. The resulting number is your BMI.


## Testing
Testing with Jasmine


## Sample Run
Visit my Github Page: https://jocontreras.github.io/BMI-Challenge/

## Screen Shots:

### Homepage: 
Enables the user to select Metric or Imperial method in calculating their BMI.

![index_page](https://user-images.githubusercontent.com/13605349/29285443-cfbdcdca-812e-11e7-8b49-8b2f3bcdf360.png)

### Applying Metric Method: 
![metric method](https://user-images.githubusercontent.com/13605349/29286357-1814fc1c-8132-11e7-9351-7fc471ea4f61.png)

### Applying Imperial Method: 

![imperial method](https://user-images.githubusercontent.com/13605349/29286619-fceec750-8132-11e7-895f-3981186d5fab.png)

