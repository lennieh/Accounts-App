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
    MatDialogModule,
    MatFormFieldModule,
    MAT_PLACEHOLDER_GLOBAL_OPTIONS
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
        MatDialogModule,
        MatFormFieldModule
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
        MatDialogModule,
        MatFormFieldModule
    ],
    providers: [
      {provide: MAT_PLACEHOLDER_GLOBAL_OPTIONS, useValue: {float: 'always'}}  
    ]
})
export class MaterialModule {}