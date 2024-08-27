### What is Content Security Policy (CSP)?

**Content Security Policy (CSP)** is a security feature that helps prevent a variety of attacks on websites, including **Cross-Site Scripting (XSS)**, **clickjacking**, and other types of code injection attacks. It allows web developers to specify which sources of content (such as scripts, styles, images, etc.) are allowed to be loaded and executed on a web page. This reduces the risk of malicious scripts being executed on a website, as only resources from trusted sources are permitted.

CSP is implemented as an HTTP response header (`Content-Security-Policy`) that defines a set of rules specifying where content can come from. If content attempts to load from a source that is not permitted by the policy, the browser blocks it.

### How CSP Enhances Security

CSP enhances security by:

1. **Preventing XSS (Cross-Site Scripting) Attacks**:
   - CSP can block the execution of inline scripts (e.g., scripts inside `<script>` tags or HTML attributes) unless explicitly allowed.
   - It also restricts the sources from which scripts can be loaded, preventing attackers from injecting scripts hosted on malicious domains.
   - By default, CSP disallows unsafe inline scripts unless `unsafe-inline` is specified, but it's best to avoid this to reduce vulnerability.

   **Example**:

   ```http
   Content-Security-Policy: script-src 'self' https://trustedscripts.example.com;
   ```

   This policy allows scripts only from the current origin (`self`) and from `trustedscripts.example.com`, reducing the risk of malicious script execution.

2. **Preventing Code Injection**:
   - CSP can limit the types of content (e.g., images, fonts, frames) that can be loaded, preventing the injection of malicious code through third-party resources.
   - It blocks content that attempts to be loaded from unauthorized or untrusted sources, reducing the likelihood of attackers injecting harmful resources.

3. **Mitigating Clickjacking**:
   - CSP has a `frame-ancestors` directive that controls which websites can embed your content in a frame or iframe. This helps prevent clickjacking attacks by ensuring that your site cannot be framed by untrusted domains.

   **Example**:

   ```http
   Content-Security-Policy: frame-ancestors 'self';
   ```

   This policy prevents your page from being embedded in iframes by any external domain.

4. **Blocking Mixed Content**:
   - CSP can be used to enforce that all resources (scripts, images, etc.) are loaded securely over HTTPS. This helps protect against "mixed content" attacks, where a secure HTTPS site loads insecure HTTP resources, which could be intercepted and modified by attackers.

   **Example**:

   ```http
   Content-Security-Policy: default-src https:;
   ```

   This policy ensures that all resources are loaded via HTTPS.

5. **Restricting Dangerous Methods**:
   - CSP can block the use of `eval()` and other dangerous methods that convert strings into executable code. This helps prevent XSS and code injection attacks.

   **Example**:

   ```http
   Content-Security-Policy: script-src 'self'; script-src-elem 'none';
   ```

   This policy blocks the use of dangerous functions like `eval()` by limiting where scripts can be sourced.

### How to Implement CSP

CSP is configured via an HTTP response header or a `<meta>` tag in the HTML document's `<head>` section. Here’s an example of an HTTP header that implements CSP:

```http
Content-Security-Policy:
default-src 'self';
script-src 'self' https://trustedscripts.example.com;
object-src 'none';
frame-ancestors 'self';
```

In this policy:

- `default-src 'self';` allows content (e.g., images, media) only from the same origin.
- `script-src 'self' https://trustedscripts.example.com;` allows scripts only from the same origin and `trustedscripts.example.com`.
- `object-src 'none';` blocks any `object` elements, which could include plugins like Flash or Java applets.
- `frame-ancestors 'self';` ensures that the page cannot be framed by other websites.

### CSP Directives

Here are some of the key CSP directives:

- `default-src`: Sets a default policy for loading content types like scripts, styles, images, etc., if no specific policy is provided.
- `script-src`: Restricts the sources of JavaScript.
- `style-src`: Restricts the sources of CSS styles.
- `img-src`: Restricts the sources of images.
- `font-src`: Restricts the sources of web fonts.
- `connect-src`: Restricts the sources of AJAX, WebSocket, and other connections.
- `frame-ancestors`: Controls which domains can embed your content in a frame or iframe.
- `report-uri`: Specifies a URI where the browser sends violation reports when a CSP policy is violated.

### Example of a CSP in HTML

You can also implement CSP via a `<meta>` tag in the HTML file:

```html
<meta http-equiv="Content-Security-Policy"
content="default-src 'self'; script-src 'self' https://trustedscripts.example.com;
object-src 'none'; frame-ancestors 'self';">
```

### Benefits of CSP

- Reduces the attack surface by limiting where scripts and resources can be loaded from.
- Provides a robust defense against common web vulnerabilities like XSS and clickjacking.
- Offers granular control over resource loading, enhancing overall security.

### Best Practices

- Start with a report-only mode (`Content-Security-Policy-Report-Only`) to identify violations before enforcing the policy.
- Gradually tighten the policy as you gain more confidence that the policy does not interfere with legitimate content.
- Avoid allowing unsafe directives such as `unsafe-inline` or `unsafe-eval`.

By adopting a well-configured CSP, web developers can significantly enhance the security of their applications and reduce the risk of many common web-based attacks.
