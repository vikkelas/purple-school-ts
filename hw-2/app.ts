import axios, {AxiosError, AxiosResponse} from "axios";

interface Response {
    users: User[];
    total: number;
    skip: number;
    limit: number;
}

enum GENDER {
    FEMALE='female',
    MALE='male'
}

enum BLOOD_GROUP {
    GroupA='A',
    GroupB='B',
    GroupAB='AB',
    GroupO='O',
    GroupAPlus='A+',
    GroupBPlus='B+',
    GroupABPlus='AB+',
    GroupOPlus='O+'
}

interface Bank {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
}

interface Address {
    address: string;
    city: string;
    coordinates: {
        lat: number;
        lng: number;
    }
    postalCode: string;
    state: string;
}

interface Company {
    address: Address;
    department: string;
    name: string;
    title: string;
}

interface User {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: GENDER;
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate: string;
    image: string;
    bloodGroup: BLOOD_GROUP;
    height: number;
    weight: number;
    eyeColor: string;
    hair: {
        color: string;
        type: string;
    },
    domain: string;
    ip: string;
    address: Address;
    macAddress: string;
    university: string;
    bank: Bank;
    company: Company;
    ein: string;
    ssn: string;
    userAgent: string;
}

const URL: string = 'https://dummyjson.com/users'

async function getUsers(url: string){
    try{
        return  await axios.get<AxiosResponse>(url).then(response=> response.data)
    }catch (error){
        if(error as AxiosError){
            console.log(error)
        }
    }
}
