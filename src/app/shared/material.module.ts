import { NgModule }             from '@angular/core';

import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
    MAT_PLACEHOLDER_GLOBAL_OPTIONS,
    MAT_DATE_LOCALE
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatSidenavModule,
        MatTableModule,
        MatToolbarModule,
        MatTooltipModule,
        ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatSidenavModule,
        MatTableModule,
        MatToolbarModule,
        MatTooltipModule,
    ],
    providers: [
      {provide: MAT_PLACEHOLDER_GLOBAL_OPTIONS, useValue: {float: 'always'}},
      {provide: MAT_DATE_LOCALE, useValue: 'eb-GB'}
    ]
})
export class MaterialModule {}
