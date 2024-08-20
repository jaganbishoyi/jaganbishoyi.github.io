In today's web development landscape, providing users with the option to toggle between light and dark modes has become a standard practice. This feature not only enhances the user experience but also caters to accessibility preferences and system-level settings. This feature may look very simple to the end users, but it takes some additional effort to correctly implement in a web application.

In this blog, we’ll walk through how to implement light, dark, and auto modes in an Angular application using the powerful and flexible `ng-mode-switcher` library. Whether you’re looking for a quick integration or full customization, this guide has you covered.

### Let's get started..!

[ng-mode-switcher](https://www.npmjs.com/package/ng-mode-switcher) is an Angular library that offers a simpler, cleaner, and more efficient approach to implementing the mode-switching feature.

Demo available @ [https://jaganb.dev/angular-mode-switcher-demo/](https://jaganb.dev/angular-mode-switcher-demo/)

Code available @ Github [https://github.com/jaganbishoyi/angular-mode-switcher-demo](https://github.com/jaganbishoyi/angular-mode-switcher-demo)

### Installation

#### ng-mode-switcher

To add ng-mode-switcher along with the required marked library to your package.json use the following commands.

```bash
npm install ng-mode-switcher
```

In **app.module.ts** file import `NgModeSwitcherModule`

```js
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModeSwitcherModule } from 'ng-mode-switcher';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgModeSwitcherModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

Inside the assets/styles/ directory create 3 files:

* _dark.scss
* _light.scss
* _variables.scss

In _dark.scss file add colors related to dark mode.

```css
$bgColor_dark: #000;
$textColor_dark: #fff;
$borderColor_dark: #fff;
```

In _light.scss file add colors related to light mode.

```css
$bgColor_light: #fff;
$textColor_light: #000;
$borderColor_light: #000;
```

In the `_variables.scss` file, import both the `_dark.scss` and `_light.scss` files that contain the color variables. Then, define two mixins: `lighten()` for light mode and `darken()` for dark mode, within the `_variables.scss` file.

```css
@import "light";
@import "dark";

// mixin that enables css variables in light mode
@mixin lighten() {
    --bgColor: #{$bgColor_light};
    --textColor: #{$textColor_light};
    --borderColor: #{$borderColor_light};
}

// mixin that enables css variables in dark mode
@mixin darken() {
    --bgColor: #{$bgColor_dark};
    --textColor: #{$textColor_dark};
    --borderColor: #{$borderColor_dark};
}
```

Next, in the main CSS file `styles.scss`, import the `_variables.scss` file and apply the following CSS.

```css
@import "./assets/styles/variables";

body.dark {
    @include darken();
}

body.light {
    @include lighten();
}

main {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: var(--bgColor);
    color: var(--textColor);
}
```

Next, in `app.component.html` add the mode selector

```html
<ng-mode-switcher></ng-mode-switcher>
```

You may also pass `config` as an object:

```html
<ng-mode-switcher [config]="customConfig"></ng-mode-switcher>
```

**Default Config:**

```js
config: IConfig = {
    legend: {
        visible: true,
        LIGHT: 'light',
        DARK: 'dark',
        SYSTEM: 'system'
    }
}
```

**Custom Config:**

Hide the legend

```js
customConfig: IConfig = {
    legend: {
        visible: false
    }
}
```

Add custom legends

```js
customConfig: IConfig = {
    legend: {
        visible: true,
        LIGHT: 'day',
        DARK: 'night',
        SYSTEM: 'auto'
    }
}
```

Now, you can utilize the color variables (`--bgColor`, `--textColor`, and `--borderColor`) throughout the entire application, just as we demonstrated in the `demo.component.scss` and `styles.scss` files.

**demo.component.scss:**

```css
.content {
    display: flex;
    margin: 82px auto 32px;
    padding: 0 16px;
    max-width: 960px;
    flex-direction: column;
    align-items: center;

    .section {
        border: 2px solid var(--borderColor);
        padding: 15px 30px;
        margin-top: 1px;
        color: var(--textColor);
        max-width: 480px;

        h1 {
            text-align: center;
        }

        ul {
            padding-left: 1.8rem;
        }
    }
}

.version {
    margin: 0 20px 0 16px;
    font-weight: 800;
    text-transform: lowercase;
}

.demo-container {
    margin-top: 60px;
}
```

**styles.scss:**

```css
main {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: var(--bgColor);
    color: var(--textColor);
}
```

---

Implementing light and dark modes in your Angular application not only enhances user experience but also demonstrates a commitment to accessibility and personalization. With the `ng-mode-switcher` library, integrating these modes becomes straightforward and flexible, allowing for a seamless transition between themes based on user preferences or system settings. By leveraging SCSS variables and mixins, you can maintain a clean and adaptable codebase, ensuring that your application remains visually consistent and user-friendly across different themes.

I hope this guide has provided you with the insights and tools needed to effectively implement and customize mode switching in your Angular projects. Embrace the power of dynamic theming and give your users the control they crave for a tailored browsing experience.
