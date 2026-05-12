import './App.css';
import { useState } from 'react';

function App() {

  const [inputs, setInputs] = useState({})
  const [textcomment, setTextcomment] = useState("")
  const [gender, setGender] = useState("")

  const submitform = function(e){
    e.preventDefault()
    alert(`Entered name = ${inputs.name}\nAge = ${inputs.age}\nComments = ${textcomment}\nGender = ${gender}`)
  }

  const handleinputs = function(e){
    const name = e.target.name
    const value = e.target.value

    setInputs(values => ({ ...values, [name]: value }))
  }

  const submitcomment = function(e){
    setTextcomment(e.target.value)
  }

  const handleGender = function(e){
    setGender(e.target.value)
  }

  return (
    <div className="App">

      <form onSubmit={submitform}>

        <fieldset>

          <legend>Forms in ReactJS</legend>

          <div className='formcontrol'>
            <label htmlFor="name">Enter a name: </label>

            <input
              type='text'
              id='name'
              name='name'
              value={inputs.name || ""}
              onChange={handleinputs}
            />
          </div>

          <div className='formcontrol'>
            <label htmlFor="age">Enter an Age: </label>

            <input
              type='number'
              id='age'
              name='age'
              value={inputs.age || ""}
              onChange={handleinputs}
            />
          </div>

          <div className='formcontrol'>
            <label htmlFor="comments">Any suggestions? </label>

            <textarea
              id='comments'
              value={textcomment}
              onChange={submitcomment}
            />
          </div>

          <div className='formcontrol'>
            <label htmlFor="gender">Select Gender: </label>

            <select
              id="gender"
              value={gender}
              onChange={handleGender}
            >
              <option for="g">Select Gender</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
          </div>

        </fieldset>

        <div className='formcontrol'>
          <button type='submit'>Submit Form</button>
        </div>

      </form>

      <p>Name = {inputs.name}</p>
      <p>Age = {inputs.age}</p>
      <p>Comments = {textcomment}</p>
      <p>Gender = {gender}</p>

    </div>
  );
}

export default App;