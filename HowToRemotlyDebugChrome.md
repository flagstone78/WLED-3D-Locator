on computer:
1. have adb installed

on phone:
1. enable developer options
2. enable wireless debugging
3. tap wireless debugging and press pair device with pairing code. Note the ip address and port

on computer:
1. run adb pair ip:port 
2. enter pairing code
should say successfully paired to ip:port
3. run adb connect ip:port (the port may be different from the pair device port. use the port listed on the wireless debugging screen)

on phone:
1. open chrome page

on computer:
1. navigate to chrome://inspect#devices
2. click inspect on the tab to debug


after debugging, turn off wireless debugging on the android device