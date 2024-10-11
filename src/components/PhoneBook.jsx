import{usePhoneBook} from '../hooks/usePhoneBook'

const Btn = ({contactId})=>{
    const {remove} = usePhoneBook()

    return  (
        <button className="delete-contact-buton" onClick={()=>{remove(contactId)}} >Delete</button>
      );
}
export default function PhoneBook(){

    const {searchingActive, friends} = usePhoneBook()
     
                                return (friends.length !==0 ? (<div className='container'>
                                                               <h1 className="contact-box-heading">Contacts:</h1>
                                                               <div className="">
                                                                   {friends.map((item)=>{
                                                                   return(
                                                                   <div key={item.id} className="contact-box">
                                                                       <div className="contact-detail">
                                                                           <p  className="contact-name">{item.name}</p>
                                                                           <p  className="contact-number">{item.number}</p>
                                                                       </div>
                                                                       <Btn
                                                                           key={item.id}
                                                                           contactId={item.id}
                                                                       />
                                                                   </div>)
                                                               })}
                                                               </div>
                                                           </div>)
                                                         : searchingActive? <h2>Result not found</h2>
                                                                          : <h1>Your phonebook is empty</h1>)}


