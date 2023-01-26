import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class MainService {
    errorMessage = ''
    errorMessageEmitter = new EventEmitter()
}