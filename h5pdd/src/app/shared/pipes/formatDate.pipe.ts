import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(value: any, format: string = 'YYYY-MM-DD HH:mm:ss'): any {
    // 如果传入的值是无效日期，直接返回原值
    if (!value) {
      return value;
    }

    const date = new Date(value);

    // 检查日期是否有效
    if (isNaN(date.getTime())) {
      return value; // 如果日期无效，返回原始值
    }

    return dayjs(value).format(format);
  }
}