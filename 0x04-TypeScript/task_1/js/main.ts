// 1. Define the constructor interface
interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

// 2. Define the class interface
interface StudentClassInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

// 3. Implement the StudentClass
class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}

// 4. Example usage
const student1 = new StudentClass("Thabang", "Sithole");
console.log(student1.displayName());
console.log(student1.workOnHomework());