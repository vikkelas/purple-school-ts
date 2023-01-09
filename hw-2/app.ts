import axios, {AxiosError} from "axios";

interface Response {
    users: User[]
    total: number
    skip: number
    limit: number
}

enum gender {
    FEMALE='female',
    MALE='male'
}

interface User {
    id: number,
    firstName: string
    lastName: string
    maidenName: string
    age: number,
    gender: gender
    email: string
    phone: string
    username: string
    password: string
    birthDate: string
    image: string
    bloodGroup: string
    height: number
    weight: number
    eyeColor: string
    hair: {
        color: string
        type: string
    },
    domain: string
    ip: string
    address: Address
    macAddress: string
    university: string
    bank: Bank
    company: Company
    ein: string
    ssn: string
    userAgent: string
}

interface Bank {
    cardExpire: string
    cardNumber: string
    cardType: string
    currency: string
    iban: string
}

interface Address {
    address: string
    city: string
    coordinates: {
        lat: number
        lng: number
    }
    postalCode: string
    state: string
    macAddress: string
    university: string
}

interface Company {
    address: Address
    department: string
    name: string
    title: string
}

const URL = 'https://dummyjson.com/users'

async function getUsers(){
    try{
        const {users} = await axios.get<Response>(URL).then(response=> response.data)
        return users;
    }catch (error){
        if(error as AxiosError){
            console.log(error)
        }
    }
}
