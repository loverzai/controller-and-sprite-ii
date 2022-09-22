function 移动 (dx: number, dy: number) {
    x2 = x
    y2 = y
    x = x + dx
    y = y + dy
    if (x > 4) {
        x = 0
    } else if (x < 0) {
        x = 5
    }
    if (y > 4) {
        y = 0
    } else if (y < 0) {
        y = 5
    }
    if (sprite.get(LedSpriteProperty.X) == sprite2.get(LedSpriteProperty.X) && sprite.get(LedSpriteProperty.Y) == sprite2.get(LedSpriteProperty.Y)) {
        x2 = x
        y2 = y
    } else {
        sprite2.set(LedSpriteProperty.X, x2)
        sprite2.set(LedSpriteProperty.Y, y2)
    }
    sprite.set(LedSpriteProperty.X, x)
    sprite.set(LedSpriteProperty.Y, y)
    basic.pause(500)
}
let sprite2: game.LedSprite = null
let sprite: game.LedSprite = null
let y2 = 0
let x2 = 0
let y = 0
let x = 0
x = 2
y = 2
x2 = 2
y2 = 2
sprite = game.createSprite(x, y)
sprite2 = game.createSprite(x2, y2)
pins.setPull(DigitalPin.P13, PinPullMode.PullUp)
pins.setPull(DigitalPin.P14, PinPullMode.PullUp)
pins.setPull(DigitalPin.P15, PinPullMode.PullUp)
pins.setPull(DigitalPin.P16, PinPullMode.PullUp)
led.setBrightness(12)
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
pins.setPull(DigitalPin.P8, PinPullMode.PullUp)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) < 340 && pins.analogReadPin(AnalogPin.P2) > 680) {
    	
    } else if (pins.analogReadPin(AnalogPin.P1) < 340 && pins.analogReadPin(AnalogPin.P2) < 340) {
    	
    } else if (pins.analogReadPin(AnalogPin.P1) < 340) {
        移动(0, -1)
    }
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P14) == 0) {
        basic.showArrow(ArrowNames.North)
    } else if (pins.digitalReadPin(DigitalPin.P15) == 0) {
        basic.showArrow(ArrowNames.South)
    } else if (pins.digitalReadPin(DigitalPin.P13) == 0) {
        basic.showArrow(ArrowNames.West)
    } else if (pins.digitalReadPin(DigitalPin.P16) == 0) {
        basic.showArrow(ArrowNames.East)
    }
})
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) > 680 && pins.analogReadPin(AnalogPin.P2) > 680) {
    	
    } else if (pins.analogReadPin(AnalogPin.P1) > 680 && pins.analogReadPin(AnalogPin.P2) < 340) {
    	
    } else if (pins.analogReadPin(AnalogPin.P1) > 680) {
        移动(0, 1)
    }
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P8) == 0) {
        basic.clearScreen()
    }
})
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) > 340 && pins.analogReadPin(AnalogPin.P1) < 680) {
        if (pins.analogReadPin(AnalogPin.P2) > 680) {
            移动(-1, 0)
        } else if (pins.analogReadPin(AnalogPin.P2) < 340) {
            移动(1, 0)
        }
    }
})
