export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(employ) {
      return Object.keys(employ).length;
    },
  };
}
