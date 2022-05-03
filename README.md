# techBlog

## Description

This is a web application that allows users to create an account, login to create blog</br>
posts and to leave comments while logged in. After login, from the homepage a user can see other user posts,</br>
and can click on the posts to leave comments. By clicking on the dashboard link in the navbar a</br>
user can create a blog post, or delete a blog post they have already posted. A user can also logout by clicking</br>
the logout link in the navbar.</br>

## Learned

- Session store with sequelize
- bcrypt password handling
- Handlebars (layouts, partials)
- Controller routes through handlebars
- Fetch built API from MySQL

## Table of Contents

- [Description](#description)
- [Learned](#learned)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)

## Installation

NPM | Notes
--- | ---
express | Connection to server
dotenv | Allows for environnment files to be accessed
sequelize | MySQL package to allow for cleaner coding
mysql2 | MySQL package to access database
bcrypt | Password encryption
connect-session-sequelize | Store sessions with sequelize
express-handlebars | Express connection to handlebars
express-session | Express connection to the session

Database | Notes
--- | ---
MySQL | Uses MySQL to store users, blog posts and comments

## Usage

![website_home](./public/images/techblog.png)

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add comments
```
## Credits

Deployed to Heroku at: https://techblog-aditore.herokuapp.com/

Code by: Anthony Ditore</br>
Github: [aditore](https://github.com/aditore)</br>

## Features

- MySQL database
- Bootstrap