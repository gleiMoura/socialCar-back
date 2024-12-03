export interface loginType {
    email: string,
    password: string
};

export interface registerType {
    name: string,
    profileUrl?: string,
    email: string,
    password: string
};

export interface CustomError extends Error {
    response?: {
        status: number;
        message: string;
    };
}