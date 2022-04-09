export function secondsToHms(d: number): string {
  d = Number(d);
  var h = Math.floor(d / 3600);
  var m = Math.floor((d % 3600) / 60);
  var s = Math.floor((d % 3600) % 60);

  var hDisplay = h > 0 ? h + 'h ' : '';
  var mDisplay = m > 0 ? m + 'm ' : '';
  var sDisplay = s > 0 ? s + 's' : '';
  return hDisplay + mDisplay + sDisplay;
}

const month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export function formatdate(dateString: string): string {
  const date = new Date(dateString);
  const m = month[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  const time = date.getTime();
  return `${m} ${day} ${year} | ${formatAMPM(date)}`;
}

export function formatAMPM(date: Date): string {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
  const minutesInString = minutes < 10 ? `0${minutes}` : `${minutes}`;
  var strTime = hours + ':' + minutesInString + ' ' + ampm;
  return strTime;
}
