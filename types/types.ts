import { MouseEventHandler } from "react"

// Posts API Response interface
export interface Post {
    id: number,
    userId?: number,
    title: string,
    body: string
    author?: Author,
    NumbOfComments: number,
    isGrid: boolean
}

// Author interface
export interface Author {
    id?: number,
    name: string,
    username?: string,
    email?: string,
    address?: Address
    phone?: string,
    website?: string,
    company?: Company
}

// Address interface
export interface Address {
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
export interface Company {
    name: string,
    catchPhrase: string,
    bs: string
}   

// Comment interface
export interface Comment {
    id?: number,
    name: string,
    email: string,
    body: string
}

// View toggle button props interface
export interface ViewToggleButtonProps {
    isGrid: boolean;
    onClick: MouseEventHandler<HTMLButtonElement>;
    label: string;
}

// Avatar props interface
export interface AvatarProps {
    name: string;
    width?: string;
    height?: string;
    fontSize?: string;
}

// Option bar props interface
export interface OptionBarProps {
    searchTerm: string;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
    isGrid: boolean;
    setIsGrid: React.Dispatch<React.SetStateAction<boolean>>;
  }