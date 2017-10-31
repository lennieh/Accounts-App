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
    MatSelectModule,
    MatInputModule,
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
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule
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
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule
    ],
    providers: [
      {provide: MAT_PLACEHOLDER_GLOBAL_OPTIONS, useValue: {float: 'always'}}
    ]
})
export class MaterialModule {}
