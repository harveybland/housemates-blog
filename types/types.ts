import { MouseEventHandler } from "react"

// Posts API Response interface
export interface PostsResponseProps {
    id: number,
    userId: number,
    title: string,
    body: string
    NumbOfComments: number,
    user: UserProps,
    // todo: remove
    isGrid: boolean
}

// Post component interface
export interface PostProps {
    id: number,
    title: string,
    body: string,
    NumbOfComments: number,
    user?: UserProps,
    isGrid: boolean
}

// User interface
export interface UserProps {
    id?: number,
    name: string,
    username?: string,
    email?: string,
    address?: AddressProps
    phone?: string,
    website?: string,
    company?: CompanyProps
}

// Address interface
export interface AddressProps {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
        lat: number,
        lng: number
    }
}

// Company interface
export interface CompanyProps {
    name: string,
    catchPhrase: string,
    bs: string
}   

// Comment interface
export interface CommentProps {
    id?: number,
    name: string,
    email: string,
    body: string
}

// View toggle button interface
export interface ViewToggleButtonProps {
    isGrid: boolean;
    onClick: MouseEventHandler<HTMLButtonElement>;
    label: string;
}