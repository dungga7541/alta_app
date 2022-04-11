
import './App.css';
import Dashboad from './Components/Dashboad';
import Login from "./Components/Login/Login/Login";
import Wrongpass from "./Components/Login/Wrongpass/Wrongpass";
import Forgotpass  from "./Components/Login/Forgotpass/Forgotpass";
import Resetpass  from "./Components/Login/Resetpass/Resetpass";
import Account  from "./Components/Login/Account/Account";
import Listlevel from './Components/Level/Listlevel'
import {Routes , Route } from 'react-router-dom';
import Addlevel from './Components/Level/Addlevel';
import Information  from './Components/Level/Information';
import Numberlevel from './Components/Level/Numberlevel';
import AccountManagement from './Components/AccountManagement/Listaccount';
import Service from './Components/Service';
import Adddevice from './Components/Device/Adddevice';
import Addservice from './Components/Service/Addservice';
import Detailservice from './Components/Service/Detailservice';
import Report from './Components/Report';
import RoleManagement from './Components/RoleManagement';
import AddRole from './Components/RoleManagement/AddRole';
import Detaildevice from './Components/Device/Detaildevice';
import Updatedevice from './Components/Device/Updatedevice';
import Listitem from './Components/Listitem'
import UpdateRole from './Components/RoleManagement/UpdateRole';
import Update from './Components/AccountManagement/Update';
import Diaryuser from './Components/UserDiary';
import AddAccount from './Components/AccountManagement/Accountinformation';
import Listdevice from './Components/Device/Listdevice';
function App() {
  return (
    <div className="App"> 
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/wrong' element={<Wrongpass/>}/>
          <Route path='/wrong/forgot' element={<Forgotpass/>}/>
          <Route path='/wrong/forgot/reset' element={<Resetpass/>}/>
          <Route path='/account' element={<><Listitem/><Account/></>}/>
          <Route path='/dashboard' element={<><Listitem/><Dashboad/></>}/>
          <Route path='/level' element={<><Listitem/><Listlevel/></>}/>
          <Route path='/level/add-level' element={<Addlevel/>}/>
          <Route path='/level/add-level/level' element={<Listlevel/>}/>
          <Route path='/level/service' element={< Information/>}/>
          <Route path='/level/numberlevel' element={< Numberlevel/>}/>
          <Route path='/level/numberlevel/level' element={< Listlevel/>}/>
          <Route path='/dashboard/AccountManagement' element={<><Listitem /><AccountManagement/></>}/>
          <Route path='/dashboard/AccountManagement/addaccount' element={<><Listitem /><AddAccount/></>}/>
          <Route path='/dashboard/AccountManagement/Updateaccount' element={<><Listitem /><Update/></>}/>
          <Route path='/dashboard/Diarywork' element={<><Listitem /><Diaryuser/></>}/>
          <Route path='/Device' element={<><Listitem/> <Listdevice/></>}/>
          <Route path='/Device/add-device' element={<Adddevice/>}/>
          <Route path='/service' element={<><Listitem/> <Service/></>}/>
          <Route path='/service/detailservice' element={<><Listitem/> <Detailservice/></>}/>
          <Route path='/report' element={<><Listitem/> <Report/></>}/>
          <Route path='/listservice' element={<Addservice/>}/>
          <Route path='/dashboard/RoleManagement' element={<><Listitem/><RoleManagement/></>}/>
          <Route path='/dashboard/RoleManagement/add-role-management' element={<AddRole/>}/>
          <Route path='/dashboard/RoleManagement/update-role-management' element={<UpdateRole/>}/>
          <Route path='/service/detailservice' element={<Detailservice/>}/>
          <Route path='/device/detaildevice' element={<Detaildevice/>}/>
          <Route path='/device/updatedevice' element={<Updatedevice/>}/>
      </Routes>
    </div>  
  );
}

export default App;
