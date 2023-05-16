# DJ Lights

## Create a new variable and name it as LED
let LED = 0

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