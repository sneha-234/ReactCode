import React  from "react"; ""
import styles from "./si.module.css"; 

const FormComponent = (props) => 
  {  
    const{setName , setEmail , setPassword , setHighestQualification , setAge , setGender , setSkills,setisSubmit } = props
    const skillOptions = ["React", "Node.js", "JavaScript", "HTML", "CSS","Python" ,"ML", "Java"];
    const handleSubmitForm = () => {
        setisSubmit(true);
      };
      const handleSkillChange = (selectedSkills) => {
        setSkills(selectedSkills);
      };
      
    return (

      <form
        className={styles.myForm} 
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmitForm();
  }}
    >

        <div className = {styles.label} >
          <label>Name:</label>  
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
            //value={name}
          />
        </div>

        <div className = {styles.label}>
          <label>Email:</label>
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Enter Email"
            //value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className={styles.radioContainer}>
        <div className = {styles.label} > Highest Qualification: </div>
           <div className={ styles.radioBox}>

           <label>
              <input
            className={styles.radio}
            type="radio"
            name="Radio"
            value="Diploma"
            onChange={(e) => setHighestQualification(e.target.value)}
          />
             Diploma
           </label>

        <label>
          <input
            className={styles.radio}
            type="radio"
            name="Radio"
            value="Bachelor's"
            onChange={(e) => setHighestQualification(e.target.value)}
          />
           Bachelor's
        </label>

        <label>
          <input
            className={styles.radio}
            type="radio"
            name="Radio"
            value="Master's"
            onChange={(e) => setHighestQualification(e.target.value)}
            
          />
          Master's
        </label>

        <label>
          <input
            className={styles.radio}
            type="radio"
            name="Radio"
            value="PHD"
            onChange={(e) => setHighestQualification(e.target.value)}
          />
          PHD
        </label>
      </div>
    </div>


    <div className={styles.checkboxContainer} >
    <div className = {styles.label}>
        <label>Skills:</label> </div>
    <div className= {styles.checkboxBox}>
        {skillOptions.map((skill) => (
          <div key={skill} >
            <input
              type="checkbox"
              name="skills"
              //value={skill}
              //checked={skills.includes(skill)}
              onChange={(e) => {
                const selectedSkills = e.target.checked
                  ? [...skills, skill]
                  : skills.filter((selected) => selected !== skill);
                handleSkillChange(selectedSkills);
              }}
            />
            <span>{skill}</span>
          </div>
        ))}
      </div>
      </div>


      <div className={styles.radioContainer}>
       <div className = {styles.label}>Gender: </div>
           <div className={ styles.radioBox}>
        <label>
          <input
            className={styles.radio}
            type="radio"
            name="myRadio"
            value="Male"
            onChange={(e) => setGender(e.target.value)}
          />
          Male
        </label>

        <label>
          <input
            className={styles.radio}
            type="radio"
            name="myRadio"
            value="Female"
            onChange={(e) => setGender(e.target.value)}
          />
          Female
        </label>

        <label>
          <input
            className={styles.radio}
            type="radio"
            name="myRadio"
            value="Prefer not to say"
            onChange={(e) => setGender(e.target.value)}
          />
          Prefer not to Say
        </label>
      </div>



        <div className = {styles.label}>
          <label> Age:</label>
          <select
            className={styles.select}
            onChange={(e) => setAge(e.target.value)}
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
          <button className={styles.button} type="submit">
            Submit
          </button>
        </div>
      </form>
    );
  };
  export default FormComponent;
