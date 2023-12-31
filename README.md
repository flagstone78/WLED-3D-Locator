# WLED-3D-Locator
A web app to find positions of addressable RGB LEDs in 3D space. Used to find the positions of rgb leds on a Christmas tree to create 3D lighting effects.

The LEDs must be controlled by WLED or other WLARLS protocol compatible controller.
The recording camera must have a gyroscope and accelerometer data (most smartphones have this).

General code process:
1. enter UDP address of WLED controller 
2. enter or retrieve the total number of leds
3. define 3D origin to be the starting position of the camera
4. access camera accelerometer and gyroscope data. 
5. access camera frames
6. turn off LEDs
7. Integrate the data over time to approximate position in space. The approximation will drift over time, but should stay accurate enough if the measurement time is short and sudden movements are avoided.
8. capture frame
9. turn on one led
10. capture frame
11. subtract frames and find the brightest spot
12. calculate the ray from the camera to the led
13. repeat 6-12 for all unknown led positions
14. move the camera to a different angle
15. repeat 6-14 until each led has at least 2 rays
16. calculate the led position from the intersection of rays
17. optional - adjust origin of leds
18. export the led positions in a table
