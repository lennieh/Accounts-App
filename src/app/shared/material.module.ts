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
    MatCardModule,
    MatDialogModule
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
        MatCardModule,
        MatDialogModule
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
        MatCardModule,
        MatDialogModule
    ]
})
export class MaterialModule {}