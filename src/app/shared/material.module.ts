import { NgModule }             from '@angular/core';

import { 
    MatButtonModule, 
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatTooltipModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule

} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
        MatMenuModule,
        MatIconModule,
        MatToolbarModule,
        MatTooltipModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule
        ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
        MatMenuModule,
        MatIconModule,
        MatToolbarModule,
        MatTooltipModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule
    ]
})
export class MaterialModule {}