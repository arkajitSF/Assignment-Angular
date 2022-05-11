
export class User {
    firstname: string;
    middlename?: string;
    lastname: string;
    email: string;
    phone: string;
    role: Role;
    address: string;
    modifiable?: boolean;

    constructor(
        firstname: string,
        middlename: string,
        lastname: string,
        email: string,
        phone: string,
        role: Role,
        address: string,
    ) 
        {
            //intializing properties
            {
            this.firstname = firstname;
            this.middlename = middlename;
            this.lastname = lastname;
            this.email = email;
            this.phone = phone;
            this.role = role;
            this.address = address;
            this.modifiable = false
            }
        }
}

export enum Role {
    SuperAdmin = "SuperAdmin",
    Admin = "Admin",
    Subscriber = "Subscriber",
}