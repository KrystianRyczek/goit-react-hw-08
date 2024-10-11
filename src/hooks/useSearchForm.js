import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"
import { filtreatingContacts } from '../redux/api/apiSlice';
import { selectFilter} from '../redux/api/apiSlice';

export const useSearchForm=()=>{
    const filterValue = useSelector(selectFilter)

    const dispach = useDispatch()

    const updateFilterValue = (curentFilterValue)=>{
          dispach(filtreatingContacts(curentFilterValue))
    }
       
    return {filterValue, updateFilterValue}
}