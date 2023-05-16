# DJ Lights

## Add the Neopixel extension
Click on ``||+ Extensions||``. In search bar, enter **neopixel**  
<br> Under search results, look for **`` neopixel - A Neo-Pixel package for pxt-microbit ``**.

## Create a variable 'LED'
Click on ``||Variable||`` then ``||Variable: Make a Variable||``. <br>
Enter **``New Variable name``** as **LED**

## Create a second variable 'item'
Click on ``||Variable||`` to create a new variable **item**
```blocks
let item = 0
```

## Set the value of 'item' 
Read the value from **Pin** ``||DigitalPin.P1||`` for LED strip. <br>
We have 7 LEDs on our strip and we are setting the ``||item||`` to ``||NeoPixelMode.RGB mode||`` (Red, Green, Blue)
```blocks
let item = neopixel.create(DigitalPin.P1, 7, NeoPixelMode.RGB)
```

## Use map
In the ``||math:map||`` block, put the ``||NeoPixel.Analog read P1||``

## Complete code
```blocks
let LED = 0
let item = neopixel.create(DigitalPin.P1, 7, NeoPixelMode.RGB)
basic.forever(function () {
    LED = pins.map(
    input.soundLevel(),
    0,
    70,
    0,
    7
    )
    item.clear()
    item.range(0, LED).showRainbow(1, 255)
    item.show()
})
```