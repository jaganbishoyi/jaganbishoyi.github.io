### What is Clickjacking?

**Clickjacking** is a type of cyber attack where a malicious actor tricks a user into clicking on something different from what the user perceives, potentially resulting in unintended actions such as revealing confidential information, downloading malware, or making unauthorized transactions. This is usually done by embedding an invisible or disguised malicious page (like a button or link) within a legitimate page using elements like iframe.

For example, an attacker may overlay a legitimate-looking button on a malicious hidden iframe. When the user clicks the button, they unknowingly perform actions on the hidden page, like transferring money or changing settings, without realizing it.

### How to Prevent Clickjacking Attacks in HTML

To prevent clickjacking attacks, you can use several techniques:

1. **X-Frame-Options Header**:
   This HTTP response header can be used to control whether your webpage can be embedded in an iframe. The values of this header include:
   - `DENY`: Prevents the page from being displayed in a frame or iframe, completely blocking framing.
   - `SAMEORIGIN`: Allows the page to be framed only by pages on the same origin.
   - `ALLOW-FROM uri`: Allows the page to be framed only by a specified origin (though this value is less commonly supported).

   **Example** (in HTTP headers):

   ```http
   X-Frame-Options: DENY
   ```

2. **Content Security Policy (CSP) Frame Ancestors Directive**:
   CSP can be used to define which domains are allowed to frame your content. It’s a more flexible and modern way than `X-Frame-Options`.

   **Example** (in HTTP headers):

   ```http
   Content-Security-Policy: frame-ancestors 'self' example.com;
   ```

   This policy allows only the current site (`self`) and `example.com` to embed the page in an iframe.

3. **Frame Busting JavaScript** (Legacy Method):
   This method uses JavaScript to prevent a webpage from being embedded in an iframe by checking the page's parent and top frame. If they don’t match, the page can be redirected.

   **Example**:

   ```javascript
   if (window.top !== window.self) {
     window.top.location = window.self.location;
   }
   ```

   However, this method is considered less effective than the HTTP headers approach and can be bypassed in some cases.

4. **Implement UI Redress Protections**:
   If your application involves important actions like money transfers or sensitive data updates, add confirmation dialogs, CAPTCHA, or re-authentication steps to ensure user intent.

### Best Practice:

The most reliable methods are using the **X-Frame-Options** header and the **Content Security Policy** with the `frame-ancestors` directive since they are enforced by the browser and cannot be easily bypassed by the attacker.
