export type SingleUser = {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    gender: string;
    registration_date: string;
    Region: string;
    status: boolean;
};

export type UsersState ={
    users: SingleUser[];
    currentUser: SingleUser | null;
    loading: boolean;
    error: string | null
    loggedInUser : SingleUser | null
}