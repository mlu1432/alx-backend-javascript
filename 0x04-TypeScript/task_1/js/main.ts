// 1. Define the printTeacherFunction interface
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// 2. Implement the printTeacher function
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
};

// 3. Example usage
console.log(printTeacher("John", "Doe"));
console.log(printTeacher("Thabang", "Sithole"));