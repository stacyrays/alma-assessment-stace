import { users } from "./data"

export async function GET() {
    return Response.json(users);
}

export async function POST(request: Request) {
    const user = await request.json();
    const newUser = {
        id: users.length + 1,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        country: user.country,
        url: user.url,
        categories: user.categories,
        comment: user.comment,
        status: 'Pending'
    };
    users.push(newUser);
    return new Response(JSON.stringify(newUser), {
        headers: {
            "Content-Type": "application/json", 
        },
        status: 201
    })
}