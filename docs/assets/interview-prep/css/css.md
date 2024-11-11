#### 1. **What is the difference between `inline`, `block`, and `inline-block` elements in CSS?**

**Answer:**

- **`inline`:** Elements do not start on a new line and only take up as much width as necessary.
- **`block`:** Elements start on a new line and take up the full width available.
- **`inline-block`:** Elements behave like `inline` elements but can have a width and height set, and they respect margin and padding.

**Example:**

```html
<span style="display: inline;">Inline</span>
<div style="display: block;">Block</div>
<span style="display: inline-block; width: 100px;">Inline-block</span>
```

#### 2. **What is the CSS Box Model? Explain its components.**

**Answer:** The CSS Box Model describes the rectangular boxes that are generated for elements in the document tree and consists of:

- **Content:** The actual content of the element.
- **Padding:** Space between the content and the border.
- **Border:** A border surrounding the padding (if any).
- **Margin:** Space outside the border, creating distance from other elements.

**Example:**

```css
.box {
  width: 100px;
  padding: 10px;
  border: 5px solid black;
  margin: 20px;
}
```

#### 3. **How does `position: relative` differ from `position: absolute` in CSS?**

**Answer:**

- **`relative`:** The element is positioned relative to its normal position in the document flow.
- **`absolute`:** The element is removed from the document flow and positioned relative to its nearest positioned ancestor (or the initial containing block if none exists).

**Example:**

```css
.relative {
  position: relative;
  top: 10px;
  left: 20px;
}
.absolute {
  position: absolute;
  top: 10px;
  left: 20px;
}
```

The CSS position property is used to define the position of an element on a webpage.

The location of the positioned element is set with the four properties: top, left, right, and bottom. These properties only work when the position property is set and have different positioning behaviors.

Ref - <https://www.programiz.com/css/position>

#### 4. **What is Flexbox, and when would you use it?**

**Answer:** Flexbox is a one-dimensional layout model used for distributing space and aligning items in a container. It is ideal for creating responsive layouts, centering items, and distributing space among items in a predictable way.

**Example:**

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

#### 5. **How do media queries work in CSS?**

**Answer:** Media queries allow you to apply CSS rules based on the characteristics of the device, such as screen width, height, or orientation. They are used to create responsive designs that adapt to different screen sizes.

**Example:**

```css
@media (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
```

#### 6. **What is the difference between `margin` and `padding`?**

**Answer:**

- **`margin`:** Creates space outside the border of an element, separating it from other elements.
- **`padding`:** Creates space inside the border, between the content and the border.

#### 7. **Explain the `z-index` property and how it affects stacking context.**

**Answer:** The `z-index` property controls the vertical stacking order of elements that overlap. Elements with a higher `z-index` appear in front of those with a lower `z-index`. It only works on positioned elements (`relative`, `absolute`, `fixed`, or `sticky`).

**Example:**

```css
.first {
  position: relative;
  z-index: 1;
}
.second {
  position: relative;
  z-index: 2;
}
```

#### 8. **What are CSS preprocessors, and what are their benefits?**

**Answer:** CSS preprocessors like Sass and LESS extend CSS with features like variables, nested rules, and functions. They help keep the CSS code DRY (Don’t Repeat Yourself), maintainable, and easier to organize.

**Example in Sass:**

```scss
$primary-color: #333;

body {
  color: $primary-color;
}
```

#### 9. **How does the `float` property work in CSS, and what are its common use cases?**

**Answer:** The `float` property moves an element to the left or right, allowing other content to wrap around it. It was commonly used for layouts before Flexbox and Grid but is now mainly used for wrapping text around images.

**Example:**

```css
.image {
  float: left;
  margin-right: 10px;
}
```

#### 10. **What is CSS Grid, and how is it different from Flexbox?**

**Answer:** CSS Grid is a two-dimensional layout system that allows you to create complex grid-based layouts. While Flexbox is best for one-dimensional layouts (rows or columns), Grid is ideal for two-dimensional layouts (both rows and columns).

**Example:**

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}
```

#### 11. **What are CSS transitions, and how do they enhance user experience?**

**Answer:** CSS transitions allow you to change property values smoothly over a specified duration, enhancing user experience by providing visual feedback on state changes like hover or focus.

**Example:**

```css
.button {
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: blue;
}
```

#### 12. **Explain the difference between `rem` and `em` units in CSS.**

**Answer:**

- **`em`:** A relative unit based on the font size of the nearest parent element.
- **`rem`:** A relative unit based on the root element's (`<html>`) font size.

**Example:**

```css
.text {
  font-size: 2em; /* 2 times the parent element's font size */
}

.text-root {
  font-size: 2rem; /* 2 times the root element's font size */
}
```

#### 13. **What is the difference between `visibility: hidden` and `display: none` in CSS?**

**Answer:**

- **`visibility: hidden`:** Hides the element but maintains its space in the layout.
- **`display: none`:** Removes the element from the layout, and it doesn't take up any space.

#### 14. **How do CSS animations differ from CSS transitions?**

**Answer:**

- **Transitions:** Allow smooth changes between two states triggered by events (like hover or focus).
- **Animations:** Enable keyframe-based changes over time, providing more control and complexity.

**Example:**

```css
@keyframes example {
  from {
    background-color: red;
  }
  to {
    background-color: yellow;
  }
}

.box {
  animation: example 5s infinite;
}
```

#### 15. **How does the `box-sizing` property affect element sizing in CSS?**

**Answer:** The `box-sizing` property determines whether the `width` and `height` properties include padding and borders.

- **`content-box`:** Default value where width and height apply to the content only.
- **`border-box`:** Width and height include padding and borders.

**Example:**

```css
.box {
  box-sizing: border-box;
  width: 100px;
  padding: 10px;
  border: 5px solid black;
}
```

#### 16. **What is the purpose of the `calc()` function in CSS?**

**Answer:** The `calc()` function allows you to perform calculations directly in CSS, combining different units (like percentages, pixels, ems) to achieve dynamic and responsive designs.

**Example:**

```css
.box {
  width: calc(100% - 50px);
}
```

#### 17. **How do you create a CSS-only dropdown menu?**

**Answer:** A CSS-only dropdown menu can be created using `:hover` or `:focus` states to toggle visibility of a submenu.

**Example:**

```css
.menu ul {
  display: none;
}

.menu:hover ul {
  display: block;
}
```

#### 18. **What are pseudo-classes in CSS, and how are they used?**

**Answer:** Pseudo-classes target elements in specific states (like `:hover`, `:focus`, `:nth-child`). They are used to apply styles under certain conditions.

**Example:**

```css
a:hover {
  color: red;
}

li:nth-child(odd) {
  background-color: #f0f0f0;
}
```

#### 19. **What are pseudo-elements in CSS, and how do they differ from pseudo-classes?**

**Answer:** Pseudo-elements create and style specific parts of an element, like `::before`, `::after`, and `::first-letter`. They differ from pseudo-classes, which target entire elements in specific states.

**Example:**

```css
p::first-letter {
  font-size: 2em;
  color: red;
}

.box::before {
  content: 'Prefix: ';
  color: blue;
}
```

#### 20. **How can you create a responsive layout using CSS?**

**Answer:** Responsive layouts can be created using media queries, flexible grid layouts, fluid images, and flexible units like `em`, `rem`, and percentages.

**Example:**

```css
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}
```

#### 21. **What is the difference between `nth-child()` and `nth-of-type()` selectors in CSS?**

**Answer:**

- **`nth-child()`:** Selects elements based on their order in the parent, regardless of type.
- **`nth-of-type()`:** Selects elements based on their order among sibling elements of the same type.

**Example:**

```css
p:nth-child(2) {
  color: red;
}

p:nth-of-type(2) {
  color: blue;
}
```

#### 22. **How can you center an element horizontally and vertically using CSS?**

**Answer:** You can center an element using Flexbox, Grid, or positioning techniques.

**Example (Flexbox):**

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
```

#### 23. **What are CSS variables (custom properties), and how do they improve maintainability?**

**Answer:** CSS variables allow you to store values (like colors, font sizes) that can be reused throughout your stylesheets, improving maintainability and consistency.

**Example:**

```css
:root {
  --primary-color: #333;
}

body {
  color: var(--primary-color);
}
```

#### 24. **How does the `display: none` property differ from `visibility: hidden`?**

**Answer:**

- **`display: none`:** Removes the element from the layout, and it doesn't take up any space.
- **`visibility: hidden`:** Hides the element but still occupies space in the layout.

#### 25. **What is the purpose of the `@font-face` rule in CSS?**

**Answer:** The `@font-face` rule allows you to load custom fonts from the web or locally, enabling you to use fonts that aren't installed on the user's device.

**Example:**

```css
@font-face {
  font-family: 'CustomFont';
  src: url('customfont.woff2') format('woff2');
}

body {
  font-family: 'CustomFont', sans-serif;
}
```

#### 26. **How can CSS be used to create animations?**

**Answer:** CSS animations are created using the `@keyframes` rule to define the animation's steps and the `animation` property to apply it to an element.

**Example:**

```css
@keyframes slideIn {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

.box {
  animation: slideIn 1s ease-in-out;
}
```

#### 27. **What is the difference between `overflow: hidden` and `overflow: scroll` in CSS?**

**Answer:**

- **`overflow: hidden`:** Hides any content that overflows the element's box.
- **`overflow: scroll`:** Adds scrollbars to the element, allowing users to scroll through the overflowed content.

#### 28. **What is the purpose of the `clearfix` technique in CSS?**

**Answer:** The `clearfix` technique is used to clear floats, ensuring that a container properly wraps around its floated children.

**Example:**

```css
.clearfix::after {
  content: '';
  display: block;
  clear: both;
}
```

#### 29. **What are CSS counters, and how can they be used?**

**Answer:** CSS counters are used to create automatic numbering (e.g., for lists or headings). They are defined with `counter-reset` and `counter-increment`.

**Example:**

```css
h2 {
  counter-reset: section;
}

h2::before {
  counter-increment: section;
  content: 'Section ' counter(section) ': ';
}
```

#### 30. **How does the `content` property work in CSS?**

**Answer:** The `content` property is used with pseudo-elements like `::before` and `::after` to insert content, such as text, quotes, or icons, before or after an element.

**Example:**

```css
.quote::before {
  content: '“';
}

.quote::after {
  content: '”';
}
```
