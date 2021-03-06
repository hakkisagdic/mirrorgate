/*
 * Copyright 2017 Banco Bilbao Vizcaya Argentaria, S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { of, throwError } from 'rxjs';

import { Dashboard } from '../../../src/app/model/dashboard';

export class MockDashboardsService {
  dashboards: Dashboard[];
  dashboard: Dashboard;

  getDashboards() {
    return of(this.dashboards);
  }

  getDashboard(id) {
    if (id === this.dashboard.name) {
      return of(this.dashboard);
    }
    return throwError({ status: 404, error: 'Dashboard Not Found' });
  }

  deleteDashboard(dashboard: Dashboard) {
    if (dashboard && this.dashboard && dashboard.name === this.dashboard.name) {
      return of(true);
    }
    return throwError({ status: 404, error: 'Dashboard Not Found' });
  }

  setFakeDashboards(dashboards: Dashboard[]) {
    this.dashboards = dashboards;
  }

  setFakeDashboard(dashboard: Dashboard) {
    this.dashboard = dashboard;
  }

  saveDashboard(dashboard: Dashboard, exists: boolean) {
    if (dashboard && !exists) {
      return of(dashboard);
    }

    if (dashboard && this.dashboard && dashboard.name === this.dashboard.name) {
      return of(dashboard);
    }
    return throwError({ status: 404, error: 'Dashboard Not Found' });
  }
}
