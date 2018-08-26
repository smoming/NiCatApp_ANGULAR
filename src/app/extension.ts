import * as datefns from 'date-fns';

export class Extension {
  static toDate(date: string) {
    return this.toDateStr(new Date(date));
  }

  static toDateStr(date: Date) {
    return datefns.format(date, 'YYYY-MM-DD');
  }

  static isNullOrEmpty(str: string) {
    if (str === '' || str === null) {
      return true;
    }
    return false;
  }

  static isNotNullOrEmpty(str: string) {
    return this.isNullOrEmpty(str) === false;
  }
}
