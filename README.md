# reaktorTask

frontend for a project made for Reaktor's job application.

# Overview

The application displays drones that have violated a set boarder to a birds nest. The data is retrieved from my own backend which gets the data from Reaktor:s API and is handled in the backend (check repository [drones-backend](https://github.com/Iispar/reaktorTaskBackend)). The data displayed is from the last 10 minutes and displays the drones pilot, closest distance, name, email and phone number. The map displays these drones visually.

# How to run

The app can be accessed from:
https://reaktor-task-iispar.vercel.app/

If the app hasn't been accessed for a long time, it might have been reset. So it will start collecting data from the API when it is opened.
The server also resets the data at intervals.

# Prerequisites and configurations
If you want to run the app from your own computer you need to clone the repo, install with npm install and start it with
npm start.

# Tests
This frontend does include some test that can be ran from installing the project and using npm test.

# Technologies
I used plain javascript, HTML, CSS and React for this project. I also made the API calls to the backend with axios. I also used some JQuery.
