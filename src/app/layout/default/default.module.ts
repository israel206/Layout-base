import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ArticlesComponent } from 'src/app/modules/articles/articles.component';
import { EventComponent } from 'src/app/modules/event/event.component';



@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    PostsComponent,
    ArticlesComponent,
    EventComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
    MatSidenavModule
  ]
})
export class DefaultModule { }
