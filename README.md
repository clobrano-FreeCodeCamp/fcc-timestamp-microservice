# Timestamp microservice APP

Welcome to Timestamp microservice APP

This is a simple timestamp microservice that converts time from Unix format to natural language format. And the other way around also.

The specs of this app come from this [FreeCode Camp challenge](https://www.freecodecamp.com/challenges/timestamp-microservice)

* User-Story: I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).
* User Story: If it does, it returns both the Unix timestamp and the natural language form of that date.
* User Story: If it does not contain a date or Unix timestamp, it returns null for those properties.

E.g.

    Appending this line to the website url

        /6 September 1981

    the APP will reply {"unix":368582400,"natural":"6 September 1981"}.

    Then, appending /368582400, the reply will be exactly the same (well, in a sligthly different format).

A live demo of this service can be found on this [Heroku page](https://cl-timestamp-microservice.herokuapp.com)
