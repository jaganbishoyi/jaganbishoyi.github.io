import { InjectionToken } from '@angular/core';

export const REQUEST_URL = new InjectionToken<string>('request-url');

export function getRequestUrl(): string {
    // You can determine the request URL dynamically based on your needs
    return window.location.href; // Example: Use the current window location
}

