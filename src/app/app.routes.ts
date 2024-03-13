import { Routes } from '@angular/router';
import { IndexComponent } from './post/index/index.component';
import { CreateComponent } from './post/create/create.component';
import { EditComponent } from './post/edit/edit.component';
import { ViewComponent } from './post/view/view.component';

export const routes: Routes = [
    {path: 'item', redirectTo:'item/index',pathMatch:'full'},
    {path: 'item/index', component:IndexComponent},
    {path:'item/create', component: CreateComponent},
    {path: 'item/:itemId/edit', component:EditComponent},
    {path: 'item/:itemId/view', component:ViewComponent},
];
