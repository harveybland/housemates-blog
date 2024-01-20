// Post API Response interface
export interface PostResponseProps {
    id: number,
    userId: number,
    title: string,
    body: string
    NumbOfComments: number,
    user: UserProps
}

// Post component interface
export interface PostProps {
    id: number,
    title: string,
    body: string,
    NumbOfComments: number,
    user: UserProps
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