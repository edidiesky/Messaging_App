import { BiMessage, BiSolidDashboard, BiSolidTrash, BiPhoneCall } from "react-icons/bi";
import { FaBookmark } from "react-icons/fa";
export const userDashboardLinks = [
    {
        id: 6,
        tab: {
            icon: <BiSolidDashboard fontSize={"16px"} />,
            title: "Home",
            path: "/",
        },
        list: [],
    },
    {
        id: 210,
        tab: {
            icon: <BiPhoneCall fontSize={"20px"} />,
            title: "Channels",
            path: "/channels",
        },
        list: [],
    },
    {
        id: 210,
        tab: {
            icon: <BiMessage fontSize={"20px"} />,
            title: "Workspaces",
            path: "/Workspaces",
        },
        list: [],
    },

]
export const sidebarLinksData = [
    {
        id: 6,
        tab: {
            icon: <BiMessage fontSize={"16px"} />,
            title: "Threads",
            path: "/threads",
        },
        list: [],
    },
    {
        id: 210,
        tab: {
            icon: <FaBookmark fontSize={"16px"} />,
            title: "Bookmarks",
            path: "/Bookmarks",
        },
        list: [],
    },

]

export const channelListsData = [
    {
        name: "General-Chat"
    },
    {
        name: "Dev-team"
    },
    {
        name: "Product Updates"
    }, {
        name: "Random"
    }, {
        name: "Projects"
    }, {
        name: "Events"
    }, {
        name: "Shoutouts"
    }, {
        name: "Strategy"
    }, {
        name: "Dev-Team"
    }, {
        name: "Product-team"
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
    email: string
    lastMessage: string;
    createdAt: string;
}
export const MockUserList: MockChatType[] = [
    {
        email: "MikeMicheal@gmail.com",
        name: "Mike Micheal",
        image: "/images/user_1.jpg",
        createdAt: "24th Oct 2024",
        lastMessage: "Absolutely consistency is key for usability. wWe'll ensure that the layout is uniform across..",
    },
    {
        email: "RobertWatson@gmail.com",
        name: "Robert Watson",
        image: "/images/user_2.jpg",
        createdAt: "24th Oct 2024",
        lastMessage: "Great, thank you Cameron. i think we should foster the onboarding process to be more seamless",

    }, {
        email: "CameroonWiliamson@gmail.com",
        name: "Cameroon Wiliamson",
        image: "/images/user_3.jpg",
        createdAt: "24th Oct 2024",
        lastMessage: "This is a key issue. We will work on improving the dashboard enforcing usability across",
    }, {
        email: "KristinCooper@gmail.com",

        name: "Kristin Cooper",
        image: "/images/user_4.jpg",
        createdAt: "24th Oct 2024",
        lastMessage: "Well, first off, I am not entirely convinced the font choice. It feels a bit casual for the srevice we are offering",
    }, {
        email: "KelvinNguyen@gmail.com",
        name: "Kelvin Nguyen",
        image: "/images/user_5.jpg",

        createdAt: "24th Oct 2024",
        lastMessage: "I just recall the issue Amazon had in refining her Dashboard which led to a 25% decrease in interaction among her clients",

    },
]
// ------------- MOCK USER LISTS  -----------------


// ------------- MOCK USER LISTS  -----------------
export type MockMessageType = {
    sender: {
        image: string,
        name: string,
        id: string,
    };
    receiver: {
        image: string,
        name: string,
        id: string,

    };
    senderid?: string;
    receiverid?: string;
    text: string;
    image?: string;
    createdAt?: string;
}

export const MockMessages: MockMessageType[] = [
    {
        receiver: {
            name: "Mike Micheal",
            image: "/images/user_1.jpg",
            id: "347489409dkcncbdgye74"
        },
        text: "Absolutely consistency is key for usability. We'll ensure that the layout is uniform across..",
        createdAt: "20th November 2024",
        image: "",

        receiverid: "347489409dkcncbdgye74",
        senderid: "ryrg34555dgdhfkfgogusga",
        sender: {
            name: "Kristin Watson",
            image: "/images/user_2.jpg",
            id: "ryrg34555dgdhfkfgogusga"
        }
    },
    {
        receiverid: "347489409dkcncbdgye74",
        senderid: "ryrg34555dgdhfkfgogusga",
        sender: {
            name: "Mike Micheal",
            image: "/images/user_1.jpg",
            id: "347489409dkcncbdgye74"
        },
        text: "Great, thank you Kristin. i think we should foster the onboarding process to be more seamless",
        createdAt: "20th November 2024",
        image: "/images/upload_1.jpeg",
        receiver: {
            name: "Kristin Watson",
            image: "/images/user_2.jpg",
            id: "ryrg34555dgdhfkfgogusga"
        }
    },
    {
        receiverid: "347489409dkcncbdgye74",
        senderid: "ryrg34555dgdhfkfgogusga",
        sender: {
            name: "Mike Micheal",
            image: "/images/user_1.jpg",
            id: "347489409dkcncbdgye74"
        },
        text: "This is a key issue. We will work on improving the dashboard enforcing usability across",
        createdAt: "20th November 2024",
        image: "",
        receiver: {
            name: "Kristin Watson",
            image: "/images/user_2.jpg",
            id: "ryrg34555dgdhfkfgogusga"
        }
    },
    {
        receiverid: "347489409dkcncbdgye74",
        senderid: "ryrg34555dgdhfkfgogusga",
        sender: {
            name: "Mike Micheal",
            image: "/images/user_1.jpg",
            id: "347489409dkcncbdgye74"
        },
        text: "Well, first off, I am not entirely convinced the font choice. It feels a bit casual for the srevice we are offering",
        createdAt: "20th November 2024",
        image: "/images/upload_2.jpeg",

        receiver: {
            name: "Kristin Watson",
            image: "/images/user_2.jpg",
            id: "ryrg34555dgdhfkfgogusga"
        }
    },
    {
        receiver: {
            name: "Mike Micheal",
            image: "/images/user_1.jpg",
            id: "347489409dkcncbdgye74"
        },
        text: "I just recall the issue Amazon had in refining her Dashboard which led to a 25% decrease in interaction among her clients.. What do you think about this",
        createdAt: "20th November 2024",
        image: "",
        receiverid: "347489409dkcncbdgye74",
        senderid: "ryrg34555dgdhfkfgogusga",
        sender: {
            name: "Kristin Watson",
            image: "/images/user_2.jpg",
            id: "ryrg34555dgdhfkfgogusga"
        }
    },
]
// ------------- MOCK USER LISTS  -----------------




