/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Clara
 * Created on: Nov 2023
 * This program ...
*/

// Setup
basic.showIcon(IconNames.EighthNote)

// Loop forever
while (true) {
  if (input.buttonIsPressed(Button.A) == true) {
    // turn the motor 180 degrees
    basic.showIcon(IconNames.Yes)
    robotbit.StepperTurn(robotbit.Steppers.M1, robotbit.Turns.T1B0)
    basic.showIcon(IconNames.Happy)
  }

  if (input.buttonIsPressed(Button.B) == true) {
    // move car forwards and backwards
    basic.showIcon(IconNames.Yes)
    robotbit.StpCarMove(10, 48)
    basic.pause(500)
    robotbit.StpCarMove(-10, 48)
    basic.showIcon(IconNames.Happy)
  }
}