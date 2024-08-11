export default function createIteratorObject(report) {
  const { allEmployees } = report; // Destructure allEmployees from report
  const employeeList = [];

  // Iterate over each department and add all employees to the employeeList array
  for (const department in allEmployees) {
    if (Object.prototype.hasOwnProperty.call(allEmployees, department)) {
      employeeList.push(...allEmployees[department]);
    }
  }

  // Return an iterator for the employeeList array
  return employeeList[Symbol.iterator]();
}
