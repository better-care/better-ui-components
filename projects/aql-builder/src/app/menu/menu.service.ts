/* Copyright 2021 Better Ltd (www.better.care)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {MenuPanel} from './menu.enum';

@Injectable()
export class MenuService {
  private selectedMenuItem: BehaviorSubject<MenuPanel> = new BehaviorSubject<MenuPanel>(null);
  selectedMenuItem$: Observable<MenuPanel> = this.selectedMenuItem.asObservable();

  constructor() { }

  selectMenuItem(selectedItem: MenuPanel) {
    this.selectedMenuItem.next(selectedItem);
  }

}
