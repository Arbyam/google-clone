import React, {useState} from 'react';

import './Search.css'
import AppsIcon from '@mui/icons-material/Apps';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'; //v6 uses useNavigate instead of useHistory
import { useStateValue } from '../StateProvider';
import { actionTypes} from "../reducer";

function Search({hideButtons = false}) {
    const [term, dispatch] = useStateValue();
const[input, setInput] = useState('')
const navigate = useNavigate();


    const search = (event) =>{
        event.preventDefault();
        console.log("Search Key intiiated with the input:", input)

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })

        navigate('/search')  //react router dom v6 --- dont need to do navigate.push()

    };
    return (
       <form className="search">
        <div className="search__input">
            <SearchIcon className="search__input--icon"/>
            <input value={input} onChange={event => setInput(event.target.value)}/>
            <MicIcon/>
        </div>

        {!hideButtons? (

        <div className="search__buttons">
        <Button type = "submit" onClick={search} variant = "outline">Google Search</Button>
        <Button variant = "outline">I'm Feeling Lucky</Button>
        </div>
        ): (
            <div className="search__buttons">
            <Button className='search__buttons--hidden' type = "submit" onClick={search} variant = "outline">Google Search</Button>
            <Button className='search__buttons--hidden' variant = "outline">I'm Feeling Lucky</Button>
            </div>
        )}
       </form>
    );
}

export default Search;