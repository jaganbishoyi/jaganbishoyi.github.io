# isPlatformBrowser Vs isPlatformServer

`isPlatformBrowser` and `isPlatformServer` are utility functions provided by Angular to help determine whether your code is running in a browser environment or a server environment. These functions are useful when developing applications that use Angular Universal for server-side rendering (SSR) or when dealing with platform-specific logic.

### isPlatformBrowser()

`isPlatformBrowser` is a function used to check if the code is running in a browser environment (e.g., when the application is rendered by the browser after client-side bootstrapping).

#### Usage:

- It helps in determining if certain code should run only in the browser. For example, DOM manipulations should only be done in the browser.
- It prevents server-side code from trying to access browser-specific objects like `window` or `document`, which don't exist on the server.

```js
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';

constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  if (isPlatformBrowser(this.platformId)) {
    // This code will only run in the browser
    console.log('Running in the browser');
  }
}
```

### isPlatformServer()

`isPlatformServer` is a function used to check if the code is running on a server environment (e.g., when the application is rendered on the server via Angular Universal).

#### Usage:

- It helps in determining if certain code should run only on the server. For instance, you might want to handle some SEO-related tasks or manage server-specific logic like fetching initial data or rendering content differently for the server.
- It ensures that code meant for server execution, like SSR pre-rendering, doesn’t run in the browser.

```js
import { isPlatformServer } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';

constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  if (isPlatformServer(this.platformId)) {
    // This code will only run on the server
    console.log('Running on the server');
  }
}
```

### Example Use Cases

1. **Avoiding Browser-Specific Code on the Server:**
   If you're using Angular Universal and trying to access browser-specific APIs like `localStorage` or `window`, wrapping that code inside `isPlatformBrowser` checks will prevent runtime errors on the server.

2. **Handling Server-Specific Operations:**
   For certain server-only tasks like generating meta tags for SEO or logging data on the server, you can use `isPlatformServer` to ensure that the code only runs during server-side rendering.

### How It Works

- **`PLATFORM_ID`:** This is a special token provided by Angular that represents the platform (browser or server) the application is running on.
- **`isPlatformBrowser` and `isPlatformServer`:** These functions accept the `PLATFORM_ID` as a parameter and return `true` if the code is executing in the respective environment.

### Example with Angular Universal

```js
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { PLATFORM_ID, Inject, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      console.log('This is running in the browser');
    }

    if (isPlatformServer(this.platformId)) {
      console.log('This is running on the server');
    }
  }
}
```

### Conclusion

- **`isPlatformBrowser`:** Used to detect browser-side execution.
- **`isPlatformServer`:** Used to detect server-side execution.

These checks are crucial in applications using Angular Universal to differentiate between client and server environments.
