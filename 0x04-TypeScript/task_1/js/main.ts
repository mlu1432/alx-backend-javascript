// 1. Define the Teacher interface
interface Teacher {
    readonly firstName: string;          // firstName is read-only and cannot be changed after initialization
    readonly lastName: string;           // lastName is read-only and cannot be changed after initialization
    fullTimeEmployee: boolean;           // fullTimeEmployee is mandatory
    yearsOfExperience?: number;          // yearsOfExperience is optional
    location: string;                    // location is mandatory
    [propName: string]: any;             // Allows any additional properties
}

// 2. Create a teacher object
const teacher3: Teacher = {
    firstName: 'Thabang',
    fullTimeEmployee: false,
    lastName: 'Sithole',
    location: 'Durban',
    contract: false,
};

// 3. Log the teacher object
console.log(teacher3);
