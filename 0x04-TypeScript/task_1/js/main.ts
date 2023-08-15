class Teacher {
  private firstName: string;
  private lastName: string;
  private fullTimeEmployee: boolean;
  private yearsOfExperience?: number;
  private location: string;
  private additionalAttributes: { [key: string]: any };

  constructor(
    firstName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    location: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullTimeEmployee = fullTimeEmployee;
    this.location = location;
    this.additionalAttributes = {};
  }

  public setYearsOfExperience(yearsOfExperience: number): void {
    this.yearsOfExperience = yearsOfExperience;
  }

  public addAttribute(name: string, value: any): void {
    this.additionalAttributes[name] = value;
  }

  public getAttribute(name: string): any {
    return this.additionalAttributes[name];
  }
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  const firstInitial = firstName.charAt(0).toUpperCase();
  const formattedLastName =
    lastName.charAt(0).toUpperCase() + lastName.slice(1);

  return `${firstInitial}. ${formattedLastName}`;
};

interface StudentConstructor {
  new (firstname: string, lastName: string): StudentClass;
}

interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentInterface {
  private firstName: string;
  private lastName: string;

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

const student: StudentClass = new StudentClass("John", "Doe");
console.log(student.workOnHomework());
console.log(student.displayName());
