### Node.Js Tutorial from freeCodeCamp ###
We can find the documentation of Node.Js at [Node Docs]('nodejs.org/docs/latest/api')
This course is taught by John Smilga and we can find all of the slides, and other info used in the course at:
[Course-API]('course-api.com')

### Running Programs In The Terminal ###
We can run any program in the terminal by navigating to the directory the file is located in and typing:
    "node filename.js"

This will run the contents of the file within the terminal window

### Globals - No Window!! ###

__dirname   - path to current directory
__filename  - file name
require     - function to use modules (CommonJS)
module      - info about current module (file)
process     - info about enviornment where the program is being executed

#### Modules ###

Modules are essentially encapsulated code.

We use modules to link different .js files to our main .js file so don't have to write all of our code into one single file.
Node uses CommonJS so every file in node is a module

Built-In Modules:
    OS: ('./8-os-module.js')
    Path: ('./9-path-module.js')
    FS: ('./10-fs-sync.js') & ('./11-fs-async.js')
    HTTP: ('./12-http-module.js')

### NPM (Node Package Manager) ###

At this point we're familiar with two types of modules. Our own and the built-in node modules. There are many more we have access
to though thanks to the NPM or Node Package Manager. This is the worlds largest code store. Typically if we want something like a 
slider for an app we have two options. We can either build it ourselves or we can search one up on Google and copy/paste the result.
While both of these are viable options, there is a good chance someone else has built this and shared the project with us via the 
node packages. NPM automatically comes with Node.Js. It allows us to build our own packages and reuse them in other projects, and 
use packages others have created, and it also allows us share our own creations with others. The NPM website is located at the URL
    [NPM Package Manager]('npmjs.com') 
Here we can everything from utility functions to full out frameworks. The typical node project will have multiple packages installed.
A package is basically a folder that contains some prewritten JavaScript code. They are also called modules and dependencies. It is 
important to remember there is "quality control" in the NPM. Anyone can upload anything. Finding a good package requires doing some 
research. One good way to do this is by looking at the amount of weekly downloads a package has. The more downloads the more likely
a package is to be useful and work well. When it comes to NPM packages if there is a bug someone else has already fixed it in the 
package or posted a workaround elsewhere.

### NPM and Git ###

When pushing code with npm packages install to git we usually don't want to store our node modules folder (the folder created when one
installs an npm package into a project) in the git commit, nor on a repo hosting site like GitHub. To bypass doing so we create a .gitignore
file, and the files unwanted in the commit to it. If we need to clone that particular git repo, the package.json file will allow the
user to just type "npm install" into the terminal and it will install packages into the project.

### Nodemon ###

Restarts node for us after updating a file. It is really only needed in development so it should be installed with -D

npm i nodemon -D

This is called a "dev dependency" meaning it will be used during app development but not during production. We can set this up in our
package.json file under the scripts object. Under the scripts object, we all a "dev" key, and then add our script to start nodemon there.
This will typically look something like this:

    "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
  }

The start script will start node in the traditional manner, and dev will work with nodemon. It will be used with the terminal command
"npm run dev" which will start up nodemon so that every time we update our file node will automatically restart. 

Nodemon can be installed globally with npm install -g nodemon and this will allow it be used in every project with out using it as a 
local dependency. This isn't the best practice with every package, and should be avoided unless absolutely necessary.

### NPX ###

npx stands for Node Package eXecute. It was introduced in npm 5.2 and is used to run a cli took without installing the package.

### Package.json & Package-lock.json ###

The package.json file stores all of the information about our node project including dependencies and their versions. This is the file
that allows us to download our npm packages from a cloned project even though they are stored in a .gitignore file. Running "npm install"
on any project with a package.json file will automatically download and install all dependencies used on the project. It also stores basic
information about the project like its' version, author, name, and the scripts used to run the npm packages used in the project.

The package-lock.json is there to make sure that package versioning stays the same through each install of a project. Some packages
use other packages as dependencies and they require the versions to be correct. We can learn more about package.json files at
[NodeSource]('https://nodesource.com/blog/the-basics-of-package-json/').

### Package Versions ###

A version can be thought of as a contract between the user and creator of the package. The first number is a major change. The second is a 
minor change. The third is a patch/bug fix.

### Event Loops in Node.Js ###

The event loop is what allows Node.Js to perform non-blocking I/O operations -- despite the fact that JavaScript is single-threaded -- by 
offloading operations to the system kernel whenever possible. Since most modern kernels are multi-threaded, they can handle multiple operations
executing in the background. When one of these operations completes, the kernel tells Node so that the appropriate callback may be added to the
poll queue to eventually be executed. We can find more information on this at:

[NodeJs.dev]('https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick')
[NodeJsYT]('https://www.youtube.com/watch?v=PNa9OMajw9w&ab_channel=node.js')

JavaScript being sychronous and single-threaded means it runs line by line. We can offload tasks to the browser by putting events into functions 
as a callback. When a user requests data, sometimes these requests will be something that may take a long time, and if they are put directly into 
the event loop this will keep other users from being able to have the requests processed until the initial request is completed. Off-loading these 
tasks allows the event loop to keep going allowing other users to continue to use the app, and when the first users request is completed it will be 
replaced into the event loop and sent back to the user who made the initial request.

### Async Patterns ### (./2-async-patterns/1-blocking.js)

The one issue with async functions is that it becomes really messy if they must be nested within each other. But there are alternatives to doing this. 
When get nesting wrong, it can fully block the server from allowing any through traffic, affecting all users currently on the site/app. This is why we
should always strive to write our programs in an asynchronous way.

### Await Patterns (Promises Async/Await) ### ('./2-async-patterns/2-await-patterns.js')

Problems arise when 
