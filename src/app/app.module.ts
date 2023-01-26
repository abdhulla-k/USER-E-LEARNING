import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { UserHeaderComponent } from './user-home/user-header/user-header.component';
import { SideBarComponent } from './user-home/side-bar/side-bar.component';
import { UserLoginComponent } from './auth/user-login/user-login.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserSignupComponent } from './auth/user-signup/user-signup.component';
import { PasswordValidatingDirective } from './shared/directives/password-validate.directive';
import { DropdownComponent } from './shared/dropdown/dropdown.component';
import { FormsModule } from '@angular/forms';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';
import * as fromApp from './store/app.reducer';
import { AuthEffects } from './auth/store/auth.effects';
import { HomeSectionsComponent } from './user-home/home-sections/home-sections.component';
import { HomePartsComponent } from './user-home/home-sections/home-parts/home-parts.component';
import { CoursesComponent } from './user-home/courses/courses.component';
import { CourseComponent } from './user-home/courses/course/course.component';
import { FooterComponent } from './user-home/footer/footer.component';
import { DetailsComponent } from './user-home/courses/course/details/details.component';
import { TokenAddingInterceptorService } from './token.interceptor.service';
import { ErrorMessageComponent } from './shared/components/error-message/error-message.component';
import { MessageDirective } from './shared/directives/message.directive';
import { SuccessMessagesComponent } from './shared/components/success-messages/success-messages.component';
import { SuccessMessageDirective } from './shared/directives/success-message.directive';
import { ProfileComponent } from './user-home/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
    UserHeaderComponent,
    SideBarComponent,
    UserLoginComponent,
    UserHomeComponent,
    UserSignupComponent,
    PasswordValidatingDirective,
    MessageDirective,
    SuccessMessageDirective,
    VerifyEmailComponent,
    DropdownComponent,
    HomeSectionsComponent,
    HomePartsComponent,
    CoursesComponent,
    CourseComponent,
    FooterComponent,
    DetailsComponent,
    ErrorMessageComponent,
    SuccessMessagesComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([AuthEffects])
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenAddingInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
