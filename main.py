LED = 0
item = neopixel.create(DigitalPin.P1, 7, NeoPixelMode.RGB)

def on_forever():
    global LED
    LED = pins.map(input.sound_level(), 0, 70, 0, 7)
    item.clear()
    item.range(0, LED).show_rainbow(1, 255)
    item.show()
basic.forever(on_forever)
