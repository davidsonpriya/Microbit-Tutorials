let LED = 0
let strip = neopixel.create(DigitalPin.P1, 7, NeoPixelMode.RGB)
basic.forever(function () {
    strip.clear()
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
