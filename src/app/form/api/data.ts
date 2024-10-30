export type FormData = {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    country?: string;
    url?: string;
    categories?: Array<string>;
    comment?: string;
    status?: string;
    file?: string;
}[];

export const users:FormData = [
    {
        id: 0,
        firstname: "Jorge",
        lastname: "Ruiz",
        email: "jorge@gmail.com",
        country: "Mexico",
        url: '',
        categories: [],
        comment: '',
        status: 'Pending',
        file: ''
    },
    {
        id: 1,
        firstname: "Bahar",
        lastname: "Zamir",
        email: "bahar@gmail.com",
        country: "Mexico",
        url: '',
        categories: [],
        comment: '',
        status: 'Pending',
        file: ''
    },
    {
        id: 2,
        firstname: "Mary",
        lastname: "Lopez",
        email: "mary@gmail.com",
        country: "Brazil",
        url: '',
        categories: [],
        comment: '',
        status: 'Pending',
        file: ''
    },
    {
        id: 3,
        firstname: "Li",
        lastname: "Zijin",
        email: "li@gmail.com",
        country: "South Korea",
        url: '',
        categories: [],
        comment: '',
        status: 'Pending',
        file: ''
    },
    {
        id: 4,
        firstname: "Mark",
        lastname: "Antonov",
        email: "mark@gmail.com",
        country: "Russia",
        url: '',
        categories: [],
        comment: '',
        status: 'Pending',
        file: ''
    },
    {
        id: 5,
        firstname: "Jane",
        lastname: "Ma",
        email: "jane@gmail.com",
        country: "Mexico",
        url: '',
        categories: [],
        comment: '',
        status: 'Pending',
        file: ''
    },
    {
        id: 6,
        firstname: "Anand",
        lastname: "Jain",
        email: "anand@gmail.com",
        country: "Mexico",
        url: '',
        categories: [],
        comment: '',
        status: 'Pending',
        file: ''
    },
    {
        id: 7,
        firstname: "Anna",
        lastname: "Voronova",
        email: "anna@gmail.com",
        country: "France",
        url: '',
        categories: [],
        comment: '',
        status: 'Pending',
        file: ''
    },
]