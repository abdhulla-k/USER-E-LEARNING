import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { NgForm } from "@angular/forms";

import { environment } from "src/environments/environment";
import { userData } from "./shared/models/user-data";
import { userProfileUpdateResponse } from "./shared/models/link-update-response";
import { ImageUploadResponse } from "./shared/models/upload-profile-img";
import { CartResponse } from "./shared/models/cart-response"

@Injectable({
    providedIn: 'root'
})
export class MainService {
    baseUrl = environment.baseUrl;
    errorMessage = '';
    successMessage = '';
    errorMessageEmitter = new EventEmitter<string>()
    successMessageEmitter = new EventEmitter<string>()
    deletedFromCart = new EventEmitter<number>()

    constructor(private http: HttpClient) { }

    getProdileData() {
        console.log('called profile picker')
        return this.http.get<userData>(`${this.baseUrl}/userProfile`)
    }

    // to save user's public profile links
    saveUserLinks(links: NgForm) {
        // send links to server
        return this.http.post<userProfileUpdateResponse>(`${this.baseUrl}/saveUserLinks`, links.value)
    }

    // to upload profile pic
    uploadImage(uploadImage: FormData) {
        return this.http.post<ImageUploadResponse>(`${this.baseUrl}/saveProfilePic`, uploadImage)
    }

    // to get all cart data
    getCart() {
        return this.http.get<CartResponse>(`${this.baseUrl}/getCart`)
    }

    // to remove one item from cart
    removeFromCart(id: string) {
        return this.http.delete(`${this.baseUrl}/removeFromCart/${id}`)
    }
}