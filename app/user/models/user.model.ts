/**
 * Created by hp on 3/5/2016.
 */
export class Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
}
export class User {
    id: number;
    name: string;
    username: string;
    email: string;
    address = new Address();
}
