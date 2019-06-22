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

const ocrFacebookImage = require('./ocrFacebookImage')


async function scraper() {
  /*
   * @ MOZSÁR BISZTRO
   * ---------------------------------------
   * contact info:
   * Address: Budapest, Nagymező u. 21, 1065
   * ---------------------------------------
   * description:
   * this daily menu relies on if a menu (recognizable for OCR) is available among timeline photos
   */

  // @ MOZSAR parameters
  let color = '#bc4545'
  let titleString = 'Mozsár Bisztro'
  let url = 'https://www.facebook.com/pg/MozsarBisztro/posts/'
  let icon = 'http://mozsarbisztro.hu/template/assets/images/demo-content/logo.png'
  let addressString = 'Budapest, Nagymező u. 21, 1065'
  let daysRegexArray = [
    '',
    /\bHÉT((.*\r?\n){3})/gi,
    /\bKED((.*\r?\n){3})/gi,
    /\bSZERD((.*\r?\n){3})/gi,
    /\bCSOT((.*\r?\n){3})|\bCSU((.*\r?\n){3})|\bCSÜ((.*\r?\n){3})|törtök((.*\r?\n){3})/gi,
    /\bPÉNT((.*\r?\n){3})/gi
  ]
  let facebookImageUrlSelector = '.scaledImageFitWidth'
  let menuHandleRegex = /fogás/gi
  let startLine = 1
  let endLine = 2

  await ocrFacebookImage.ocrFacebookImage(
    color,
    titleString,
    url,
    icon,
    addressString,
    daysRegexArray,
    facebookImageUrlSelector,
    menuHandleRegex,
    startLine,
    endLine
  )
}
module.exports.scraper = scraper