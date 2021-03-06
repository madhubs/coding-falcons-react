### Welcome to Coding Falcons! This time with react!!!

Coding Falcons is a school and summer coding program for students 5-8th grade. Ivette Cortez and Madeline Stevens run the program and hope to expand throughout White Center and the rest of South Seattle. This single page app is meant for relaying information to the parents and students interested in our coding programs.

### Heroku site:

http://codingfalcons.herokuapp.com

### Table of Contents

- [Initial Setup](#preview)
- [Bootstrap and Heroku setup](#bootstrap)
- [Resources](#resources)
- [ARIA](#ARIA)

### Initial Setup:

#### Preview

After adding server.js file and installing express and specifying 'PORT 5000' type this in terminal to get up and running- go to localhost:5000 in browser and test with postman:

```
nodemon
```

#### packages

npm init- to create package.json
npm install- to create nodemodules

needed to update hoek dependency in node:

```
npm update && npm install
```

#### CDNs (aka- libraries)

-

- gravatar
- bootstrap
- Font Awesome ( twitter- <i class="fab fa-twitter-square"></i>)

### Bootstrap and Heroku setup:

#### Bootstrap:

Adding bootstrap components (resource- https://www.youtube.com/watch?v=gqOEoUR5RHg)

To incorporate bootstrap I added two things to my index.html and i immediately saw a change in my chrome browser after right clicking/open in browser:
At the top within my my style sheets section:

```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
```

At the bottom within my CDN scripts section:

```html
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
```

#### Heroku:

Setting up heroku environment.

Attempting to use the php fix again (resource- https://www.youtube.com/watch?v=IVvU9JF6o8s):

```php
<?php header( 'Location: /index.html' ) ; ?>
```

Ran into the issue of jquery not being recognized despite the CDN's script at the bottom of index.html. I had to add this into .eslintrc:

```
  "env": {
    "browser": true,
    "jquery": true,
    "node": true,
    "es6": true
  },
```

### Fixed

#### A merge conflict due to editing the readme on github, that seemed to all of a sudden fix itself:

![terminal](public/photos/terminal.png)

#### MIME chrome error message:

There was missing a semicolon in the server.js file, also had multiple scripts for bootstrap and jquery.
![terminal](public/photos/screenshot2.png)

#### Following error in chrome browser window:

```
The requested URL /about was not found on this server.
```

The issue was that I had used that php trick to attempt to host a simple html/css app (not sure why it wouldn't initally work still) and I did not have _ just _ the following, I thought I had to be explicit about each route in server.js as well as route.js:

In server.js:

```js
app.get("/*", (req, res) => {
  console.log("__REQUEST__ : ", req);
  console.log("__RESPONSE__ : ", res);
  res.sendFile("index.html", { root: "./public" });
});
```

Getting rid of the above solved my problem locally on localhost:3000 but not on heroku.

#### Hiding tab content on home page:

The following code in routes.js will hide tab content on page load but if you refresh within tab content this code also tells your page to only show home. So I still need to figure out a solution.

// $(document).ready(function() {
// $('#about').hide();
// $('#scholarships').hide();
// $('#programs').hide();
// $('#contact').hide();
// $('#home').show();
// });

#### After creating react repo in finder, cloning files from github, moving them into react folder in finder, and attempting to git init and push I get this error:

```
fatal: 'origin' does not appear to be a git repository
```

Solution:
You did this incorrectly! So now you need to actually create a repo on github and stop trying to create one locally and push it! ;)

### ARIA

#### ARIA attributes added to html attributes:

1.  Added aria-label for a fontawesome Twitter icon in my footer:

```html
<a href="https://twitter.com/_madtweets" target="_blank" aria-label="Twitter"><i class="fab fa-twitter-square fa-2x"></i></a>
```

2.  Added aria-required for each "contact us" form text field:

```html
<input type="email" class="form-control" name="replyto" value="" placeholder="E-mail" aria-required="true">
```

3.  Added aria-label for each "contact us" form text field:

```html
<input type="text" class="form-control" name="name" placeholder="Name" aria-label="Form, empty name field" aria-required="true">
```

4.  Don't use heading mark up on text that isn't actually a heading:
    Used to be:

     <h4><strong>Ask us anything!</strong></h4>
    ARIA change:
     <p><strong>Ask us anything!</strong></p>

5.  Adding meaningful alt text to images, instead of the default bootcamp provides:
    Used to be:

```html
<img class="img-responsive" src="photos/IMG_0433.jpg" alt="Responsive imgage">
```

Changed to:

```html
<img class="img-responsive" src="photos/IMG_0433.jpg" alt="Co-founders, Maddy and Ivette pose for selfie">
```

6.  Adding aria-labels to image carousel left/right pointers:

```html
<a class="left carousel-control" href="#theCarousel" data-slide="prev">
  <span class="glyphicon glyphicon-chevron-left" aria-label="click to go to left carousel image"></span>
</a>
```

### REACT notes

- Using Udemy's MERN stack front to back tutorial (Thank you Wade for the longin share)- https://www.udemy.com/mern-stack-front-to-back/learn/v4/t/lecture/10055142?start=0

- Udemy devconnector project github reop: https://github.com/bradtraversy/devconnector

1.  Cloned starter files from original coding falcons.
2.  npm i...express, babel, body-parser, jsonwebtoken, mongoose, passport, passport-jwt, validator
3.  Set up server.js with a port
4.  nodemon
5.  Test port 5000 in browser
6.  Added "server": "nodemon server.js" to package.json but may be redundant of "watch": "nodemon server.js"
7.  Adding mlab mongodb string to config folder/keys file
8.  adding routes folder > api folder > profile.js (for bio, experience, social network links), users.js (for anything auth related- username, password) and a posts.js
9.  Adding app.use for each profile.js, users.js, posts.js within server.js
10. Getting this error after running nodemon but that's because we haven't actually added the router to the three routes files:``` TypeError: Router.use() requires a middleware function but got a Object
11. I'm getting this error: Error: Invalid schema, expected `mongodb` or `mongodb+srv`. But localhost:5000 still works.
12. Now I'm testing each route in chome by manually typing this into browser, and we are getting our json response in the browser window (message: profile works): http://localhost:5000/api/posts/test
13. Adding a models folder > User.js to then create the user schema (to include name, email, password, gravatar avatar and a date)
14. Added the logic for findOne email in Users.js. So if email already exists in mlabs database, give an error, if it does not already exist go ahead and create an account with that email. This includes the schema for a new user.
15. Install the gravatar module with npm install gravatar.
16. After installing I got this error: npm WARN coding_falcons@1.0.0 No repository field.

And fixed this by including this in package.json:

```json
 "repository": {
  "type": "git",
  "url": "https://github.com/madhubs/coding-falcons-react"
}
```

17. I did an npm install to fix the error around bcrypt not being installed, now i see that it needs to be bcryptjs not bcrypt.js.
18. Currently on SECTION 3, VIDEO 10 OF MERN tutorial
19. Fixed the mongo error by fixing my key.js
20. Tested a GET request in postman- http://localhost:5000/api/users/test and recieved our "Users works!" message as a response.
21. Testing a POST- http://localhost:5000/api/users/register and recieving an 'unidetified '<'' error message. Now I'm getting this error- '{ ValidationError: users validation failed: name: Path `name` is required.' in the console.
    THE FIX: Changed name, required to false in the User schema and I finally got a json response. Changed required back to true and now it magically works!
22. Added the logic for the password but instead of just having success on password as the response we need to create a token to be sent to the user to be able to access protected routes.
23. Next we'll use passport (the main authentication module) to actually verify the bearer token and make routes private
24. I am now getting the success message on the /current bearer request! I think a piece of the solution was changing the authorization tab settings to 'no auth'.
25. Completed so far: we can validate users, accept tokens and access protected routes.
26. (section 3, video 13ish?)Server side validation: created a global menthod for checking if fields of a form are blank or not following registration rules. Tested with postman. And it works! The method can be found in the is-empty.js file- //this file is to create a global method that I can reuse (trying to minimize the number of libraries I use) for checking if fields are blank/null, object, string, etc. because we can't use the Validator isEmpty method because it only checks for empty strings. but our errors variable (in register.js file) is an object. We could use something like lowdash library.
27. After using validator to write the checkers for the name, email, and password and password2 I am getting this confirmation back in postman!

```json
{
  "name": "Name field is required",
  "email": "Email is required",
  "password": "Password field is required",
  "password2": "Passwords must match"
}
```

28. The email kept returning as invalid, may have been that it was already in the db but that should return the "email already exists" error message so that remains a mystery. I tried the same email but included a number and it worked.

```json
{
  "_id": "5bbc2e067eb7292ec700e827",
  "name": "maddy",
  "email": "maddy2@gmail.com",
  "avatar": "//www.gravatar.com/avatar/2974b2762bf9a0af7f588a335eb3a0ce?s=200&r=pg&d=mm",
  "password": "$2a$10$0GBKZ3Z00CewROGOPBi0De.7GyG9TlmN7WVIZmxnNF99NgxhEYQ9e",
  "date": "2018-10-09T04:26:46.677Z",
  "__v": 0
}
```

29. Postman requests/responses for register, login and verify user:

POST/register- http://localhost:5000/api/users/register

```json
{
  "_id": "5bbc2e067eb7292ec700e827",
  "name": "maddy",
  "email": "maddy2@gmail.com",
  "avatar": "//www.gravatar.com/avatar/2974b2762bf9a0af7f588a335eb3a0ce?s=200&r=pg&d=mm",
  "password": "$2a$10$0GBKZ3Z00CewROGOPBi0De.7GyG9TlmN7WVIZmxnNF99NgxhEYQ9e",
  "date": "2018-10-09T04:26:46.677Z",
  "__v": 0
}
```

POST/login -http://localhost:5000/api/users/login

```json
{
  "success": true,
  "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViYmMyZTA2N2ViNzI5MmVjNzAwZTgyNyIsIm5hbWUiOiJtYWRkeSIsImF2YXRhciI6Ii8vd3d3LmdyYXZhdGFyLmNvbS9hdmF0YXIvMjk3NGIyNzYyYmY5YTBhZjdmNTg4YTMzNWViM2EwY2U_cz0yMDAmcj1wZyZkPW1tIiwiaWF0IjoxNTM5MTIyMjQ4LCJleHAiOjE1MzkxMjU4NDh9.bXSAU3NweS9NGjpeUl54nwfhIdRpnP_T2ofphOxotRY"
}
```

GET/verify current user - http://localhost:5000/api/users/current

```json
{
  "id": "5bbc2e067eb7292ec700e827",
  "name": "maddy",
  "email": "maddy2@gmail.com"
}
```

# Set up the profile model

30. Set up the profile schema in models/Profile.js
31. Now we'll set up the routes in routes/api/profile.js
32. we need to set up the 'Get current users proifle' route within profile.js -- add functionality for if user found return user, if not throw error.
33. Postman test returns this:

```json
{
  "noprofile": "There is no profile for this user"
}
```

Which is exactly what we want becuase we haven't filled out the profile form yet.

34. Next is to create the route that takes us from the blank profile dashboard to the profile create form. I did this within profile.js under the header- //@desc Create OR edit user profile

35. Now we need to set up custom validation for the create profile form by creating a profile.js form in the validation folder.
36. Now it's time to test the create profile route in postman with a new tab for a POST with http://localhost:5000/api/profile, set Authorization header to fresh Bearer token, press send.

Should return:

```json
{
  "handle": "Handle needs to be between 6 and 40 characters",
  "status": "Status field is required",
  "skills": "Skills are required"
}
```

37. Now this time with the body filled out with:
    handle : Madeline
    status: Developer
    skills : HTML, CSS, JavaScript, ARIA
    twitter: https://twitter.com/_madtweets

Should return this object:

```json
{
  "social": {
    "twitter": "https://twitter.com/_madtweets"
  },
  "skills": ["HTML", " CSS", " JavaScript", " ARIA"],
  "_id": "5bbe50d47066cf4bec7f12dd",
  "user": "5bbc2e067eb7292ec700e827",
  "handle": "Madeline",
  "status": "Developer",
  "experience": [],
  "education": [],
  "date": "2018-10-10T19:19:48.798Z",
  "__v": 0,
  "company": "Trilogy Education"
}
```

38. !!!!Next was to create a user object that populates the users id, name and avatar. I haven't gotten that to populate yet. I also noticed I don't have 'experience' or 'date' properties included in my object. This is half solved below!
39. The pubic API route tested in postman to get the profile by the handle- http://localhost:5000/api/profile/handle/Madeline
    The response object-

```json
{
  "social": {
    "twitter": "https://twitter.com/_madtweets",
    "instagram": "https://twitter.com/_madtweets"
  },
  "skills": ["HTML", " CSS", " JavaScript", " ARIA"],
  "_id": "5bbe50d47066cf4bec7f12dd",
  "user": {
    "_id": "5bbc2e067eb7292ec700e827",
    "name": "maddy",
    "avatar": "//www.gravatar.com/avatar/2974b2762bf9a0af7f588a335eb3a0ce?s=200&r=pg&d=mm"
  },
  "handle": "Madeline",
  "status": "Developer",
  "experience": [],
  "education": [],
  "date": "2018-10-10T19:19:48.798Z",
  "__v": 0,
  "company": "Trilogy Education"
}
```

41. Next we need to create a route that gets all the profiles- router.get("/all", (req, res) => {
42. CReating more than one profile so we can actually use that route.

```json
{
  "social": {
    "twitter": "https://twitter.com/_madtweets",
    "linkedin": "https://www.linkedin.com/in/madelinestevens/",
    "instagram": "https://twitter.com/_madtweets"
  },
  "skills": ["JS", " C#"],
  "_id": "5bc7f6c95ec5170a5c517708",
  "user": "5bbc2dd87eb7292ec700e824",
  "handle": "Maddy3",
  "company": "N/A",
  "bio": "I am  a passionate developer focused on React, C#, and ARIA. ",
  "status": "Developer3",
  "experience": [],
  "education": [],
  "date": "2018-10-18T02:58:17.818Z",
  "__v": 0
}
```

43. yay! http://localhost:5000/api/profile/all
44. Now I've added the experience fields to the profile route, we can test in postman. And it returns the same as above but with an experience array with the fields (company, title, to, from and description).
45. Now its time to be able to delete items from profile. All done creating a route for that now testing in postman.
46. Testing the delete in postman by coyping bearer auth and the id of the experience we want to delete to paste into new DELETE tab. Here's the route with copy/pasted --> http://localhost:5000/api/experience/5bc8f286fffea53df97de9f3
47. successful deletion with the id of an experience.
48. Now it's time to create a delete route but this time for education.
49. Delete profile and user routes complete, now i'll create a test user/profile just to be able to delete.
50. Successful deletion of a user and their profile!
51. Next big steps to come will be to start with react for our UI on top of our already built Express API.

# Post (to the feed) API routes

52. Creating the post model is next- like posting to a feed.
53. model, route and validation files all created, next step is to test in post man after logging in again and typing a message between 10-300 characters.
54. Copying and pasting the Bearer Auth token each time we need to test is tough but once we start working on the frontend the bearer token will be stored in local storage and used as long as we're logged in.
55. another REMINDER- for posts the user won't have to type in their name or avatar, that will come from the user's state and Redux. Redux will hold onto that while the user is logged in.
56. Test post in postman- http://localhost:5000/api/posts:

```json
{
  "_id": "5bcba900e21ccc367c4b83f3",
  "text": "hello, this is a test. ",
  "user": "5bbc2dd87eb7292ec700e824",
  "likes": [],
  "comments": [],
  "date": "2018-10-20T22:15:28.245Z",
  "__v": 0
}
```

57. Now we create a route that will fetch all posts as well as route that will fetch a single post.
58. Successful routes to fetch all posts or just one post by id.
59. Now we'll work on the DELETE post route.
60. !!!!!! still a bug!!!!! Deleting works but then i'm getting an error when i try to GET all posts to confirm the delete-- ypeError: Post.find(...).sort(...).then(...).catch(...).json is not a function.
61. I need to move on and come back to that bug later.
62. Now we'll work on likes and unlikes.
63. YAY! likes works!
    HEre's the postman route with pasted id from my maddy123@gmail.com user- http://localhost:5000/api/posts/like/5bcbd46ed7a9c2400625ceaf

```json
{
  "_id": "5bcbd46ed7a9c2400625ceaf",
  "text": "this is the third test",
  "user": "5bbc2dd87eb7292ec700e824",
  "likes": [
    {
      "_id": "5bcbf0b10758654447e4751f",
      "user": "5bbc2dd87eb7292ec700e824"
    }
  ],
  "comments": [],
  "date": "2018-10-21T01:20:46.245Z",
  "__v": 1
}
```

64. Excellent! unlike route also works! http://localhost:5000/api/posts/unlike/5bcbd46ed7a9c2400625ceaf
65. Next we'll work on adding and removing comments.
66. adding comments is successful with this postman POST route- http://localhost:5000/api/posts/comment/5bcbd46ed7a9c2400625ceaf
67. NExt we'll build the delete comment route.
68. delete comment route works! - http://localhost:5000/api/posts/comment/5bcbd46ed7a9c2400625ceaf/5bcbf9bf402c2a479085c0ef
69. IT'S TIME FOR REACT AND REDUX!!!!!!!!!!!!!!!!!!!!!!!
70. we're going to use 'create react app' which is commonly used with react apps, it creates a boiler plate UI...
71. in terminal- npm i -g create-react-app
72. now that we've installed that globally we can run this-- create-react-app client. Which will automatically create a client folder in your app.
73. added this-- "proxy": "http://localhost:5000",
    to the client package.json to be able to not have to type that before each route.
74. to start client server on localhost 3000 we can cd into client-- cd client
    and then just type-- npm start
75. We're going to use somehting called 'concurrently' so we dont' have to start up both like i described above. We can start up concurrently and it will run both.
76. npm i concurrently
77. added to server side package json-- "dev": "concurrently \"npm run server\" \"npm run client\""
78. in terminal-- npm run dev
79. !!!! getting some errors in terminal after running the above command. going to read through them tomorrow.
80. I'm following the provided steps in terminal (i copied and saved my package lock and nodemodules files from my server side in another location before deleting):
    To fix the dependency tree, try following the steps below in the exact order:
    [1][1] 1. Delete package-lock.json (not package.json!) and/or yarn.lock in your project folder.
    [1] 2. Delete node_modules in your project folder.
    [1] 3. Remove "babel-jest" from dependencies and/or devDependencies in the package.json file in your project folder.
    [1] 4. Run npm install or yarn, depending on the package manager you use.
81. just deleted package lock and a nodemodules in my home folder! they suggested that could be culprit.
82. npm run dev FINALLY WORKS! Because I kept reading 'concurrently: command not found' and 'Failed at coding_falcons@1.0.0 dev script I knew something had to be up with my package.json, so I tried to just run 'npm run start' to just run the client side and when i did that I also was getting errors but this time it was for each individual missing package in my new package.json, so i just individually installed about four of them (body parser, express, mongoose) and that worked!
83. That command (npm run start) immediately launched chrome on localhost:3000 with a react screen.
84. And we can test the backend with http://localhost:5000/api/profile/all
    This give us an array of objects. It's serving our data from mongoDB through our backend.
85. Now that we have our backend and frontend running at the same time we're ready to clean up some things create-react-app auto added for us. Don't need: logo.svg
86. bootstrap CDN both the css link and the js links.
87. I already have the React and Redux chrome dev tool extensions installed in chrome but this would be the time to do so if not installed.
88. install fontawesome
89. Navbar, Landing and Footer components are all copied and pasted so we've got just a bunch of dumb components rendering and it looks really good.
90. Next is intalling the react router ON THE CLIENT SIDE! Because lots of routes. Version 4 or react router.
91. npm i react-router-dom
92. Router is brought into App.js
93. Right now we have Landing always displaying but we don't want that we want a route for Landing.

```js
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Landing />
          <Footer />
        </div>
      </Router>
    );
```

94. To make sure the router is working, lets create another component.
95. Login and Register routes (/register and /login) work but now we need to lINK them to the actual buttons that say login and register in the upper right hand corner by going to navbar.js and replace the hrefs (to html pages) with Links to "/register" routes.
96. I'm getting this error in terminal after using Link:

[1] Line 39: 'Link' is not defined react/jsx-no-undef

And it was suggested to use this: import { Link } from 'react-router';
But I think there's just something not imported. More later.

97. Fixed above issue by importing Link like I suspected. More work on the Navbar.js file later.

### Resources

Udemy- "MERN stack front to back" with Brad Traversy- https://www.udemy.com/mern-stack-front-to-back/learn/v4/t/lecture/10055220?start=0
