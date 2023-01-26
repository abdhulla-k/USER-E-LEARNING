import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class MainService {
    errorMessage = '';
    successMessage = '';
    errorMessageEmitter = new EventEmitter<string>()
    successMessageEmitter = new EventEmitter<string>()
}