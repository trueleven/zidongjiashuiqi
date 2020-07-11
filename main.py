def on_forever():
    if pins.analog_read_pin(AnalogPin.P0) > 2:
        pins.digital_write_pin(DigitalPin.P1, 1)
    else:
        pins.digital_write_pin(DigitalPin.P1, 0)
basic.forever(on_forever)
