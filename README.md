# Riddler-Grasshopper
My solution to FiveThirtyEight's Riddler Classic from 6/10/22: [Can You Catch The Grasshopper](https://fivethirtyeight.com/features/can-you-catch-the-grasshopper/)

## My Answser
>After many, many failed attempts to catch the grasshopper, where is it most likely to be on the beam?

The grasshopper is most likely to be found in the middle section of the beam, where "middle section" is defined as the end positions of the beam minus the hopping disatance (20cm, in this case). To be specific, the grasshopper is equally likely to be anywhere between 20cm and 80cm. Each position in the middle section of the beam has a 1.117% chance of containing the grasshopper, and there is a 65.93% chance that the grasshopper is in the middle section of the beam.

>Where is it least likely?

The grasshopper is least likely to be found at either end of the beam. Each end position (0cm and 100cm) has only a 0.559% chance of containing the grasshopper.

>And what is the ratio between these respective probabilities?

- Ratio of least likely to most likely (single position): 2.00 (1.117% / 0.559%)
- Ratio of least likely to most likely (entire middle section): 117.9 (65.93% / 0.559%)

## My Method
I'm not very good at stats and probability, so I decided to simulate it and plot the results. I simulated the grashopper hopping 100,000,000 times and generated this graph as a result (you can also load it yourself [here](https://ksbowden.github.io/Riddler-Grasshopper/grasshopper.html)):

<img width="1680" alt="Screen Shot 2022-06-15 at 5 28 54 PM" src="https://user-images.githubusercontent.com/12500905/173933157-39d49f99-dd79-4d5b-9bd4-155ed5c59996.png">
