# reaktorTask

frontend for a project made for Reaktor's job application.

# Overview

The application displays drones that have violated a set boarder to a birds nest. The data is retrieved from my own backend which gets the data from Reaktor:s API and is handled in the backend (check repository reaktorTaskBackend). The data displayed is from the last 10 minutes and displays the drones pilot, closest distance, name, email and phone number. The map displays these drones visually.

# Usage

The app can be accessed from:
https://reaktor-task-iispar.vercel.app/

If the app hasn't been accessed for a long time, it might have been reset. So it will start collecting data from the API when it is opened.
The server also resets the data at intervals.
