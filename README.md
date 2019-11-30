# Npm Package Depedencies Visualization

Demo: http://serene-tor-26385.herokuapp.com/
(May need CORS browser extension because npm registry is 
not allowing the website requests)


Project to show npm package dependencies graph with D3 tree.

**Getting Started**:
 * To start the client side run `npm run start:dev`
 * To run the tests in client side run `npm run test`
 
 * To start the server side run `npm run watch`
 * To run the tests in server side run `npm run jest`
 
**Features**:
* Visualize npm package dependencies with tree.
* Input form validations.
* Spinner when loading data.
* Toaster notification when there is an error(package not found, package name and version not found).
* Collapsible tree nodes on click. 
* Cache is used to cache package version and dependencies, if in another call 
the dependency is found, its returned from the cache.

**Notes**:
* For simplicity if the package version that fetched from the npm registry contains (>,<,~,=) characters, it got deleted.

* If a package contains both > and <, or | or - it will not work.

* For simplicity dependencies under devDependencies is not included in the graph.

Images:

<img src="images/1.PNG" alt="img1" height="200">

<img src="images/2.PNG" alt="img2" height="200">

<img src="images/3.PNG" alt="img3" height="200">


This project was developed with Angular 8 + Node.js
