import { Component, Input } from '@angular/core';
import * as moment from 'moment';
import { ExistingPressRelease } from '../../../../../core/models/press-release.model';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import {
  DeleteConfirmDialogResult,
  DeleteConfirmModalComponent,
} from '../../../../../components/delete-confirm-modal/delete-confirm-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { removePressRelease } from '../../../../../store/press-releases/press-releases.actions';
import { cloneDeep } from 'lodash';
import { DashPressEditPreleaseModalComponent } from '../dash-press-edit-prelease-modal/dash-press-edit-prelease-modal.component';

@Component({
  selector: 'app-dash-press-list-item',
  templateUrl: './dash-press-list-item.component.html',
  styleUrls: ['./dash-press-list-item.component.scss'],
})
export class DashPressListItemComponent {
  moment = moment;

  @Input() pressRelease!: ExistingPressRelease;

  editIcon: IconDefinition = faEdit;
  deleteIcon: IconDefinition = faTrash;

  constructor(private readonly modalService: NgbModal, private readonly store: Store) {}

  openEditPressReleaseModal() {
    const modal = this.modalService.open(DashPressEditPreleaseModalComponent, {
      size: 'lg',
    });
    modal.componentInstance.pressRelease = cloneDeep(this.pressRelease);
  }

  async openDeleteConfirm() {
    try {
      const modal = this.modalService.open(DeleteConfirmModalComponent);
      modal.componentInstance.itemType = 'press release';
      const result = await modal.result;
      if (result === DeleteConfirmDialogResult.DELETE) {
        this.deletePressRelease();
      }
    } catch (e) {
      console.log('Dialog closed without answer');
    }
  }

  private deletePressRelease() {
    this.store.dispatch(removePressRelease({ id: this.pressRelease._id }));
  }
}
