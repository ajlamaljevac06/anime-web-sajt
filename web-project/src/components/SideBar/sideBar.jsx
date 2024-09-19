import "./sideBar.css"
import { NavLink } from 'react-router-dom';
export default function SideBar(){

    
     
    
    
    
    return(
        <>
         <div className='sideBar'>
            <ul>
        
                <li className="li-bar" ><NavLink  to="/">Home</NavLink></li>
                <li className="li-bar"><NavLink to="/AnimePage">Anime</NavLink></li>
                <li className="li-bar"><NavLink to="/Manga">Manga</NavLink></li>
                <li className="li-bar"><NavLink to="/AboutUs">About Us</NavLink></li>
                <li className="li-bar"><NavLink to="/Favorites">Favorites</NavLink></li>
            </ul>
        
        
        
        

      </div>
        </>
    )
    

}
// style={{textDecoration:"none",color:"white"}}