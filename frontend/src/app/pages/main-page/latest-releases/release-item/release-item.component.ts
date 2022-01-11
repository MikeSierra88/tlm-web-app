import {Component, Input, OnInit} from '@angular/core';
import {Release} from '../../../../services/releases.service';

@Component({
  selector: 'app-release-item',
  templateUrl: './release-item.component.html',
  styleUrls: ['./release-item.component.scss'],
})
export class ReleaseItemComponent implements OnInit {
  @Input() release!: Release;
  now = Date.now();
  isReleased: boolean = true;

  ngOnInit(): void {
    this.isReleased = Date.parse(this.release.releaseDate.toString()) < this.now;
  }

}