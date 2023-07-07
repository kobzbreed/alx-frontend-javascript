export default function iterateThroughObject(reportWithIterator) {
  const list = [];
  list.push(...reportWithIterator);
  return list.join(' | ');
}
