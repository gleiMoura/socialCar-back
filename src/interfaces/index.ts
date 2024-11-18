export interface loginType {
    email: string,
    password: string
};

export interface registerType {
    name: string,
    email: string,
    password: string
};

export interface CustomError extends Error {
    response?: {
        status: number;
        message: string;
    };
}