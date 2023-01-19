export interface Movies {
  ID: number,
  Title: string,
  File: string,
  URL: string,
  Genre: string,
  Producer: string,
  Details: string,
  Category: string
}

export interface Producer {
  ID: number,
  Name: string,
  Email: string,
  Genre: string,
  File: string
}

export interface User {
  ID: number,
  Name: string,
  Username: string,
  Email: string,
  File: string,
  Password: string,
  CPassword: string
}

export interface Message {
  ID: number,
  Name: string,
  Email: string,
  Message: string
}

export interface Genre {
  ID: number,
  Genre: string
}

export interface Images {
  ID: number,
  Name: string,
  URL: string
}

export interface Login {
  Email: string,
  Password: string,
  roles: string[]
}