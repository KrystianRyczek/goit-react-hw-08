import { lazy } from "react";

const SearchUserForm = lazy(() => import('./SearchUserForm'));
const AddUserForm = lazy(() => import('./AddUserForm'));
const PhoneBook = lazy(() => import('./PhoneBook'));

export default function Contacts(){


    return (
    <>
    <AddUserForm/>
    <SearchUserForm/>
    <PhoneBook/>
    
    
    
    
    </>);
}

