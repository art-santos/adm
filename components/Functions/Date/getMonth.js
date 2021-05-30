export default function getMonth() {
  var d = new Date();
  const month = d.toLocaleString('en-US', { month: 'long' });
  return month;
}
