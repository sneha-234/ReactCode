import React, { useState } from "react";
import styles from "./signup.module.css"; 

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmit, setisSubmit] = useState(false);
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [skills, setSkills] = useState([]);

  const handleSubmitForm = () => {
    setisSubmit(true);
  };
  const handleSkillChange = (selectedSkills) => {
    setSkills(selectedSkills);
  };
  
return (
  <div>
    {isSubmit ? (
      <p>
        Form Submitted successfully by {name}!
      </p>
    ) : (
      <FormComponent handleSubmitForm={handleSubmitForm}
      name={name}
      email={email}
      password={password}
      setGender={gender}
      setAge={age}
      skills={skills}
      handleSkillChange={handleSkillChange}
    />
  )}
</div>
);
}

const FormComponent = ({
handleSubmitForm,
name,
email,
password,
setGender,
setAge,
skills,
handleSkillChange,
}) => 
{
const skillOptions = ["React", "Node.js", "JavaScript", "HTML", "CSS", "Python", "ML", "Java"];

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
            value={name}
          />
        </div>

        <div className = {styles.label}>
          <label>Email:</label>
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Enter Email"
            value={email}
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
            value={password}
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
            name="myRadio"
            value="Diploma"
            onChange={(e) => setGender(e.target.value)}
          />
             Diploma
           </label>

        <label>
          <input
            className={styles.radio}
            type="radio"
            name="myRadio"
            value="Bachelor's"
            onChange={(e) => setGender(e.target.value)}
          />
           Bachelor's
        </label>

        <label>
          <input
            className={styles.radio}
            type="radio"
            name="myRadio"
            value="Master's"
            onChange={(e) => setGender(e.target.value)}
          />
          Master's
        </label>

        <label>
          <input
            className={styles.radio}
            type="radio"
            name="myRadio"
            value="PHD"
            onChange={(e) => setGender(e.target.value)}
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
              value={skill}
              checked={skills.includes(skill)}
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
            value={age}
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

export default SignUp;