import { Component, Input } from '@angular/core';
import { ExistingRelease } from '../../../../../core/models/release.model';
import * as moment from 'moment';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import {
  DeleteConfirmDialogResult,
  DeleteConfirmModalComponent,
} from '../../../../../components/delete-confirm-modal/delete-confirm-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { cloneDeep } from 'lodash';
import { DashReleasesEditReleaseModalComponent } from '../dash-releases-edit-release-modal/dash-releases-edit-release-modal.component';
import { removeRelease } from '../../../../../store/releases/releases.actions';

@Component({
  selector: 'app-dash-releases-list-item',
  templateUrl: './dash-releases-list-item.component.html',
  styleUrls: ['./dash-releases-list-item.component.scss'],
})
export class DashReleasesListItemComponent {
  @Input() release!: ExistingRelease;

  moment = moment;

  editIcon: IconDefinition = faEdit;
  deleteIcon: IconDefinition = faTrash;

  constructor(
    private readonly modalService: NgbModal,
    private readonly store: Store
  ) {}

  openEditReleaseModal() {
    const modal = this.modalService.open(
      DashReleasesEditReleaseModalComponent,
      {
        size: 'lg',
      }
    );
    modal.componentInstance.release = cloneDeep(this.release);
  }

  async openDeleteConfirm() {
    try {
      const modal = this.modalService.open(DeleteConfirmModalComponent);
      modal.componentInstance.itemType = 'release';
      const result = await modal.result;
      if (result === DeleteConfirmDialogResult.DELETE) {
        this.deleteRelease();
      }
    } catch (e) {
      console.log('Dialog closed without answer');
    }
  }

  private deleteRelease() {
    this.store.dispatch(
      removeRelease({ category: this.release.category, id: this.release._id })
    );
  }
}
