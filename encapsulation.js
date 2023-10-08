class Person {
    constructor(name, birthDay, MonthlySalary, noOfMonths) {
        this.name = name;
        this.birthDay = birthDay;
        this.MonthlySalary = MonthlySalary;
        this.noOfMonths = noOfMonths;
    }

    calculate_age() {
        const age = Date.now() - new Date(this.birthDay).getTime();
        const cal_age = new Date(age);
        return Math.abs(cal_age.getUTCFullYear() - 1970);
    }

    getSalary() {
        return (this.MonthlySalary * this.noOfMonths).toLocaleString();
    }
}


const nahid = new Person("Nahid", "1992-11-29", 1000, 12);

console.log(`His name is - ${nahid.name}`);
console.log(`His age is - ${nahid.calculate_age()}`);
console.log(`His salary is - ${nahid.getSalary()}`);