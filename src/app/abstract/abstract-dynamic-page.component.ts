import { Component }                    from '@angular/core';
import { AfterViewInit, ViewChild }     from '@angular/core';
import { Location }                     from '@angular/common';
import { Observable }                   from 'rxjs/Observable';

import { MatDialog }                    from '@angular/material';
import { ToasterService }               from 'angular2-toaster';

import { CanDeactivateGuard }           from '../core/services/can-deactivate-guard.service';
import { AppConfirmDialogComponent }    from '../shared/confirm-dialog/confirm-dialog.component';
import { slideInDownAnimation }         from '../main/animations';

import { QuestionService }              from '../generate/question.service';
import { DynamicFormComponent }         from '../generate/dynamic-form/dynamic-form.component';
import { AbstractEditPageComponent }    from './abstract-edit-page.component';

export abstract class AbstractDynamicPageComponent
    extends AbstractEditPageComponent
    implements AfterViewInit, CanDeactivateGuard {

    @ViewChild(DynamicFormComponent)
    protected dynamicFormComponent: DynamicFormComponent;

    ngAfterViewInit(): void {
    }

    constructor(
        private dialog: MatDialog,
        questionService: QuestionService,
        location: Location,
        toasterService: ToasterService ) {
        super(questionService, location, toasterService);
    }

    public canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {

        if (this.dynamicFormComponent.form.pristine || this.saving) {
            return true;
        }

        const dialogRef = this.dialog.open(AppConfirmDialogComponent, {
            // height: '350px',
            data: {
                title: 'Confirm Discard',
                body: `Are you sure you want to discard your changes?`
            }
        });

        return dialogRef.afterClosed();
    }

}
