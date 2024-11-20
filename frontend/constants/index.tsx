import { FiSettings } from "react-icons/fi";
import { BiMessage, BiSolidDashboard, BiStats } from "react-icons/bi";
import { BsLuggage } from "react-icons/bs";
export const userDashboardLinks = [
    {
        id: 1,
        tab: {
            title: "Dashboard",
            path: "/user",
            icon: <BiSolidDashboard fontSize={"24px"} />,
        },
        list: [],
    },
    {
        id: 200,
        tab: {
            icon: <FiSettings fontSize={"20px"} />,
            title: "Candidate Profile",
            path: "/user/profile",
        },
        list: [],
    },
    {
        id: 61,
        tab: {
            icon: <BsLuggage fontSize={"22px"} />,
            title: "Jobs",
            path: "/user/jobs",
        },
        list: [],
    },
    {
        id: 6,
        tab: {
            icon: <BsLuggage fontSize={"22px"} />,
            title: "Applied Jobs",
            path: "/user/applied-jobs",
        },
        list: [],
    },
    {
        id: 6,
        tab: {
            icon: <BiMessage fontSize={"23px"} />,
            title: "Messages",
            path: "/user/message",
        },
        list: [],
    },
]


export type ProfileFormDataItem = {
    id: number;
    name: keyof FormValueType; // It ensures the name corresponds to keys in FormValueType
    text: string;
    label: string;
    type: string;
    required: boolean;
};
export type FormValueType = {
    name: string;
    username: string;
    email: string;
    linkedln: string;
    country: string;
    password: string;
    salary?: string
};

// -------- Login form Data Type Start ----------------------
export type LoginValueType = {
    email: string;
    password: string;
};
export type LoginFormDataItem = {
    id: number;
    name: keyof LoginValueType; // It ensures the name corresponds to keys in FormValueType
    text: string;
    label: string;
    type: string;
    required: boolean;
};
// -------- Login form Data Type End ----------------------

// -------- Register form Data Type Start ----------------------
export type RegisterValueType = {
    email: string;
    password: string;
    name: string;
    username: string;
};
export type RegisterFormDataItem = {
    id: number;
    name: keyof RegisterValueType; // It ensures the name corresponds to keys in FormValueType
    text: string;
    label: string;
    type: string;
    required: boolean;
};
// -------- Login form Data Type End ----------------------

export type ApplicationFormDataItem = {
    id: number;
    name: keyof FormValueType; // It ensures the name corresponds to keys in FormValueType
    text: string;
    label: string;
    type: string;
    required: boolean;
};

export type PasswordFormValueType = {
    password: string;
    confirmpassword: string;
};

export type ProfilePasswordDataItem = {
    id: number;
    name: keyof PasswordFormValueType; // It ensures the name corresponds to keys in FormValueType
    text: string;
    label: string;
    type: string;
    required: boolean;
};



// --------------------------- form Data List Start --------------------
export const ApplicationFormData: ApplicationFormDataItem[] = [
    {
        id: 4,
        name: "name",
        type: "text",
        text: "Please enter your Name",
        label: "Please enter your Name",
        required: true,
    },
    {
        id: 43,
        name: "username",
        type: "text",
        text: "Please enter your preferred Name",
        label: "Please enter your preferred Name",
        required: true,
    },
    {
        id: 1,
        name: "email",
        type: "email",
        text: "Please enter your Email",
        label: "Please enter your Email",
        required: true,
    },
    {
        id: 42,
        name: "linkedln",
        type: "text",
        text: "Please enter your Linkedin Profile",
        label: "Please enter your Linkedin Profile",
        required: true,
    },
    {
        id: 44,
        name: "salary",
        type: "text",
        text: "Please enter your Annual Expectation in USD?",
        label: "Please enter your Annual Expectation in USD?",
        required: true,
    },
];

export const ProfileFormData: ProfileFormDataItem[] = [
    {
        id: 4,
        name: "name",
        type: "text",
        text: "Change your Name",
        label: "Alfred Dow",
        required: true,
    },
    {
        id: 43,
        name: "username",
        type: "text",
        text: "Change your preferred Name",
        label: "JohnDoe123",
        required: true,
    },
    {
        id: 1,
        name: "email",
        type: "email",
        text: "Change your Email",
        label: "hello@example.com",
        required: true,
    },
    {
        id: 42,
        name: "linkedln",
        type: "text",
        text: "Change your Linkedin Profile",
        label: "linkedin.com/in/johndoe3",
        required: true,
    },
];
export const LoginFormData: LoginFormDataItem[] = [
    {
        id: 1,
        name: "email",
        type: "email",
        text: "Email",
        label: "hello@example.com",
        required: true,
    },
    {
        id: 4,
        name: "password",
        type: "password",
        text: "Password",
        label: "my password",
        required: true,
    },

];
export const RegisterFormData: RegisterFormDataItem[] = [
    {
        id: 12,
        name: "name",
        type: "text",
        text: "Name",
        label: "Jane Doe",
        required: true,
    },
    {
        id: 12,
        name: "username",
        type: "text",
        text: "UserName",
        label: "JaneDoe@",
        required: true,
    },
    {
        id: 1,
        name: "email",
        type: "email",
        text: "Email",
        label: "hello@example.com",
        required: true,
    },
    {
        id: 4,
        name: "password",
        type: "password",
        text: "Password",
        label: "my password",
        required: true,
    },

];
export const PasswordFormData: ProfilePasswordDataItem[] = [
    {
        id: 4,
        name: "password",
        type: "password",
        text: "Change your Password",
        label: "my password",
        required: true,
    },
    {
        id: 43,
        name: "confirmpassword",
        type: "password",
        text: "Change your preferred Password",
        label: "Confirm your password",
        required: true,
    },
];

// --------------------------- form Data List End --------------------


// ------------- API REQUEST ROUTE -----------------
export const BASE_URL =
    process.env.NODE_ENV === "development" ? "http://localhost:4000" : "";

export const CONVERSATION_URL = "/api/v1/conversation";
export const USERS_URL = "/api/v1/users";
export const AUTH_URL = "/api/v1/auth";
export const UPLOAD_URL = "/api/v1/upload";
export const MESSAGE_URL = "/api/v1/message";

// ------------- API REQUEST ROUTE END -----------------




// ------------- MOCK USER LISTS  -----------------
export type MockChatType = {
    image: string,
    name: string
    lastMessage: string;
}
export const MockUserList: MockChatType[] = [
    {
        name: "Mike Micheal",
        image: "/images/user_1.jpg",
        lastMessage: "Hello! How are you doing",

    },
    {
        name: "Kristin Watson",
        image: "/images/user_2.jpg",
        lastMessage: "Hello! How are you doing",

    }, {
        name: "Cameroon Wiliamson",
        image: "/images/user_3.jpg",
        lastMessage: "Hello! How are you doing",
    }, {
        name: "James Cooper",
        image: "/images/user_4.jpg",
        lastMessage: "Hello! How are you doing",
    }, {
        name: "Kelvin Nguyen",
        image: "/images/user_5.jpg",

        lastMessage: "Hello! How are you doing",

    },
]
// ------------- MOCK USER LISTS  -----------------


// ------------- MOCK USER LISTS  -----------------
export type MockMessageType = {
    sender: {
        image: string,
        name: string
    };
    receiver: {
        image: string,
        name: string
    };
    text: string;
    image?: string;
    createdAt?: string;
}

export const MockMessages: MockMessageType[] = [
    {
        receiver: {
            name: "Mike Micheal",
            image: "/images/user_1.jpg",
        },
        text: "Hi Mike, I am looking forward to seeing you",
        createdAt: "20th November 2024",
        image: "",
        sender: {
            name: "Kristin Watson",
            image: "/images/user_2.jpg",
        }
    },
    {
        sender: {
            name: "Mike Micheal",
            image: "/images/user_1.jpg",
        },
        text: "Hi Kristin, I am looking forward to that",
        createdAt: "20th November 2024",
        image: "",
        receiver: {
            name: "Kristin Watson",
            image: "/images/user_2.jpg",
        }
    },
    {
        sender: {
            name: "Mike Micheal",
            image: "/images/user_1.jpg",
        },
        text: "I will be availble for the meeting",
        createdAt: "20th November 2024",
        image: "",
        receiver: {
            name: "Kristin Watson",
            image: "/images/user_2.jpg",
        }
    },
    {
        sender: {
            name: "Mike Micheal",
            image: "/images/user_1.jpg",
        },
        text: "I hope it suits you",
        createdAt: "20th November 2024",
        image: "",
        receiver: {
            name: "Kristin Watson",
            image: "/images/user_2.jpg",
        }
    },
    {
        receiver: {
            name: "Mike Micheal",
            image: "/images/user_1.jpg",
        },
        text: "Sure Mike, It fit my schedule",
        createdAt: "20th November 2024",
        image: "",
        sender: {
            name: "Kristin Watson",
            image: "/images/user_2.jpg",
        }
    },
]
// ------------- MOCK USER LISTS  -----------------




