# `Iris` - Pandemic Watch

The spread of diseases is fast becoming an increasing threat, and unless properly monitored and
controlled, it will rapidly grow out of control and like an evil flood, destroy all that's in it's
path.

The best measures against diseases such as the ebola (those without cure nor vaccination) are those that attempt
to mitigate the spreading of such diseases. This can only be properly done by ensuring public
knowledge of these epidermics, how they spread, and how to prevent them. Also, an important
part of such preventive measures is to alert the public ASAP when an epidermic hits their
areas of residence

`Iris` is born out of the need to preserve human life and dignity by arming the masses with priceless
knowledge and timely information. `Iris` is purely and totally a `not for profit` but all help in
any form is welcome, especially any help in the form of technical assistance.

_Note: Although Jade supports interpolation, you should be doing that mostly on the client. Mixing
server and browser templating will convolute your app. Instead, use Jade as a syntactic sugar for
HTML, and let AngularJS take care of interpolation on the browser side._

## How to use `Iris`

Dial the `Iris` shortcode `[To be provided]`
You will be presented with the following options

    1. Report a possible epidermic outbreak
    2. Get information on epidermics in your locality


### Option 1

`Iris` will request for all the observed symptoms
and based on this, will make a prediction on the most likely
epidermic, _also based (loosely) on known active epidermics.


### Option 2

`Iris` will ask you from a list of active eperdimics and then give you a breif description
of the selected epidermic as well as if it's been detected in your locality
`Iris` will also give you safety tips on how to avoid infection


## The final piece of the puzzle

`Iris` features a _dashboard of sorts_ that displays a heatmap of occurances for all active
epidermics. This allows actions such as filtering by region, as well as by epidermic.
This will serve as an intelligence source for the masses as well as the health services.

People who live in infection-intense regions can then know to take serious precautions.
People who are also migrating to infected regions can also be cautioned to take a vaccine if available.



## The `Iris` Achitecture

    app.js              --> app config
    package.json        --> for npm
    public/             --> all of the files to be used in on the client side
      css/              --> css files
        app.css         --> default stylesheet
      img/              --> image files
      js/               --> javascript files
        app.js          --> declare top-level app module
        controllers.js  --> application controllers
        directives.js   --> custom angular directives
        filters.js      --> custom angular filters
        services.js     --> custom angular services
        lib/            --> angular and 3rd party JavaScript libraries
          angular/
            angular.js            --> the latest angular js
            angular.min.js        --> the latest minified angular js
            angular-*.js          --> angular add-on modules
            version.txt           --> version number
    routes/
      api.js            --> route for serving JSON
      index.js          --> route for serving HTML pages and partials
    views/
      index.jade        --> main page for app
      layout.jade       --> doctype, title, head boilerplate
      partials/         --> angular view partials (partial jade templates)
        partial1.jade
        partial2.jade


## Live URL

`Iris` is live at the following URL http://iris.herokuapp.com


## Technologies used

    1. NodeJS
    2. Express
    3. AngularJS
    4. TextIT API
    5. VotoMobile API
    6. Jade Templating


## Contributors

The main active contributors to the `Iris` project are

  1. [Samuel Ako](http://samako.org)
  2. [Osborn Adu](https://plus.google.com/+OsbornKwartengAdu/about)


## Contact

For more information on `Iris` please check out http://iris.herokuapp.com/about
For more on contributing to the code base, please checkout http://iris.herokuapp.com/contrib
You can send an email to elimence@gmail.com for general enquiries.

## License
MIT
