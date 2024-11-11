### 1. **What are the new features introduced in HTML5?**

**Answer:** HTML5 introduced several new features to improve web development, including:

- **Semantic elements** like `<header>`, `<footer>`, `<section>`, and `<article>` to define the structure of a web page.
- **Multimedia support** with native audio (`<audio>`) and video (`<video>`) tags.
- **Canvas API** for drawing graphics using JavaScript.
- **Local storage** with `localStorage` and `sessionStorage` for storing data on the client-side.
- **Geolocation API** for location-based services.

**Example:**

```html
<header>
  <h1>My Website</h1>
</header>
<section>
  <article>
    <h2>Article Title</h2>
    <p>This is a sample article using HTML5 semantic elements.</p>
  </article>
</section>
```

### 2. **How do you ensure your HTML code is accessible?**

**Answer:** To ensure accessibility, you can:

- Use semantic HTML tags (`<nav>`, `<header>`, `<footer>`).
- Add `alt` attributes to images.
- Use ARIA (Accessible Rich Internet Applications) roles and attributes.
- Ensure proper tab order with `tabindex`.
- Provide labels for form controls using `<label>`.

**Example:**

```html
<img src="logo.png" alt="Company Logo" />
<button aria-label="Submit Form">Submit</button>
```

### 3. **Explain the difference between `<div>` and `<span>`. When would you use each?**

**Answer:**

- `<div>` is a block-level element, meaning it takes up the full width available, with a line break before and after.
- `<span>` is an inline element, meaning it only takes up as much width as necessary and doesn’t force a line break.

**Example:**

```html
<div>
  <p>This is inside a div.</p>
</div>
<p>This is an inline <span>span element</span> inside a paragraph.</p>
```

### 4. **What is the purpose of the `doctype` declaration in HTML?**

**Answer:** The `<!DOCTYPE html>` declaration defines the document type and version of HTML. It helps the browser render the page correctly, ensuring standards-compliant rendering.

**Example:**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Sample Page</title>
  </head>
  <body>
    <p>Hello, World!</p>
  </body>
</html>
```

### 5. **What are semantic HTML elements, and why are they important?**

**Answer:** Semantic HTML elements have meaningful names that describe their purpose and content. They help with accessibility, SEO, and code readability.

Semantic HTML, also known as semantic markup, refers to the use of HTML tags that convey the meaning or semantics of the content contained within them.

By adding semantic HTML tags to your pages, you provide additional information that helps define the roles and relative importance of the different parts of your page. It enhance the SEO and accessability of the page.

If we don't use the semantic element properly it will affect the usability and reduce the site reach.

Ref - <https://www.semrush.com/blog/semantic-html5-guide/>

**Examples:**

```html
<header></header>
<footer></footer>
<article></article>
<section></section>
```

### 6. **Describe the box model in HTML and how it affects element layout.**

**Answer:** The box model in HTML describes the structure of an element’s layout, including:

- **Content:** The actual content of the element.
- **Padding:** The space between the content and the border.
- **Border:** The boundary around the padding.
- **Margin:** The space outside the border that separates the element from others.

**Example:**

```html
<style>
  div {
    width: 200px;
    padding: 10px;
    border: 5px solid black;
    margin: 20px;
  }
</style>
<div>Box Model Example</div>
```

### 7. **What is the difference between inline, block, and inline-block elements?**

**Answer:**

- **Inline:** Elements only take up as much width as needed (e.g., `<span>`, `<a>`).
- **Block:** Elements take up the full width available and start on a new line (e.g., `<div>`, `<p>`).
- **Inline-block:** Elements are like inline elements but respect height and width properties (e.g., `<img>`, `<button>`).

**Example:**

```html
<span>This is inline</span>
<div>This is block</div>
<img src="image.jpg" style="display:inline-block;" />
```

### 8. **How can you embed multimedia content (audio and video) in HTML?**

**Answer:** You can use the `<audio>` and `<video>` elements to embed multimedia content.

**Example:**

```html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg" />
  Your browser does not support the audio element.
</audio>
<video controls>
  <source src="video.mp4" type="video/mp4" />
  Your browser does not support the video element.
</video>
```

### 9. **What are meta tags, and how do they impact SEO and web performance?**

**Answer:** Meta tags provide metadata about the HTML document, such as descriptions, keywords, author, and viewport settings. They impact SEO by helping search engines understand the content and performance by controlling browser behavior (e.g., viewport settings for responsive design).

**Example:**

```html
<meta name="description" content="This is a sample webpage." />
<meta name="keywords" content="HTML, CSS, JavaScript" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

### 10. **Explain the purpose and usage of the `data-*` attributes.**

**Answer:** `data-*` attributes allow you to store custom data within HTML elements, which can be accessed via JavaScript. They are useful for storing information that is not visible to the user but is needed for client-side processing.

**Example:**

```html
<div data-user-id="12345" data-role="admin">User Info</div>
<script>
  var userId = document.querySelector('div').dataset.userId;
  console.log(userId); // Outputs: 12345
</script>
```

### 11. **How do you optimize HTML for performance?**

**Answer:** Some techniques to optimize HTML for performance include:

- Minifying HTML files.
- Using asynchronous loading for scripts.
- Deferring non-critical CSS and JavaScript.
- Reducing the number of HTTP requests by combining files.
- Using `preload` and `prefetch` for critical resources.

**Example:**

```html
<link rel="preload" href="styles.css" as="style" />
<script src="script.js" async></script>
```

### 12. **Discuss the use of the `picture` element in responsive images. How does it compare to `img`?**

**Answer:** The `<picture>` element provides a way to display different images based on the device’s screen size, resolution, or other factors. It allows for multiple `<source>` elements, each with its `media` attribute, making it more flexible than the `<img>` tag.

**Example:**

```html
<picture>
  <source media="(max-width: 799px)" srcset="small.jpg" />
  <source media="(min-width: 800px)" srcset="large.jpg" />
  <img src="default.jpg" alt="Responsive image" />
</picture>
```

### 13. **What are the best practices for structuring a large HTML document?**

**Answer:** Best practices include:

- Using semantic elements to define sections (`<header>`, `<footer>`, `<nav>`, etc.).
- Keeping the HTML structure clean and logical.
- Using comments to separate sections.
- Modularizing the code with reusable components.
- Keeping the code DRY (Don't Repeat Yourself).

**Example:**

```html
<!-- Header Section -->
<header></header>
<!-- Main Content Section -->
<main>
  <section></section>
  <section></section>
</main>
<!-- Footer Section -->
<footer></footer>
```

### 14. **Explain the use and benefits of `ARIA` (Accessible Rich Internet Applications) roles in HTML.**

**Answer:** ARIA roles and attributes enhance the accessibility of web applications, especially for users with disabilities. They help in defining roles, states, and properties of HTML elements, making it easier for assistive technologies to interpret the content.

**Example:**

```html
<button role="button" aria-pressed="false">Toggle</button>
```

### 15. **How would you handle cross-browser compatibility issues with HTML?**

**Answer:** Techniques include:

- Using feature detection libraries like Modernizr.
- Writing fallbacks for unsupported features.
- Using Polyfills for older browsers.
- Testing across multiple browsers and devices.
- Following web standards and avoiding browser-specific hacks.

**Example:**

```html
<!-- Feature Detection -->
<script>
  if ('geolocation' in navigator) {
    // Geolocation is supported
  } else {
    // Fallback for older browsers
  }
</script>
```

### 16. **What are the differences between `localStorage`, `sessionStorage`, and cookies? How would you use them in conjunction with HTML?**

**Answer:**

- **localStorage:** Stores data with no expiration time; data persists even after the browser is closed.
- **sessionStorage:** Stores data for the duration of the page session; data is lost when the tab or window is closed.
- **Cookies:** Store small amounts of data that are sent with every HTTP request; can have an expiration time.

**Example:**

```html
<script>
  // localStorage example
  localStorage.setItem('key', 'value');

  // sessionStorage example
  sessionStorage.setItem('key', 'value');

  // Cookie example
  document.cookie = 'username=John; expires=Fri, 31 Dec 2024 12:00:00 UTC';
</script>
```

### 17. **How do you manage forms in HTML? Discuss the new input types introduced in HTML5.**

**Answer:** HTML5 introduced new input types to enhance form management, such as `email`, `url`, `number`, `date`, `time`, `range`, `color`, and `search`. These input types provide built-in validation and UI enhancements.

**Example:**

```html
<form>
  <input type="email" placeholder="Enter your email" />
  <input type="date" />
  <input type="range" min="1" max="10" />
</form>
```

### 18. **What is the purpose of the `shadow DOM`, and how does it relate to HTML?**

**Answer:** The `shadow DOM` is a feature that encapsulates a section of the DOM tree, isolating it from the rest of the document. It’s used in Web Components to create reusable, self-contained elements with their own styles and scripts, avoiding style and script conflicts with the main document.

**Example:**

```html
<div id="host"></div>
<script>
  const host = document.querySelector('#host');
  const shadowRoot = host.attachShadow({ mode: 'open' });
  shadowRoot.innerHTML = `<style>p { color: red; }</style><p>Shadow DOM content</p>`;
</script>
```

### 19. **How do you implement custom data attributes in HTML, and what are their use cases?**

**Answer:** Custom data attributes (`data-*`) allow you to embed custom data in HTML elements. They are useful for storing extra information that can be accessed and manipulated using JavaScript.

**Example:**

```html
<div data-user-id="12345" data-role="admin">User Info</div>
<script>
  const userId = document.querySelector('[data-user-id]').dataset.userId;
  console.log(userId); // Outputs: 12345
</script>
```

### 20. **Explain the concept of progressive enhancement and how HTML plays a role in it.**

**Answer:** Progressive enhancement is a strategy for web design that focuses on providing a basic level of user experience for all users while enhancing the experience for those with more advanced browser features. HTML plays a key role by serving as the foundation that all users can access, regardless of their browser's capabilities.

**Example:**

```html
<!-- Basic HTML for all users -->
<form action="/submit" method="post">
  <input type="text" name="username" required />
  <button type="submit">Submit</button>
</form>

<!-- Enhanced experience with JavaScript -->
<script>
  document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    // AJAX form submission for modern browsers
  });
</script>
```

# Security-related questions focused on HTML

### 1. **What is Cross-Site Scripting (XSS), and how can it be prevented in HTML?**

**Answer:** XSS is a vulnerability where attackers inject malicious scripts into web pages viewed by others. It can be prevented by:

- Escaping user input.
- Validating and sanitizing input.
- Using Content Security Policy (CSP) headers.

**Example Prevention:**

```html
<script>
  const userInput = document.getElementById('input').value;
  const sanitizedInput = userInput.replace(/</g, '&lt;').replace(/>/g, '&gt;');
</script>
```

### 2. **What is Content Security Policy (CSP), and how does it enhance security?**

**Answer:** CSP is an HTTP header that restricts resources (e.g., scripts, images) the browser can load. It helps prevent XSS and other attacks by allowing only trusted content.

**Example:**

```html
<meta
  http-equiv="Content-Security-Policy"
  content="default-src 'self'; script-src 'self' https://trusted.cdn.com;"
/>
```

### 3. **How do you prevent Clickjacking attacks in HTML?**

**Answer:** Clickjacking can be prevented by using the `X-Frame-Options` header or the `frame-ancestors` directive in CSP to prevent the site from being embedded in an iframe.

**Example:**

```html
<meta http-equiv="X-Frame-Options" content="DENY" />
<!-- Or -->
<meta http-equiv="Content-Security-Policy" content="frame-ancestors 'none';" />
```

### 4. **What are the risks of using the `innerHTML` property, and how can they be mitigated?**

**Answer:** Using `innerHTML` can introduce XSS vulnerabilities if untrusted input is inserted. To mitigate this, avoid using `innerHTML` with user input or sanitize the input before insertion.

**Example:**

```html
document.getElementById('content').innerHTML = sanitizedContent;
```

### 5. **What is the purpose of the `HttpOnly` attribute in cookies?**

**Answer:** The `HttpOnly` attribute prevents client-side scripts from accessing cookies, reducing the risk of XSS attacks.

**Example:**

```html
Set-Cookie: sessionId=abc123; HttpOnly;
```

### 6. **Explain the `Secure` attribute in cookies and its significance.**

**Answer:** The `Secure` attribute ensures cookies are only sent over HTTPS, protecting them from being intercepted during transmission.

**Example:**

```html
Set-Cookie: sessionId=abc123; Secure;
```

### 7. **What is Cross-Site Request Forgery (CSRF), and how can it be mitigated in HTML forms?**

**Answer:** CSRF is an attack where a malicious site tricks a user into performing actions on another site where they are authenticated. It can be mitigated by using CSRF tokens in forms and validating them server-side.

**Example:**

```html
<form method="POST" action="/submit">
  <input type="hidden" name="csrf_token" value="uniqueToken123" />
  <button type="submit">Submit</button>
</form>
```

### 8. **Why is it important to validate and sanitize user input on both the client and server sides?**

**Answer:** Validating and sanitizing input on the client-side improves user experience by providing immediate feedback, while server-side validation is crucial for security since client-side validation can be bypassed.

### 9. **What are the dangers of using deprecated HTML tags like `<marquee>` and `<blink>`?**

**Answer:** Deprecated tags can lead to inconsistent behavior across browsers and might have vulnerabilities that are no longer patched, posing security risks.

### 10. **How does HTTPS improve the security of HTML content?**

**Answer:** HTTPS encrypts the communication between the client and server, protecting the data from being intercepted or tampered with by attackers.

### 11. **What are the security implications of allowing file uploads via HTML forms?**

**Answer:** Allowing file uploads can introduce risks like:

- Uploading malicious files (e.g., scripts, executables).
- Overwriting existing files.
- Consuming excessive server resources.

Mitigation strategies include validating file types, using antivirus scanning, and storing files securely.

### 12. **How can the `sandbox` attribute of iframes enhance security?**

**Answer:** The `sandbox` attribute restricts what an iframe can do, such as preventing script execution, form submission, and navigation. This reduces the risk of malicious content being embedded.

**Example:**

```html
<iframe src="content.html" sandbox="allow-scripts"></iframe>
```

### 13. **What is HTTP Strict Transport Security (HSTS), and how does it protect HTML pages?**

**Answer:** HSTS is an HTTP header that forces browsers to only communicate with the server over HTTPS, even if the user tries to access the site via HTTP. It protects against man-in-the-middle attacks.

**Example:**

```html
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

### 14. **What is the risk of using inline JavaScript in HTML, and how can it be mitigated?**

**Answer:** Inline JavaScript can be a vector for XSS attacks. Mitigation includes using external scripts, setting a strict CSP, and avoiding the use of `eval()` and similar functions.

### 15. **How can HTML forms be protected against SQL Injection?**

**Answer:** While SQL Injection is more a concern at the backend, ensuring that HTML forms properly validate and sanitize input before sending it to the server reduces the risk. Also, use prepared statements on the server side.

### 16. **What is the danger of using the `eval()` function in JavaScript embedded in HTML?**

**Answer:** The `eval()` function can execute arbitrary code, making it a significant security risk, especially if it processes user input. It should be avoided or replaced with safer alternatives.

### 17. **How do you secure sensitive information in HTML forms, such as passwords or credit card details?**

**Answer:** Sensitive information should be transmitted over HTTPS, and forms should use `autocomplete="off"` for fields like passwords. The backend should also ensure encryption and secure storage.

**Example:**

```html
<form action="/submit" method="post">
  <input type="password" name="password" autocomplete="off" />
  <button type="submit">Submit</button>
</form>
```

### 18. **What is the role of the `rel="noopener noreferrer"` attribute in HTML links?**

**Answer:** This attribute prevents the new page opened by a link (`_blank`) from gaining access to the original page via `window.opener`, reducing the risk of phishing attacks.

**Example:**

```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer"
  >Visit Example</a
>
```

### 19. **Why should you avoid using `autocomplete="on"` for certain HTML form fields?**

**Answer:** Using `autocomplete="on"` for sensitive fields like passwords or credit card numbers can lead to unintended autofilling of data in public or shared computers, posing a security risk.

**Example:**

```html
<input type="password" name="password" autocomplete="off" />
```

### 20. **How can you prevent sensitive HTML content from being indexed by search engines?**

**Answer:** You can use the `robots.txt` file or the `meta` tag with `robots` attributes like `noindex` and `nofollow` to prevent search engines from indexing sensitive pages.

**Example:**

```html
<meta name="robots" content="noindex, nofollow" />
```

# Performance-related questions focused on HTML

### 1. **What is the impact of HTML structure on page performance?**

**Answer:** The structure of HTML affects how quickly the browser can parse and render the page. A well-organized structure with minimal DOM depth and optimized use of elements can improve performance by reducing the time it takes to construct the DOM tree.

### 2. **How does the use of inline styles affect page performance?**

**Answer:** Inline styles are directly applied to elements, leading to faster initial rendering since no external CSS needs to be loaded. However, they can increase the HTML file size and reduce maintainability, which can negatively affect performance in larger projects.

### 3. **Why is it important to minimize HTTP requests in HTML?**

**Answer:** Each HTTP request adds latency, increasing the time it takes for the page to load. Reducing the number of requests (e.g., by combining CSS/JS files and using image sprites) improves performance by minimizing this overhead.

### 4. **What is the purpose of using the `defer` and `async` attributes with scripts in HTML?**

**Answer:**

- **`async`:** Loads the script asynchronously, allowing the page to continue parsing HTML while the script loads. It executes as soon as it’s ready.
- **`defer`:** Loads the script in parallel with HTML parsing but delays execution until the HTML document is fully parsed.

Both attributes can improve performance by preventing blocking of the HTML parsing process.

**Example:**

```html
<script src="script.js" async></script>
<script src="script.js" defer></script>
```

### 5. **How does lazy loading improve the performance of images and videos?**

**Answer:** Lazy loading defers the loading of non-essential images and videos until they are needed (e.g., when they enter the viewport). This reduces initial load time and conserves bandwidth.

**Example:**

```html
<img src="image.jpg" loading="lazy" alt="Lazy Loaded Image" />
```

### 6. **What is the impact of using too many DOM elements on performance?**

**Answer:** A large number of DOM elements increases the complexity of the DOM tree, leading to slower rendering, longer reflows, and higher memory usage. Optimizing the number of elements can improve performance.

### 7. **How do HTML5 semantic elements contribute to performance?**

**Answer:** HTML5 semantic elements (like `<header>`, `<footer>`, `<section>`) improve performance indirectly by making the code more understandable and maintainable. This can lead to better-optimized code and easier application of CSS/JS, reducing rendering and processing times.

### 8. **Why is it important to set explicit widths and heights on images in HTML?**

**Answer:** Setting explicit dimensions prevents layout shifts by allowing the browser to allocate the correct space before the image loads, improving perceived performance and user experience.

**Example:**

```html
<img src="image.jpg" width="600" height="400" alt="Image with dimensions" />
```

### 9. **How does the use of CDNs (Content Delivery Networks) affect HTML page performance?**

**Answer:** CDNs distribute content across multiple geographically dispersed servers, reducing latency and improving load times for users by serving resources from a location closer to them.

### 10. **What is the impact of file size on HTML performance, and how can it be minimized?**

**Answer:** Larger HTML files take longer to download and parse, slowing down the page load. Minimizing file size can be achieved by removing unnecessary whitespace, comments, and using minification tools.

### 11. **How do browser caching strategies improve HTML performance?**

**Answer:** Caching stores a copy of the web resources on the user’s device, reducing the need to re-download them on subsequent visits. Properly configured cache headers (`Cache-Control`, `Expires`) can significantly reduce load times.

### 12. **What is the impact of using too many fonts on HTML performance?**

**Answer:** Loading multiple font files increases HTTP requests and file sizes, slowing down page load times. Limiting the number of font families and weights, and using modern font formats like WOFF2, can improve performance.

### 13. **How does the `preload` attribute improve HTML performance?**

**Answer:** The `preload` attribute tells the browser to fetch resources (like fonts, images, or scripts) earlier in the loading process, improving performance by reducing the time it takes to load critical resources.

**Example:**

```html
<link rel="preload" href="style.css" as="style" />
```

### 14. **How can the use of web workers in HTML improve performance?**

**Answer:** Web workers run scripts in the background, parallel to the main thread, preventing heavy JavaScript tasks from blocking the UI rendering process and improving performance.

### 15. **What is the benefit of using `defer` for script loading instead of placing scripts at the bottom of the HTML document?**

**Answer:** Using `defer` allows scripts to be loaded in parallel with HTML parsing and ensures they execute in the correct order after the HTML document is fully parsed, optimizing both load time and script execution timing.

### 16. **How does the use of the `viewport` meta tag affect performance on mobile devices?**

**Answer:** The `viewport` meta tag controls the layout of the page on mobile devices. Proper configuration ensures content is rendered correctly and prevents excessive scaling or reflow, improving performance.

**Example:**

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

### 17. **How can the use of `data-` attributes affect performance?**

**Answer:** While `data-` attributes are useful for storing extra information, excessive use can bloat the HTML and increase the DOM size, potentially affecting performance. It’s important to use them judiciously.

### 18. **What is the role of `critical rendering path` optimization in HTML performance?**

**Answer:** The critical rendering path is the sequence of steps the browser takes to render a page. Optimizing it involves minimizing resources that block rendering (like CSS and JavaScript), reducing the number of critical resources, and compressing resources to improve page load times.

### 19. **How can reducing the depth of the DOM tree improve HTML performance?**

**Answer:** A shallower DOM tree is quicker to render and manipulate, leading to faster page loads and interactions. Minimizing nested elements reduces reflows and repaints, improving performance.

### 20. **Why is it important to compress and optimize images in HTML?**

**Answer:** Images often make up a large portion of a page's total size. Compressing and optimizing images reduces their file size, decreasing load times and improving overall page performance.

**Example Tools:** Use formats like WebP, and tools like ImageOptim or online compressors.
