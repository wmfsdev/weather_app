# weather_app

+ live: https://wmfsdev.github.io/weather_app/
+ repo: https://github.com/wmfsdev/weather_app

A weather app to demonstrate an understanding of asynchronous programming, in this instance using async/await to handle the Promise based operation.

An enjoyable project, but surprisingly figuring out how to use the weather API 
as part of an async function was relatively straight-forward. The trickier part was simply organising the returned information for both components of
the app: the 'current' weather and the 'forecast' weather.

** Optional

> add a ‘loading’ component that displays from the time the form is submitted until the information comes back from the API

I anticipated the optional part of the project to be trickier than it ended up being... basically sandwiching the async function between a set of performance.now() methods (these were an accidental discovery, seem very handy for the future).

If you want a concrete example of how this works open up your browser devtools and use the network throttling options to create an artificial latency of any suitable value fx. 3000ms. This will create a three second delay before the API request can complete, which fulfils the promise, thus allowing us to move onto the second performance measurement. The value in the top left of the browser should read just over 3000ms.

One final neat thing I discovered whilst figuring out error handling is that try/catch doesn't catch network errors, only system ones. This caused confusion at the start as I was failing to recognise the difference between errors generated by the Weather API and the fetch API.

In my case fetch wasn't rejecting *because* the Weather API was nearly always returning an object. The solution was to create an error for a non-successful fetch:

```js
if (response.status !== 200) {
        throw new Error (response)    
    }
```