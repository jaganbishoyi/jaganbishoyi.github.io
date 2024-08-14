Semantic HTML elements have meaningful names that describe their purpose and content. They help with `accessibility`, `SEO`, and `code readability`.

Semantic HTML, also known as semantic markup, refers to the use of HTML tags that convey the meaning or semantics of the content contained within them.

By adding semantic HTML tags to your pages, you provide additional information that helps define the roles and relative importance of the different parts of your page. It enhance the SEO and accessability of the page.

If we don't use the semantic element properly it will affect the usability and reduce the site reach.

Ref - <https://www.semrush.com/blog/semantic-html5-guide/>

**Examples:**

![Semantic HTML elements](../assets/images/blog/semantic-html.png "Semantic HTML elements")

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Semantic HTML Example</title>
</head>
<body>
    <!-- Header Section -->
    <header>
        <h1>My Website</h1>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>

    <!-- Main Content Section -->
    <main>
        <!-- Article Section -->
        <article>
            <h2>Introduction to Semantic HTML</h2>
            <p>
                Semantic HTML is the use of HTML tags to reinforce the meaning of the information
                in webpages rather than just for presentation purposes.
            </p>
            <p>
                By using semantic tags, you make your HTML more readable,
                accessible, and SEO-friendly.
            </p>
        </article>

        <!-- Section within Main Content -->
        <section>
            <h2>Benefits of Semantic HTML</h2>
            <ul>
                <li>Improves accessibility</li>
                <li>Enhances SEO</li>
                <li>Makes the code more readable</li>
            </ul>
        </section>

        <!-- Aside for Related Content -->
        <aside>
            <h3>Related Links</h3>
            <ul>
                <li><a href="#">Learn more about HTML5</a></li>
                <li><a href="#">Best practices for semantic HTML</a></li>
            </ul>
        </aside>
    </main>

    <!-- Footer Section -->
    <footer>
        <p>&copy; 2024 My Website. All rights reserved.</p>
        <address>
            Contact us at
            <a href="mailto:info@mywebsite.com">info@mywebsite.com</a>
        </address>
    </footer>
</body>
</html>

```
