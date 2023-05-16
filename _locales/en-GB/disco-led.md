# DJ Lights

## Add the Neopixel extension
Click on ``||+ Extensions||``. In search bar, enter **neopixel**  
<br> Under search results, look for **`` neopixel - A Neo-Pixel package for pxt-microbit ``**.

## Create a variable 'LED'
Click on ``||Variable||`` then ``||Variable: Make a Variable||``. <br>
Enter  **``New Variable name``**  as **'LED'**

## Setting the value for LED strip 
Click on ``||Neopixel||`` to get the ``||Neopixel:set strip to||`` block. Place it in ``||Start||`` block
<br>**Read and make changes carefully** <br>
Read the value from the **Pin** you connected your LED strip to. Let's assume it is **P1**, ensure it is reflected in your code as ``||Neopixel: DigitalPin.P1||`` . <br>
We have 7 LEDs on our strip so change 24 to 7. <br> 
We are setting the ``||strip||`` to ``||NeoPixelMode.RGB mode||`` with GRB format (Green, Red, Blue)
```blocks
let strip = neopixel.create(DigitalPin.P1, 7, NeoPixelMode.RGB)
```

## Start with a clean display
Add the ``||Neopixel: strip.clear()||`` block in ``||basic.forever||``

```blocks
let LED = 0
let strip = neopixel.create(DigitalPin.P1, 7, NeoPixelMode.RGB)
basic.forever(
    function () {
    strip.clear()
})
```
## Use map
In the ``||Pin:map||`` block, put the ``||NeoPixel.Analog read P1||``

```blocks
let LED = 0
let strip = neopixel.create(DigitalPin.P1, 7, NeoPixelMode.RGB)
basic.forever(
    function () {
     strip.clear()
     LED = pins.map(
     input.soundLevel(),
     0,
     70,
     0,
     7
     )
})
```

## Use map
In the ``||math:map||`` block, put the ``||NeoPixel.Analog read P1||``

```blocks
let LED = 0
let strip = neopixel.create(DigitalPin.P1, 7, NeoPixelMode.RGB)
basic.forever(
    function () {
     strip.clear()
     LED = pins.map(
     input.soundLevel(),
     0,
     70,
     0,
     7
     )
    strip.range(0, LED).showRainbow(1, 255)
})
```

## Use map
In the ``||math:map||`` block, put the ``||NeoPixel.Analog read P1||``

```blocks
let LED = 0
let strip = neopixel.create(DigitalPin.P1, 7, NeoPixelMode.RGB)
basic.forever(
    strip.clear()
    function () {
     LED = pins.map(
     input.soundLevel(),
     0,
     70,
     0,
     7
     )
    strip.range(0, LED).showRainbow(1, 255)
    strip.show()
})
```

## Connect microbit and download
Connect your microbit and download the code. <br> 
Make sure it is not simply getting downloaded on your device.
