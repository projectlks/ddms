export interface User {
    id: number
    username: string
    email: string
    registrationDate: string
    lastLogin: string
    status: "active" | "not active" | "banned"
}

export const sampleUsers: User[] = [
    {
        id: 1,
        username: "admin",
        email: "admin@ddms.com",
        registrationDate: "2024-01-15",
        lastLogin: "2024-01-24 09:30:00",
        status: "active",
    },
    {
        id: 2,
        username: "user1",
        email: "user1@company.com",
        registrationDate: "2024-01-18",
        lastLogin: "2024-01-23 14:45:00",
        status: "not active",
    },
    {
        id: 3,
        username: "manager",
        email: "manager@ddms.com",
        registrationDate: "2024-01-10",
        lastLogin: "2024-01-24 08:15:00",
        status: "active",
    },
    {
        id: 4,
        username: "staff",
        email: "staff@company.com",
        registrationDate: "2024-01-20",
        lastLogin: "2024-01-22 16:20:00",
        status: "not active",
    },
    {
        id: 5,
        username: "supervisor1",
        email: "supervisor1@ddms.com",
        registrationDate: "2024-01-12",
        lastLogin: "2024-01-24 10:00:00",
        status: "active",
    },
    {
        id: 6,
        username: "supervisor2",
        email: "supervisor2@ddms.com",
        registrationDate: "2024-01-13",
        lastLogin: "2024-01-24 10:10:00",
        status: "active",
    },
    {
        id: 7,
        username: "supervisor3",
        email: "supervisor3@ddms.com",
        registrationDate: "2024-01-14",
        lastLogin: "2024-01-24 10:20:00",
        status: "active",
    },
    {
        id: 8,
        username: "supervisor4",
        email: "supervisor4@ddms.com",
        registrationDate: "2024-01-15",
        lastLogin: "2024-01-24 10:30:00",
        status: "active",
    },
    {
        id: 9,
        username: "supervisor5",
        email: "supervisor5@ddms.com",
        registrationDate: "2024-01-16",
        lastLogin: "2024-01-24 10:40:00",
        status: "banned",
    },
    {
        id: 10,
        username: "supervisor6",
        email: "supervisor6@ddms.com",
        registrationDate: "2024-01-17",
        lastLogin: "2024-01-24 10:50:00",
        status: "banned",
    },
];
