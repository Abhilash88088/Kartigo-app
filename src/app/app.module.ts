import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from './home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProductservicesService } from './productservices.service';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';
import { LogopageComponent } from './logopage/logopage.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { MatInputModule } from '@angular/material/input';
import { FootComponent } from './foot/foot.component';
import { CategoriesComponent } from './categories/categories.component';




const routes: Routes=[
    {path:'',component:LoginComponent},
    {path:'login',component:LoginComponent},
    {path:'home',component:HomeComponent},
    {path:'logo',component:LogopageComponent},
    {path:'cart',component:CartComponent},
    {path:'categories',component:CategoriesComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        LogopageComponent,
        CartComponent,
        LoginComponent,
        FootComponent,
        CategoriesComponent
    ],
    providers: [ProductservicesService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        HttpClientModule,
        RouterModule.forRoot(routes),
    ]
})
export class AppModule { }
