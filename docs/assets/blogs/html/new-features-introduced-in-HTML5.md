# HTML5 introduced several new features to improve web development, including

HTML5 introduced several new features and enhancements, making it a significant update over its predecessor, HTML4. Here are some of the key features:

## 1. New Semantic Elements

- **\<header>**: Defines a header for a document or section.
- **\<footer>**: Defines a footer for a document or section.
- **\<article>**: Represents a self-contained composition in a document, page, or site.
- **\<section>**: Defines sections in a document.
- **\<aside>**: Represents content that is tangentially related to the content around it.
- **\<nav>**: Represents a section of the document intended for navigation links.
- **\<figure> and \<figcaption>**: Used to group media content with a caption.

**Example:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML5 Semantic Elements</title>
</head>
<body>
    <header>
        <h1>My Website</h1>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>

    <section>
        <article>
            <h2>Article Title</h2>
            <p>This is a self-contained article about a specific topic.</p>
        </article>
    </section>

    <aside>
        <h3>Related Links</h3>
        <ul>
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
        </ul>
    </aside>

    <footer>
        <p>© 2024 My Website</p>
    </footer>
</body>
</html>

```

## 2. New Form Controls

- **\<input>** types like `email`, `date`, `tel`, `number`, `range`, `color`, `url`, etc., provide more specific input fields.
- **\<datalist>**: Provides an autocomplete feature for input elements.
- **\<output>**: Represents the result of a calculation or user action.
- **\<progress>**: Displays the progress of a task.
- **\<meter>**: Represents a scalar measurement within a known range (e.g., disk usage).

**Example:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML5 Form Controls</title>
</head>
<body>
    <form>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email"><br><br>

        <label for="birthday">Birthday:</label>
        <input type="date" id="birthday" name="birthday"><br><br>

        <label for="volume">Volume:</label>
        <input type="range" id="volume" name="volume" min="0" max="100"><br><br>

        <label for="color">Favorite Color:</label>
        <input type="color" id="color" name="color"><br><br>

        <label for="feedback">Feedback:</label>
        <textarea id="feedback" name="feedback"></textarea><br><br>

        <label for="gender">Gender:</label>
        <input list="genders" name="gender" id="gender">
        <datalist id="genders">
            <option value="Male">
            <option value="Female">
            <option value="Other">
        </datalist><br><br>

        <input type="submit" value="Submit">
    </form>
</body>
</html>
```

## 3. Multimedia Support

- **\<video>**: Embeds video content directly in the web page without requiring plugins.
- **\<audio>**: Embeds audio content.
- **\<track>**: Provides text tracks for media elements like subtitles or captions.

**Example:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML5 Multimedia</title>
</head>
<body>
    <h2>Video Example</h2>
    <video controls>
        <source src="sample.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>

    <h2>Audio Example</h2>
    <audio controls>
        <source src="sample.mp3" type="audio/mpeg">
        Your browser does not support the audio tag.
    </audio>
</body>
</html>
```

## 4. Canvas Element

- **\<canvas>**: Provides a resolution-dependent bitmap canvas for rendering graphics, which can be used for drawing graphs, game graphics, or other visual images on the fly.

**Example:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML5 Canvas</title>
</head>
<body>
    <h2>Canvas Example</h2>
    <canvas id="myCanvas" width="200" height="100" style="border:1px solid #000000;"></canvas>

    <script>
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(20, 20, 150, 100);
    </script>
</body>
</html>
```

## 5. Scalable Vector Graphics (SVG)

- HTML5 allows the use of SVG directly in the HTML document, enabling the embedding of vector graphics.

**Example:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML5 SVG</title>
</head>
<body>
    <h2>SVG Example</h2>
    <svg width="100" height="100">
        <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
    </svg>
</body>
</html>
```

## 6. Geolocation API*

- Enables web applications to access the geographical location of a user, provided the user grants permission.

**Example:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML5 Geolocation</title>
</head>
<body>
    <h2>Geolocation Example</h2>
    <button onclick="getLocation()">Get My Location</button>
    <p id="demo"></p>

    <script>
        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            } else {
                document.getElementById("demo").innerHTML = "Geolocation is not supported by this browser.";
            }
        }

        function showPosition(position) {
            document.getElementById("demo").innerHTML = "Latitude: " + position.coords.latitude +
                "<br>Longitude: " + position.coords.longitude;
        }
    </script>
</body>
</html>
```

## 7. Local Storage

- **localStorage** and **sessionStorage**: New storage options that allow storing data on the client-side, which persists even when the page is refreshed or the browser is closed.

**Example:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML5 Local Storage</title>
</head>
<body>
    <h2>Local Storage Example</h2>
    <button onclick="saveData()">Save Data</button>
    <button onclick="loadData()">Load Data</button>
    <p id="data"></p>

    <script>
        function saveData() {
            localStorage.setItem("name", "John Doe");
            alert("Data saved.");
        }

        function loadData() {
            var name = localStorage.getItem("name");
            document.getElementById("data").innerHTML = name ? name : "No data found.";
        }
    </script>
</body>
</html>
```

### 8. Web Workers

- Allows background scripts to run independently of user interface scripts, improving performance by handling tasks without interfering with the user interface.

**Example:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML5 Web Workers</title>
</head>
<body>
    <h2>Web Workers Example</h2>
    <button onclick="startWorker()">Start Worker</button>
    <button onclick="stopWorker()">Stop Worker</button>
    <p id="result"></p>

    <script>
        var worker;

        function startWorker() {
            if (typeof(Worker) !== "undefined") {
                if (typeof(worker) == "undefined") {
                    worker = new Worker("worker.js");
                }
                worker.onmessage = function(event) {
                    document.getElementById("result").innerHTML = event.data;
                };
            } else {
                document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Workers...";
            }
        }

        function stopWorker() {
            worker.terminate();
            worker = undefined;
        }
    </script>
</body>
</html>
```

`workers.js` file:

```js
var i = 0;
function timedCount() {
    i++;
    postMessage(i);
    setTimeout("timedCount()", 500);
}
timedCount();
```

## 9. Offline Web Applications

- **Application Cache**: Allows web applications to be accessible even when offline by caching the application resources.

**Example:**

```html
<!DOCTYPE html>
<html lang="en" manifest="app.appcache">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Offline Web App</title>
</head>
<body>
    <h2>Offline Web App Example</h2>
    <p>This web page can be viewed offline.</p>
</body>
</html>
```

`app.appcache` file:

```makefile
CACHE MANIFEST
# 2024-08-14 Version 1.0

CACHE:
index.html
styles.css
scripts.js

NETWORK:
*

FALLBACK:
/ /offline.html
```

## 10. New Doctype Declaration

- Simplified the doctype declaration to `<!DOCTYPE html>`, which is the same for all browsers and indicates that the document is an HTML5 document.

**Example:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML5 Doctype</title>
</head>
<body>
    <h2>HTML5 Doctype Example</h2>
    <p>The doctype declaration is now simplified to <code>&lt;!DOCTYPE html&gt;</code>.</p>
</body>
</html>
```

## 11. Enhanced Accessibility

- HTML5 provides better accessibility features through ARIA (Accessible Rich Internet Applications) attributes, making web content more accessible to people with disabilities.

**Example:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML5 ARIA</title>
</head>
<body>
    <h2>ARIA Accessibility Example</h2>
    <button aria-label="Close" onclick="alert('Closed!')">X</button>
</body>
</html>
```

## 12. Drag and Drop

- HTML5 introduces native support for drag-and-drop functionality, making it easier to implement draggable elements in web pages.

**Example:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML5 Drag and Drop</title>
    <style>
        #drag1 {
            width: 100px;
            height: 100px;
            background-color: #ff0000;
            text-align: center;
            line-height: 100px;
            color: #fff;
            margin-bottom: 20px;
        }
        #dropArea {
            width: 300px;
            height: 300px;
            background-color: #ccc;
            text-align: center;
            line-height: 300px;
        }
    </style>
</head>
<body>
    <h2>Drag and Drop Example</h2>
    <div id="drag1" draggable="true" ondragstart="drag(event)">Drag me</div>
    <div id="dropArea" ondrop="drop(event)" ondragover="allowDrop(event)">Drop here</div>

    <script>
        function allowDrop(event) {
            event.preventDefault();
        }

        function drag(event) {
            event.dataTransfer.setData("text", event.target.id);
        }

        function drop(event) {
            event.preventDefault();
            var data = event.dataTransfer.getData("text");
            event.target.appendChild(document.getElementById(data));
        }
    </script>
</body>
</html>
```

These features have significantly improved the capabilities of web developers, making HTML5 a powerful and versatile standard for building modern web applications.
