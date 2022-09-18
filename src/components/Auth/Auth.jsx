import React, { useState } from 'react'
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import './Auth.scss'
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { loginUserAction } from '../../redux/Actions/UserAction';
// import { BASE_URL } from '../../api/config';
// import Swal from 'sweetalert2';

const Auth = () => {

  // const { userInfo } = useSelector((state) => state.user)
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")

  // const navigate = useNavigate()
  // const dispach = useDispatch()

  // const loginn = () => {
  //   dispach(loginUserAction(email, password))
  // }



  // useEffect(() => {
  //   if (userInfo.status) {
  //     if (userInfo.status === 200) {
  //         navigate("/")
          
  //     }else{
  //       Swal.fire({
  //         icon: 'error',
  //         title: 'Bir xəta baş verdi.',
  //         text: 'E-poçtunuz və ya şifrəniz yanlışdır.',
          
  //       })
  //       navigate("/auth")
  //     }
  // }
  // }, [userInfo])


  // const [fullName, setFullName] = useState();
  // const [emaill, setEmaill] = useState();
  // const [passwordd, setPasswordd] = useState();
  // const [errorMessage, setErrorMessage] = useState();
  // const registerUser = async () => {
  //   var user = await fetch(`${BASE_URL}Auth/register`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       fullName: fullName,
  //       email: emaill,
  //       password: passwordd,
  //     }),
  //   }).then((respons) => respons.json());

  //   if (user.status == 200) {
  //     Swal.fire({
  //       icon: "success",
  //       title: "Uğurla qeydiyyatdan keçdiniz.",
  //       showConfirmButton: false,
  //       timer: 1500,
  //     }).then((c) => {
  //       navigate("/");
  //     });
  //   } else {
  //     setErrorMessage(user.message);
  //   }
  // };






  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };




  return (
    <div id='authPages'>
      <div className="">
        <div className="loginBox">
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="Giriş" value="1" className='giris' />
                  <Tab label={"Qeydiyyat"} value="2" className='giris' />
                </TabList>
              </Box>
              <TabPanel value="1">
                <div className="inputBox">
                  <p>E-poçt</p>
                  {/* <input type="text" onChange={(e) => setEmail(e.target.value)} /> */}
                  <input type="text" />
                </div>
                <div className="inputBox marginBottom">
                  <p>Şifrəniz</p>
                  {/* <input type="password" onChange={(e) => setPassword(e.target.value)} /> */}
                  <input type="text" />

                </div>
                <div className="buttonBox">
                  {/* <button onClick={() => loginn()}>Giriş</button> */}
                  <button>Giris</button>
                </div>

              </TabPanel>
              <TabPanel value="2">
                <div className="inputBox">
                  <p>Ad</p>
                  {/* <input type="text" onChange={(e) => setFullName(e.target.value)}/> */}
                  <input type="text" />
                </div>
                {/* <div className="inputBox">
                  <p>Soyad</p>
                  <input type="text" />
                </div> */}
                <div className="inputBox">
                  <p>E-poçt ünvanı</p>
                  {/* <input type="text" onChange={(e) => setEmaill(e.target.value)}/> */}
                  <input type="text" />
                </div>
                <div className="inputBox">
                  <p>Şifrə</p>
                  {/* <input type="password"  onChange={(e) => setPasswordd(e.target.value)}/> */}
                  <input type="text" />
                  
                </div>
                {/* <div className="inputBox">
                  <p>Mobil nömrə</p>
                  <input type="number" />
                </div> */}
                
                
                <div className="buttonBoxx">
                  {/* <button onClick={() => registerUser()}>Qeydiyyatdan keç</button> */}
                  <button>Qeydiyyatdan kec</button>
                </div>
              </TabPanel>
            </TabContext>
          </Box>
        </div>
        <div className="col-lg-6"></div>
      </div>


    </div>
  )
}

export default Auth