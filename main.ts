radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("t satelite" + receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    basic.showString("t base" + input.temperature())
})
radio.onReceivedString(function (receivedString) {
    radio.sendNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("t satelite")
})
radio.setGroup(1)
