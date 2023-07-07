export default function createIteratorObject(report) {
  const list = [];
  const keys = Object.keys(report.allEmployees);
  for (const key of keys) {
    list.push(...report.allEmployees[key]);
  }
  return list;
}
