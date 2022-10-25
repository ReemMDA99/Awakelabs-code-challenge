# Awakelabs-code-challenge

#### User Management Application

An application used to manage users. (CRUD) - Create, Read, Update and Delete User details, built with React, JavaScript, and CSS.

## Project Status

MVP Completed - Things we can implement if we spend a little more time - 
1. Server side pagination
2. User Search functionality
3. Unit Test cases

## Project Screen Shot(s)
- New User 
![image](https://user-images.githubusercontent.com/88701/197379658-1e408fde-2f03-45cd-9d15-30fd42889449.png)

- Saved User
![image](https://user-images.githubusercontent.com/88701/197379648-45345fd8-e655-403d-9368-d4459a02fa63.png)

- Validation Errors
![image](https://user-images.githubusercontent.com/88701/197380840-ba417aac-52ff-4d8d-b3d9-8ddf71ef84c4.png)
![image](https://user-images.githubusercontent.com/88701/197380853-0b23a0f1-a0cb-486d-b1f8-11952b726e53.png)
![image](https://user-images.githubusercontent.com/88701/197380861-21447f25-550e-4e18-8b43-716cf1eac96e.png)



- Update User
![image](https://user-images.githubusercontent.com/88701/197379735-4011b087-0029-4ae7-9d29-3547b15962a3.png)

- Delete User
![image](https://user-images.githubusercontent.com/88701/197379774-011e372a-e5e0-4f43-8810-83611452103c.png)

- List Users 
![image](https://user-images.githubusercontent.com/88701/197379807-01532bb3-e97b-4676-926e-a9bbf842a4bd.png)



## Installation and Setup Instructions

#### Example:  

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Start Server:

`npm start`  

To Visit App:

`localhost:3000/users`  

## Reflection
  - The intention of the project was to build out an MVP to manage users
  - The intention was to build a MVP, yet to make the UI look like production quality
  - The project wasn't challenging as such but was a good learning experience as I came across a lot of react hooks and had to build end to end.
  - There were a couple of unexpected obstacles with validations. I had to resort to SEMANTIC-UI library for validations and for a pleasant user interface.

  - Dependencies:
    1. Used AXIOS for API calls
    2. Semantic-UI for forms, validations and user components like Alerts, Modals
 
#### Considerations 

Originally, I wanted to build an application with Redux but given the size and functionality of the application, Redux didn't appear a good choice. There was no need for me to share data between components, services and there were  no complex data calls. Hence, I didn't use redux. 

