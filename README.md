
<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <a href="#using-the-application">Using the Application</a>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
    <li><a href="#planning-resources">Planning Resources</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## Overlook Hotell

### About The Project

![Overlook Hotel](https://user-images.githubusercontent.com/43621994/165414371-897e2469-ad41-4705-87fc-1fc53348452a.png)

Welcome to the Overlook Hotel! This is a small site i built over the course of a week, built to allow
users to log in to a site and and be able to book rooms for any date.

With this application you are able to view a list of bookings made for a specific user, the users ID 
specified by what username you log in under, and be able to post a booking back to a local API.


<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

In this project, I used these tools to help build, maintain, and populate the Web Application.
I was tasked with utilizing data from an API as well as using Webpack to create a pleasant user experience
for a hotel site.

#### Languages
* Javascript
* HTML
* Css

#### Frameworks/Libraries
* [JQuery](https://jquery.com)
* [Webpack](https://webpack.js.org/)
* Overlook Starter Kit Api as provided by Turing


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Set Up Instructions
1. Clone this repo to your local machine
2. `cd ` into `overlook`
3. Then, run NPM install from your command line: `npm install `
    - Do not run `npm audit fix --force`. this could break the repo.
4. After you have run npm install inside of your copy of this repo, run:
`npm start`
This will run the webpack in the terminal so you can view and use the application in your browser. Your terminal will likely display a large block of text as seen below:
![Local Host Link](https://user-images.githubusercontent.com/43621994/161456081-7910945b-f2df-4167-a487-3d40cf2498fe.png)

5. Find the line that says `Project is running at http://localhost:8080/` Copy and paste that URL into your browser into your browser. You should have the application set up and ready to use!

6. Make sure that you type `Control + C` in your terminal when you are done using the application. This ensure the server will stop running before your close your Terminal.

7. do the same with the backend repo, installing it [here](https://github.com/turingschool-examples/overlook-api)

8. make sure to run `npm install` and `npm start` on the api as well, or else the site will not work.

### Using the Application

When you load into the site, you are met with a simple login page. For this project, since it is more of a proof of concept, the username is "customer" followed by a number between 1 and 50 (ie. customer21)
and the password is overlook2021.

![User Dashboard](https://user-images.githubusercontent.com/43621994/165414649-e70dbd8c-9d19-4bbc-9dae-51bcc736c67e.png")

Once you log in, you are met with a page that displays all of that users information, their previous bookings, their upcoming bookings, and the total amount of money a user has spent. there is also a space  space where you can create a new booking.

In the date section, you can pick a date, defaulting to the current date, and upon submitting,
all available rooms for that date will be displayer. you can filter them by the type of room, and the information about the room is displayed.


<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Project Credits -
[Dylan Duke](https://github.com/laytonmaes) |

Project Git-hub Link: [https://user-images.githubusercontent.com/43621994/165414649-e70dbd8c-9d19-4bbc-9dae-51bcc736c67e.png](https://user-images.githubusercontent.com/43621994/165414649-e70dbd8c-9d19-4bbc-9dae-51bcc736c67e.png)



<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Turing Scool of Software & Design](https://turing.edu/)
* [Evericons Free Use Icons](https://www.figma.com/file/8YZVHqvryXV7hIY30fYAvw/Evericons-(Copy)?node-id=0%3A1)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)


<p align="right">(<a href="#top">back to top</a>)</p>


<!-- PLANNING RESOURCES -->
## Planning Resources
<!-- WIREFRAME -->

*[Figma Design Board](https://www.figma.com/file/DmPUi7zGkvYjH6UzkwDL7J/overlook?node-id=0%3A1)

*[Project Specs](https://frontend.turing.edu/projects/whats-cookin-part-one.html)



<p align="right">(<a href="#top">back to top</a>)</p>
