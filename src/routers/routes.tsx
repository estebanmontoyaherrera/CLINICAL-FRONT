import { Route,Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Analysis } from "../pages/Analysis";
import { Exam } from "../pages/Exam";
import { Patient } from "../pages/Patient";
import { Results } from "../pages/Results";
import { Roles } from "../pages/Roles";
import { TakeExam } from "../pages/TakeExam";
import { User } from "../pages/User";
import { Medic } from "../pages/Medic";

export default function SideRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/analysis" element={<Analysis/>}/>
            <Route path="/exam" element={<Exam/>}/>
            <Route path="/patient" element={<Patient/>}/>
            <Route path="/medic" element={<Medic/>}/>
            <Route path="/results" element={<Results/>}/>            
            <Route path="/take-exam" element={<TakeExam/>}/>
            <Route path="/configuraciones/roles" element={<Roles/>}/>
            <Route path="/configuraciones/user" element={<User/>}/>
        </Routes>
    )
}