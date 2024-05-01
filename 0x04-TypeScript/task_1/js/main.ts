// main.ts

interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}


interface Directors extends Teacher {
    numberOfReports: number;
}

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);

// Define the printTeacher function
function printTeacher(firstName: string, lastName: string): string {
    const firstLetter = firstName.charAt(0).toUpperCase();
    return `${firstLetter}. ${lastName}`;
}

// Define the printTeacherFunction interface
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}


// Define an interface for the constructor of StudentClass
interface StudentConstructor {
    firstName: string;
    lastName: string;
}

// Define an interface for the StudentClass
interface StudentClass {
    workOnHomework(): string;
    displayName(): string;
}

// Define the StudentClass
class StudentClass implements StudentClass {
    private firstName: string;
    private lastName: string;

    constructor({ firstName, lastName }: StudentConstructor) {
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
