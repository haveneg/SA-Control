# Secret Agent Backup Control Panel
### For the use of employees of Time to Escape: Chattanooga

This github project contains the raw html and javascript files for the control panel in Secret Agent. It is used to control various mechanisms within the room itself, including the Hall lights, Disco lights, Shoebox, Knock-Knock puzzle, Red light, and Red Button Club Door.

## Usage

Due to Google's COR policy, the ports of the raspberry pi cannot be directly connected over https, so the default Github Page for this repository cannot function as the control panel for Secret Agent. However, if the files are downloaded and accessed locally, a local device will be able to connect to the ports of the raspberry pi over http, as the raspberry pi is designed to host, and a local html page can properly function as the Control Panel for Secret Agent.

Employees must have the device connected to the same network as the raspberry pi, which is the standard network for the chromebooks in the control room.

If the chromebook for Secret Agent is ever replaced, clone this repository in a folder on the new device and create a browser bookmark pointing to the local index.html file.