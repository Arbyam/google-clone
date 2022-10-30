import Search from "./Search";
import React from "react";
import { Link } from "react-router-dom";
import response from "../response";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import "./SearchPage.css";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from '@mui/icons-material/Description';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Maps from '@mui/icons-material/AddLocationAlt';
import MoreVertIcon from '@mui/icons-material/MoreVert';
function SearchPage() {
  const [{term}, dispatch] = useStateValue();

  //LIVE API CALL
  const {data}= useGoogleSearch(term);

//   const data = response; -- THIS WAS THE MOCK API CALL

  //8496bbf80bbf94c8e
  console.log(data);
  return (
    <div className="search__page">
      <div className="search__page--header">
        <Link to="/">
          <img
            className="search__page--logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
          />
        </Link>

        <div className="search__page--header--body">
          <Search hideButtons />
          <div className="search__page--options">
            <div className="search__page--options--left">
                <div className="search__page--option">
                    <SearchIcon/>
                    <Link to="/all">All</Link>
                </div>
                <div className="search__page--option">
                    <DescriptionIcon/>
                    <Link to="/about">News</Link>
                </div>
                <div className="search__page--option">
                    <ImageSearchIcon/>
                    <Link to="/images">Images</Link>
                </div>
                <div className="search__page--option">
                    <ShoppingBagIcon/>
                    <Link to="/shopping">Shopping</Link>
                </div>
                <div className="search__page--option">
                    <Maps/>
                    <Link to="/maps">Maps</Link>
                </div>
                <div className="search__page--option">
                    <MoreVertIcon/>
                    <Link to="/more">More</Link>
                </div>
            </div>

            <div className="search__page--options--right">
                <div className="search__page--option">
                    <Link to="/settings">Settings</Link>
                </div>
                <div className="search__page--option">
                    <Link to="/tools">Tools</Link>
                </div>
            </div>
          </div>
        </div>
      </div>
        {term && (
            <div className="search__page--results">
                <p className="search__page--results--counter">About {data?.searchInformation.formattedTotalResults} results({data?.searchInformation.formattedSearchTime} seconds) for {term}</p>

                {data?.items.map(item =>(
                    <div className="search__page--result">
                        <a className="search__page--result--link" href={item.link}>
                            {item.pagemap?.cse_image?.length>0 && (
                                <img src={item.pagemap?.cse_image[0]?.src} alt="" className="results__img" />
                            )}
                        {item.displayLink}
                            
                        </a>
                        <a href={item.link} className="search__page--result--title">
                            <h2>{item.title}</h2>
                        </a>
                        <p className="result__snippet">{item.snippet}</p>
                    </div>
               ))}
            </div>

        )}
    </div>
  );
}

export default SearchPage;
