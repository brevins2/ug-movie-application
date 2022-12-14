export interface Movies {
  ID: number,
  Title: string,
  File: string,
  Genre: string,
  Producer: string,
  Details: string
}

export interface Producer {
  ID: number,
  Name: string,
  Email: string,
  Genre: string,
  File: string,
  Password: string,
  CPassword: string,
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