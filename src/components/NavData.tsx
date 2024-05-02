
import { AiOutlineControl,AiOutlineFileDone,AiOutlineFileProtect,AiOutlineFileSearch } from "react-icons/ai";
import { BsFileMedical } from "react-icons/bs";
import { FaUserInjured,FaUserMd,FaUserCog } from "react-icons/fa";
import { MdOutlineAnalytics } from "react-icons/md";
import { FiSettings } from "react-icons/fi";

export const menuItems=[
    {
        label:"Dashboard",
        icon:<MdOutlineAnalytics/>,
        path:"/"
    },
    {
        label:"Pacientes",
        icon:<FaUserInjured/>,
        path:"/patient"
    },
    {
        label:"Médicos",
        icon:<FaUserMd/>,
        path:"/medic"
    },
    {
        label:"Examenes",
        icon:<AiOutlineFileDone/>,
        path:"/exam"
    },
    {
        label:"Analisis",
        icon:<AiOutlineFileSearch/>,
        path:"/analysis"
    },
    {
        label:"Realizar Examenes",
        icon:<BsFileMedical/>,
        path:"/take-exam"
    },
    {
        label:"Resultados",
        icon:<AiOutlineFileProtect/>,
        path:"/results"
    },
    {
        label:"Configuraciones",
        icon:<FiSettings/>,
        path:"/configuraciones",
        spacing:true,
        submenu:true,
        submenuItems:[
            {
                label:"Usuarios",
                icon:<FaUserCog/>,
                path:"/configuraciones/user"
            },
            {
                label:"Roles",
                icon:<AiOutlineControl/>,
                path:"/configuraciones/roles"
            },

        ]
    },
]