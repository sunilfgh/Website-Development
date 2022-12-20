import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
  return (
    <div className="settings">
         <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Account</span>
          </div>
          <form className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
            <img 
             src= "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=600" alt="" 
             />
             <label htmlFor="fileInput">
             <i className="settingsPPIcon fa-solid fa-circle-user"></i>

             </label> 
             <input type="file" id="finleInput"  style={{display:"none"}}/>
            </div>
            <label>Username  </label>
            <input type ="text" placeholder="Aaji"/>
            <label>Email</label>
            <input type ="email" placeholder="aaji@gmail.com"/>  
              <label>Password</label>
              <input type ="password"/>
              <button className="settingsSubmit">Update</button>
          </form>
         </div>
         <Sidebar/>
    </div>
  );  
}
        