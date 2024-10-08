import { InjectionToken } from '@angular/core';

export const REQUEST_URL = new InjectionToken<string>('request-url');

export function getRequestUrl(): string {
    return window.location.pathname;
}

