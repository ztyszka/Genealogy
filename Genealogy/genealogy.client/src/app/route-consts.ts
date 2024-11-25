import { isDevMode } from "@angular/core";

export class RouteConsts {
    public static readonly base = isDevMode()
      ? 'https://localhost:7181/'
      : window.location.href;

    public static readonly genealogy: string = RouteConsts.base + 'persons';
}