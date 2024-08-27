### What is Cross-Site Scripting (XSS)?

**Cross-Site Scripting (XSS)** is a type of security vulnerability typically found in web applications. It occurs when an attacker is able to inject malicious scripts into web pages that are viewed by other users. These scripts are executed in the context of the victim's browser, allowing the attacker to perform actions like stealing cookies, session tokens, or other sensitive information, defacing web pages, or redirecting users to malicious sites.

There are three main types of XSS:

1. **Stored XSS (Persistent XSS)**: The malicious script is permanently stored on the target server (e.g., in a database) and is executed when a victim visits the affected page.
2. **Reflected XSS (Non-persistent XSS)**: The script is reflected off a web server (e.g., as part of a URL parameter) and is executed in the victim’s browser when they visit a specially crafted link.
3. **DOM-based XSS**: The attack occurs entirely on the client side, where the injected script modifies the structure or behavior of the page by interacting with the DOM (Document Object Model).

### How to Prevent XSS in HTML

Preventing XSS attacks involves proper handling of user input and output, ensuring that malicious scripts cannot be executed in the user's browser. Some techniques for preventing XSS attacks include:

1. **Sanitize and Validate Input**:
   - Always sanitize and validate user inputs on both the client and server side. Make sure that user data is treated as untrusted and never allowed to inject executable code.
   - Use libraries and frameworks that provide secure input sanitization mechanisms. For instance, libraries like `DOMPurify` can help clean HTML input.

2. **Escape User Input**:
   - Escape special characters in user inputs to prevent them from being interpreted as code. In HTML contexts, escaping characters such as `<`, `>`, `&`, `"`, and `'` can prevent scripts from executing.
   - In JavaScript contexts, ensure special characters are appropriately escaped to prevent injection into script tags or inline scripts.

   **Example** (HTML escaping):

   ```html
   <span>Username: &lt;script&gt;alert('XSS')&lt;/script&gt;</span>
   ```

3. **Use Content Security Policy (CSP)**:
   - A **Content Security Policy (CSP)** is an HTTP response header that restricts the sources from which content (scripts, styles, images, etc.) can be loaded. This helps mitigate XSS by preventing the execution of inline scripts or scripts from untrusted sources.

   **Example** (in HTTP headers):

   ```http
   Content-Security-Policy: script-src 'self' https://trustedscripts.example.com;
   ```

   This ensures that only scripts from the same origin (`self`) or trusted domains (e.g., `trustedscripts.example.com`) can be executed.

4. **Avoid Inline JavaScript**:
   - Avoid embedding JavaScript directly in HTML elements (e.g., using `onclick`, `onmouseover`, etc.). Instead, use external scripts or bind event listeners via JavaScript files.
   - Disallow the use of `eval()` and similar methods that can interpret strings as code, as these methods are vulnerable to script injection.

5. **HTTPOnly and Secure Flags for Cookies**:
   - Set the **HTTPOnly** flag on cookies to prevent them from being accessed via JavaScript (e.g., `document.cookie`). This makes it harder for XSS attacks to steal session cookies.
   - Use the **Secure** flag for cookies to ensure they are only transmitted over HTTPS.

   **Example**:

   ```http
   Set-Cookie: sessionid=abc123; HttpOnly; Secure;
   ```

6. **Output Encoding**:
   - Encode data before rendering it to the user to ensure that any potentially dangerous characters are converted to a harmless representation.
   - HTML, URL, and JavaScript encoding can help prevent XSS attacks by ensuring that user-provided data is rendered as plain text instead of being interpreted as executable code.

   **Example** (JavaScript encoding):

   ```javascript
   const safeData = encodeURIComponent(userInput);
   ```

### Best Practices:

- Always treat user input as potentially dangerous and sanitize/validate it properly.
- Apply a strong Content Security Policy to limit the sources of executable scripts.
- Use libraries and frameworks that inherently protect against XSS, such as Angular or React, which automatically escape user input in templates.
