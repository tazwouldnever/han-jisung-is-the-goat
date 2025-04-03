radio.onReceivedString(function () {
    if (explode == 1) {
        for (let index = 0; index < 10000; index++) {
            music.setVolume(127)
            music.play(music.stringPlayable("C5 C5 C5 C5 C5 C5 C5 C5 ", 120), music.PlaybackMode.LoopingInBackground)
            pins.digitalWritePin(DigitalPin.P0, 1)
            pins.digitalWritePin(DigitalPin.P1, 1)
            pins.digitalWritePin(DigitalPin.P2, 1)
            basic.pause(100)
            pins.digitalWritePin(DigitalPin.P0, 0)
            pins.digitalWritePin(DigitalPin.P1, 0)
            pins.digitalWritePin(DigitalPin.P2, 0)
            basic.pause(100)
        }
    }
})
let explode = 0
let yaoi = pins.digitalReadPin(DigitalPin.P0)
if (yaoi > 50) {
    explode = 1
    radio.sendNumber(explode)
}
