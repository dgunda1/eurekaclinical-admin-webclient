import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminComponent } from './components/admin/admin.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { EqualValidatorDirective } from './directives/equal-validator.directive';

const appRoutes: Routes = [
       {path:'login', component:LoginComponent},
       {path:'register', component:RegisterComponent},
       {path:'welcome', component:WelcomeComponent},
       {path:'admin', component:AdminComponent},
       { path: '', redirectTo: '/welcome', pathMatch: 'full'},
       { path: '**', component: PageNotFoundComponent }
      ];
        

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    RegisterComponent,
    PageNotFoundComponent,
    NavigationBarComponent,
    WelcomeComponent,
    EqualValidatorDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes ,
            { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
