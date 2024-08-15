Data binding is a core concept in Angular and allows to define communication between a component and the DOM. There are four forms of data binding(divided as 3 categories) which differ in the way the data is flowing.

### i. From the Component to the DOM

* **Interpolation:** {{ value }}: Adds the value of a property from the component

```html
<li>Name: {{ user.name }}</li>
<li>Address: {{ user.address }}</li>
```

* **Property binding:** [property]=”value”: The value is passed from the component to the specified property or simple HTML attribute

```html
<input type="email" [value]="user.email">
```

### ii. From the DOM to the Component

* **Event binding: (event)=”function”:** When a specific DOM event happens (eg.: click, change, keyup), call the specified method in the component

```html
<button (click)="logout()"></button>
```

### iii. Two-way binding

* **Two-way data binding:** [(ngModel)]=”value”: Two-way data binding allows to have the data flow both ways. For example, in the below code snippet, both the email DOM input and component email property are in sync

```html
<input type="email" [(ngModel)]="user.email">
```
