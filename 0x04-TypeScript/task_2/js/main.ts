// 1. Define the DirectorInterface
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

// 2. Define the TeacherInterface
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

// 3. Implement the Director class
export class Director implements DirectorInterface {
    workFromHome = (): string => 'Working from home';
    getCoffeeBreak = (): string => 'Getting a coffee break';
    workDirectorTasks = (): string => 'Getting to director tasks';
}

// 4. Implement the Teacher class
export class Teacher implements TeacherInterface {
    workFromHome = (): string => 'Cannot work from home';
    getCoffeeBreak = (): string => 'Cannot have a break';
    workTeacherTasks = (): string => 'Getting to work';
}

// 5. Implement the createEmployee function
export const createEmployee = (salary: number | string): Teacher | Director => {
    return Number(salary) < 500 ? new Teacher() : new Director();
}

// 6. Define the isDirector function (type predicate)
export function isDirector(employee: TeacherInterface | DirectorInterface): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
}

// 7. Implement the executeWork function
export function executeWork(employee: DirectorInterface | TeacherInterface): string {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    } else {
        return employee.workTeacherTasks();
    }
}

// 8. Define the Subjects string literal type
type Subjects = "Math" | "History";

// 9. Implement the teachClass function
export function teachClass(todayClass: Subjects): string {
    if (todayClass === "Math") {
        return "Teaching Math";
    } else if (todayClass === "History") {
        return "Teaching History";
    }
}

// 10. Example usage
console.log(teachClass("Math"));
console.log(teachClass("History"));

const employee1 = createEmployee(200);
console.log(executeWork(employee1));

const employee2 = createEmployee(1000);
console.log(executeWork(employee2));