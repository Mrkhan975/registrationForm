import React, { useState } from "react";
import axios from "axios";
import "./LogReg.css";
import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";
import CircularProgress from '@mui/material/CircularProgress';
import EmailIcon from "@mui/icons-material/Email";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";


const baseUrl = import.meta.env.VITE_SERVERURL

const RegistrationPage = () => {

  const [isProgressBarShow, setIsProgressBar] = useState(false)
  const [details, setDetails] = useState({});
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProgressBar(true)


    const response = await axios.post(`${baseUrl}/userRegistration`, details);
    setIsProgressBar(false)

    if (response.status == 201) {
      alert(response.data.error);
    } else if (response.status == 200) {

        alert("Registraion Sucessfull")
        return         
     
    }
  };

  const handleChangeFormDetails = (formdata) => {
    setDetails({ ...details, ...formdata });
  };



  return (
    <>
      <div className="logReg">
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
        {isProgressBarShow && <div className="modal-overlay">
          <div className="modal-overlay">
            <CircularProgress />
          </div>
        </div>}
          <div className="formItems">
            <PersonIcon />
            <input
              className="logRegFromField"
              placeholder="User Name"
              type="text"
              onChange={(e) =>
                handleChangeFormDetails({ userName: e.target.value.trim() })
              }
            />
          </div>
          {isRegLog && (
            <div className="formItems">
              <PersonPinCircleIcon />
              <input
                className="logRegFromField"
                placeholder="Nick Name"
                type="text"
                onChange={(e) =>
                  handleChangeFormDetails({ nickName: e.target.value.trim() })
                }
              />
            </div>
          )}
          {isRegLog && (
            <div className="formItems">
              <EmailIcon />
              <input
                className="logRegFromField"
                placeholder="Email"
                type="text"
                onChange={(e) =>
                  handleChangeFormDetails({ email: e.target.value.trim() })
                }
              />
            </div>
          )}
          <div className="formItems">
            <KeyIcon />
            <input
              placeholder="Password"
              className="logRegFromField"
              type="text"
              onChange={(e) =>
                handleChangeFormDetails({ password: e.target.value.trim() })
              }
            />
          </div>

          <div className="formItemsButtons">
            <button className="isRegLogButton" type="submit">
               Register 
            </button>
           
          </div>
        </form>
      </div>
    </>
  );
};
export default RegistrationPage;
