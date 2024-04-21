import React from 'react'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
const notify =()=>{
  toast("login successfully");
}

  return (
   <>
  <div className="form-section">

  <div className="name-section">
  <div class="row">
  <div class="col">
    <input type="text" class="form-control"placeholder="First name" aria-label="First name"/>
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
  </div>
</div>
  </div>
 <div className="gmail-section">
    
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
 </div>
<ToastContainer/>
 <div className="btn-section"><button type="button" onClick={notify}class="btn btn-warning">Warning</button></div>
  </div>
   </>
  )
}

export default App;