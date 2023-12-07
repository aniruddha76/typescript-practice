let person: {
    name: string,
    phNum: number,
    email: string,
    id: number
} = {
    name: "",
    phNum: 0,
    email: "",
    id: 0
}

function personData(name: string, phoneNum: number, userEmail: string, userId: number) :void {
    person.name = name;
    person.phNum = phoneNum;
    person.email = userEmail;
    person.id = userId;

    console.log(person);
}

personData("Aniruddha", 1234567890, "test@gmail", 2002)