Note:
This Software Developer Test is solution is created by Jade Concepcion from scratch.
Logical solution to achieved the desired output is 100% mine. 

1. How long it took you to complete the work
 - I alloted 3hrs of logical thinking 7hrs of coding and debugging.

2. What you had to research to complete the work
 - to be honest, I had to research everything on how to develop this kind of solution given the fact that I had 0 knowledge of node.js and Typescript, from installing npm packages like, typescript, nodemon, express.js, creating controllers and routers, installed packages here are results of my research and do not claim any of it. However, logical solution to achieve this output is all mine. Good thing I had a good understanding with Javascript which helps a lot.

  


Steps to run:
* Change port if needed, check server.ts file ( I have a comment there, I used port 8080 in XAMPP apache )
* run this code, npm run dev (to start server)


Steps to test:
I used Postman to test REST API output ( you can use any API testing tools)

1.) Full list of tuples
create a request using GET method to this url ( http://localhost:8080/lists )

2.) Single tuples
create a request using GET method to this url ( http://localhost:8080/lists/2 ) //change id as you desire

3.) Add new tuples
create a request using POST method to this url ( http://localhost:8080/add )
Head over to the body tab, select row and in the body tab below, click on raw and JSON on the right dropdown.
example: (id is auto increment)
{
    "animal" : "Dog",
    "color" : "Brown"
}

4.) Delete a specific tuple
create a request using DELETE method to this url ( http://localhost:8080/delete/2 ) //change id as you desire
added id object for specific delete

5.) Update specific tuple
create a request using PUT method to this url ( http://localhost:8080/update/2 ) //change id as you desire
Head over to the body tab, select row and in the body tab below, click on raw and JSON on the right dropdown.
example:
{
    "color" : "Orange",
    "animal" : "Cheetah"
}