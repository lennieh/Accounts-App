import { NgModule }                 from '@angular/core';

import { SharedModule }             from '../../shared/shared.module';
import { AdminRoutingModule }       from './admin-routing.module';

@NgModule({
    imports: [
        AdminRoutingModule
    ]
})
export class AdminModule { }
