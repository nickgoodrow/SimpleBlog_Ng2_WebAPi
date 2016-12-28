import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';

import { PostsService } from './posts/posts.service';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    HomeComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([   
            {
                path : 'Home', component : HomeComponent
            }, 
            {
                path : 'Posts', component : PostsComponent
            },
            {
                path : 'Comments', component : CommentsComponent
            },
            { //default
                path : '', redirectTo : 'Home', pathMatch : 'full'
            },
            { // not found
                path : '**', component : HomeComponent // will have a page not found component
            }
    ])
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }