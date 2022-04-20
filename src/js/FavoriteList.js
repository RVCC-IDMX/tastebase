import React from 'react';
//import '../src/FavoriteList.css';
import {AiFillHeart} from 'react-icons/ai';
import {FaTrash} from 'react-icons/fa';

const Favoriting = ({uri, favorites, recObj}) => {  
    //For later when integrating USER LOGIN and LOCALSTORAGE
    // let RecipeID = uri.split('#')[1];
    // let userID = 'USER';
    
    function buttonClick(event){
        
        //Working Code : DO NOT DELETE

        //Make sure URI is saved for each heart icon
        //Find element that has unique URI and click is true
        const el = document.querySelector(`[data="${uri}"]`);
        
        /*
            For testing logs only
            console.log(el);
            console.log(favorites[uri]);
            const el = document.querySelector(uri);
        */

        //If uri is property of favorites and value is true, then toggle red to grey and make value false
        //Else toggle grey to red and make value true
        if (favorites[uri]){
            el.style.fill = 'grey';
            favorites[uri] = undefined;
            delete(favorites[uri]);
        }
        else {
            el.style.fill = 'red';
            favorites[uri] = recObj;
        }

        //Set favoritesArray in localstorage
        localStorage.setItem('favoritesArray', JSON.stringify(favorites));
    }

    //On click, check the state of the heart
    function checkHeart() {
        if (favorites[uri]) return "red";
        return "gray";
    }

    //For trash icon
    var timesClicked = 0;
	
	function deleteFav(){
		timesClicked++;

        //On even number of clicks, return state of recipe card
        //On odd number of clicks, grey out recipe card, then remove after n msec
		if (timesClicked%2===0){
			document.querySelector(`[data-uri="${uri}"]`).style.opacity = 1;
			document.querySelector(`[data-uri="${uri}"]`).style.visibility = 'visible';
			return
		} else {
			document.querySelector(`[data-uri="${uri}"]`).style.opacity = .5;
			setTimeout(()=> {
			if (timesClicked%2===0){
				return
			} else {
				document.querySelector(`[data-uri="${uri}"]`).style.visibility = 'hidden'; 
                buttonClick();
			}	
		},5000)
		}
	}
    
    return (
        <>
            {<span className='heart_button_container' >
                <AiFillHeart color={checkHeart()} id='heart_button'  onClick={(event)=>buttonClick(event)} data={uri} name='heart_btn'/>
            </span>}
            {<span className='trash_button_container'>
                <FaTrash onClick={()=>deleteFav()}/>
            </span>}
        </>
    )
}

export default Favoriting;