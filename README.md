### Node.Js Tutorial from freeCodeCamp ###
We can find the documentation of Node.Js at [Node Docs]('nodejs.org/docs/latest/api')

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

# NPM and Git #

When pushing code with npm packages install to git we usually don't want to store our node modules folder (the folder created when one
installs an npm package into a project) in the git commit, nor on a repo hosting site like GitHub. To bypass doing so we create a .gitignore
file, and the files unwanted in the commit to it. If we need to clone that particular git repo, the package.json file will allow the
user to just type "npm install" into the terminal and it will install packages into the project.

# nodemon #

Restarts node for us after updating a file. It is really only needed in development so it should be installed with -D

npm i nodemon -D