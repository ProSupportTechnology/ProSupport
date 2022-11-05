export interface iRegister {
    name: string,
    email: string,
    password: string,
    confirmPassword: string
}

export interface iLogin{
    email: string,
    password: string
}

export interface iUser{
    accessToken: string,
    email: string,
    password: string,
    name: string,
    id: string,
    user: {
        accessToken: string,
        email: string,
        password: string,
        name: string,
        id: string,
    }

}

