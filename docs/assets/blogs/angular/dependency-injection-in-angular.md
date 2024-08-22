Dependency Injection (DI) is a design pattern used to implement `Inversion of Control (IoC)` for resolving dependencies and managing the lifecycle of objects. In Angular, DI is a core concept that allows you to inject dependencies (like services) into your components, directives, pipes, and other services, promoting reusability and maintainability.

### How Dependency Injection Works in Angular

1. **Providers**: Define how to create instances of dependencies.
2. **Injectors**: Maintain a container of dependencies and are responsible for instantiating them.
3. **Tokens**: Identifiers used to look up dependencies in the injector.

### Steps to Use Dependency Injection in Angular

#### 1. Define a Service

First, create a service that you want to inject. Use the Angular CLI to generate a service:

```bash
ng generate service logger
```

This creates a service in `logger.service.ts`:

```js
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  // This makes the service a singleton at the root level
})
export class LoggerService {
  log(message: string): void {
    console.log(message);
  }
}
```

#### 2. Register the Service with an Injector

Angular automatically registers the service with the root injector because of the `providedIn: 'root'` metadata in the `@Injectable` decorator. This means the service will be available throughout the application as a `singleton`.

#### 3. Inject the Service into a Component

Now you can inject the service into a component's constructor. For example, in `app.component.ts`:

```js
import { Component, OnInit } from '@angular/core';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private logger: LoggerService) {}

  ngOnInit(): void {
    this.logger.log('AppComponent initialized');
  }
}
```

#### Explanation

* **Constructor Injection**: The `LoggerService` is injected into the `AppComponent` constructor.
* **Using the Service**: The `log` method of the `LoggerService` is called within the `ngOnInit` lifecycle hook.

### Custom Providers

Sometimes you might want to configure how the dependency is provided. You can do this by creating a custom provider.

#### Example: Configuring a Custom Provider

Let's say you have an interface and multiple implementations:

```js
export interface DataService {
  getData(): string[];
}

@Injectable({
  providedIn: 'root'
})
export class LocalDataService implements DataService {
  getData(): string[] {
    return ['Local data item 1', 'Local data item 2'];
  }
}

@Injectable({
  providedIn: 'root'
})
export class RemoteDataService implements DataService {
  getData(): string[] {
    return ['Remote data item 1', 'Remote data item 2'];
  }
}
```

You can provide one of these services in a module or component:

```js
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LocalDataService, RemoteDataService, DataService } from './data.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [
    {
        provide: DataService,
        useClass: LocalDataService
    } // Use LocalDataService as the implementation for DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

This tells Angular to use `LocalDataService` whenever `DataService` is injected.

### Injectors and Hierarchical Dependency Injection

Angular's DI system is hierarchical, meaning child injectors inherit providers from their parent injectors. This allows for different instances of a service in different parts of the application.

#### Example: Scoped Services

```js
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  providers: [LocalDataService]
  // This will provide a new instance of LocalDataService for this component and its children
})
export class ChildComponent {
  constructor(private dataService: LocalDataService) {
    console.log(this.dataService.getData());
  }
}
```

In this example, `ChildComponent` and its children will use a new instance of `LocalDataService`, separate from the instance used by the rest of the application.

### Summary

* **Providers**: Define how dependencies are created.
* **Injectors**: Manage the lifecycle and provide instances of dependencies.
* **Tokens**: Identifiers used to retrieve dependencies.

**Steps to Use DI in Angular**:

1. **Create a Service**: Define the service class and annotate it with `@Injectable`.
2. **Register the Service**: Use `providedIn: 'root'` for application-wide services or register it in the module or component providers.
3. **Inject the Service**: Use constructor injection to inject the service into components, directives, pipes, or other services.

By leveraging Angular's DI system, you can create modular, reusable, and testable services and components.
