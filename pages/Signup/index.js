import React, { useState } from "react";
import styles from './user.module.css';

function User ()
{
    const[formdata , setFormData] = useState();

    const handleChange = (keyName,value) =>
    {
        setFormData(
            {...formdata,[keyName]: value}
        )
    }
 const FormComponemet = () =>
 {
    return (
        <div className = {styles.label }>
            <label>Name:</label>  
          <input
           className={styles.input}
            type="text"
            name="name"
            placeholder= "Enter Name"
            onChange={(e) => handleChange("name", e.target.value)}
          />

          <div className = {styles.label}>
          <label>Email:</label>
          <input
           className={styles.input}
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={(e) => handleChange( "email" , e.target.value)}
          />
          </div>


          <div className = {styles.label}>
          <label>Enter Your Password</label>
          <input
            className={styles.input}
            type="password"
            name="password"
            placeholder="Enter Password"
            //value={password}
            onChange={(e) => handleChange( "password" ,e.target.value)}
          />
        </div>

        <div className={styles.radioContainer}>
        <div className = {styles.label} > Highest Qualification: </div>
           <div className={ styles.radioBox}>

           <label>
              <input
            className={styles.radio}
            type="radio"
            name="myRadio"
            value="Diploma"
            onChange={(e) => handleChange ('HighestQualification',e.target.value)}
          />
             Diploma
           </label>

        <label>
          <input
            className={styles.radio}
            type="radio"
            name="myRadio"
            value="Bachelor's"
            onChange={(e) => handleChange ('HighestQualification',e.target.value)}
          />
           Bachelor's
        </label>

        <label>
          <input
            className={styles.radio}
            type="radio"
            name="myRadio"
            value="Master's"
            onChange={(e) => handleChange ('HighestQualification',e.target.value)}
            
          />
          Master's
        </label>

        <label>
          <input
            className={styles.radio}
            type="radio"
            name="myRadio"
            value="PHD"
            onChange={(e) => handleChange ('HighestQualification',e.target.value)}
          />
          PHD
        </label>
      </div>
    </div>


    


      <div >
       <div >Gender: </div>
           <div className={ styles.radioBox}>
        <label>
          <input
            className={styles.radio}
            type="radio"
            name="myRadio"
            value="Male"
            onChange={(e) => handleChange("Gender" , e.target.value)}
          />
          Male
        </label>

        <label>
      
            <div className={ styles.radioBoox}> </div>
            <div className={styles.radio}></div>
            <input 
            type="radio"
            name="myRadio"
            value="Female"
            onChange={(e) => handleChange( "Gender" , e.target.value)}
          />
          Female
        </label>

        <label>

        <div className={ styles.radioBoox}> </div>
          <input
            className={styles.radio}
            type="radio"
            name="myRadio"
            value="Prefer not to say"
           
            onChange={(e) => handleChange( "Gender" , e.target.value)}
          />
          Prefer not to Say
        </label>
      </div>



        <div className = {styles.label}>
          <label> Age:</label>
          <select
            className={styles.select}
            onChange={(e) => handleChange( "age" , e.target.value)}
          >
            <option value="">Select Age</option>
            <option value="18-25">18-25</option>
            <option value="26-35">26-35</option>
            <option value="36-50">36-50</option>
            <option value="51+">51+</option>
          </select>
          </div>
        </div>
        

        <div>
          <button 
           className={styles.button}type="submit">
            Submit
          </button>
        </div>
          </div>
    )
}
}
export default User; 