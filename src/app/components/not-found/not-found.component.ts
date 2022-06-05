import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'poke-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})

/**
 * NotFoundComponent is the page that is shown when the user tries to access a page that doesn't exist.
 * @author Daniel Granados
 * @version 0.0.1
 * @since 0.0.1
 */
export class NotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
