import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";

import { environment } from "src/environments/environment";
import { userData } from "./shared/models/user-data";

@Injectable({
    providedIn: 'root'
})
export class MainService {
    baseUrl = environment.baseUrl;
    errorMessage = '';
    successMessage = '';
    errorMessageEmitter = new EventEmitter<string>()
    successMessageEmitter = new EventEmitter<string>()

    constructor(private http: HttpClient) { }

    getProdileData() {
        console.log('called profile picker')
        return this.http.get<userData>(`${this.baseUrl}/userProfile`)
    }
}