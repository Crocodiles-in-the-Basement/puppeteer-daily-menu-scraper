/*
 * copyright 2019, David Barton (theDavidBarton)
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

'use strict'

const moment = require('moment')
const bankHolidayChecker = require('./../lib/bankHolidayChecker').bankHolidayChecker

const date = {
  bankHoliday: bankHolidayChecker(),
  today: Number(moment().format('d')),
  todayFormatted: moment().format('LLLL'),
  todayDotSeparated: moment(moment(), 'YYYY-MM-DD')
    .locale('hu')
    .format('L'), // e.g. 2019.05.17. (default format for Hungarian)
  dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
}

/*
 * for debug purposes you can run the main script with a 2nd argument like:
 * `yarn start --debug --date=2__2019.12.24.`
 * where 2 means: Tuesday (0: Sunday, 1: Monday, 2: Tuesday, 3: Wednesday, 4: Thursday, 5: Friday, 6: Saturday)
 * and 2019.12.14. overrides todayDotSeparated
 */

if (process.argv[3]) {
  date.today = process.argv[3]
    .split('__')[0]
    .match(/[0-9]/)
    .toString()
  date.todayDotSeparated = process.argv[3].split('__')[1]
  console.log('!!! RUNNING IN DEBUG MODE !!! ', date.todayDotSeparated)
}

module.exports.date = date