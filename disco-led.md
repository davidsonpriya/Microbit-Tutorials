# DJ Lights

## Add neopixel extension
Click on **Extensions** --> In search bar, enter **neopixel** --> 
Under search results, look for ** neopixel - A Neo-Pixel package for pxt-microbit **.
## Create variable item
```blocks
let LED = 0
```

## Create variable item
```blocks
let LED = 0
let item = neopixel.create(DigitalPin.P1, 7, NeoPixelMode.RGB)
```
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