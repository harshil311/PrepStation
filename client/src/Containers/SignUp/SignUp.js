import React from "react";
import './SignUp.css'
const SignUp = () => {
  return (
  <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
  <div class="wrapper">
  <div class="title-text">
    
     <div class="title signup">
        Signup Form
     </div>
  </div>
  <div class="form-container">
    
     <div class="form-inner">
        
        <form action="#" class="signup">
           <div class="field">
              <input type="text" placeholder="Email Address" required/>
           </div>
           <div class="field">
              <input type="password" placeholder="Password" required/>
           </div>
           <div class="field">
              <input type="password" placeholder="Confirm password" required/>
           </div>
           <div class="field">
                <label> Select Role:&nbsp; &nbsp;</label>  
                <select>  
                <option value = "Teacher"> Teacher   
                </option>  
                <option value = "Student"> Student   
                </option>  
                </select>
           </div>
           <div class="field btn">
              <div class="btn-layer"></div>
              <input type="submit" value="Signup"/>
           </div>
        </form>
     </div>
  </div>
</div>
</div>);
};

export default SignUp;
