# eniles-random-code
This is my storage bin for random bits of code and projects I want to share online.  I provide no warranty for any of the information and code in this repository.  Heck, I can't even guarantee it will be useful.  However, I kludged it together at some point to solve a problem, and figured I would share in case it's useful to someone else.

## Apple TV scripts
I had an [original Apple TV](https://support.apple.com/en-us/HT200008#appletv-1st) that was connected to my TV in the living room, and I used it mainly to watch podcasts I'd downloaded through itunes.  Unfortunately itunes on Windows does not provide the ability to schedule podcast download updates, nor does it allow you to schedule when itunes syncs with your AppleTV (Seriously Apple?! You can't add a simple option to schedule when to "refresh all podcasts"; I have to go in and do it manually?). So, I created a few javascript scripts to solve the problem.  Just download the 2 files and use Windows Task Scheduler to call these scripts at the times you want each action to occur.
iTunes_update_podcats.js
iTunes_sync_AppleTV.js
Note - you'll need to use cscript.exe to call scripts from Task Scheduler i.e. C:\WINDOWS\system32\cscript.exe C:\Scripts\iTunes_sync_AppleTV.js and itunes must be open when these scripts are called.
