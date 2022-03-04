input.onPinPressed(TouchPin.P0, function () {
    basic.pause(1000)
    basic.showString("" + (randint(0, 100)))
})
input.onPinPressed(TouchPin.P1, function () {
    basic.pause(1000)
    basic.showString("" + (Math.randomBoolean()))
})
basic.forever(function () {
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.pause(600)
    basic.showLeds(`
        . . . . .
        . # . # .
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.pause(600)
})
