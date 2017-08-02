import { ErrorComponent } from './error/error.component';
import { PendingComponent } from './pending/pending.component';
import { CardComponent } from './card/card.component';
import {Routes} from '@angular/router';
export const appRouter : Routes =[
    {path:'',redirectTo:'pending',pathMatch:'full'},
    {path:"pending",component:PendingComponent},
    {path:"card",component:CardComponent},
    {path:"**",component:ErrorComponent}
]