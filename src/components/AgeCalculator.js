import React, {useState} from "react";
import moment from "moment";

const AgeCalculator = () => {
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [age, setAge] = useState(0);

    const calculateAge = () => {
        const today = moment();
        const dob = moment(dateOfBirth);
        const ageInYears = today.diff(dob, "years");
        setAge(ageInYears);
    };

    return (
        <div className="text-center">
            <p className="display-1">React Task 5</p>
            <p className="display-6">By 21BCE5919 Vikram Ramkumar</p> <br></br>
            <h1 className="display-4"> Age Calculator </h1> <br></br>
            <form className="form">
                <table align="center">
                    <tr>
                        <input className="form-control" type="date" 
                            value={dateOfBirth}
                            onChange={(e) => setDateOfBirth(e.target.value)} 
                            width="50%"/> <br></br>
                    </tr>
                    <tr>
                        <button className="btn btn-outline-primary" type="button" onClick={calculateAge}> Calculate Age </button>
                    </tr>
                </table>
            </form> <br></br>
            <p className="text"> Your age is: {age}</p>
        </div>
    );
};

export default AgeCalculator;