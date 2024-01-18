import { useState } from "react";
import {
    Collapse,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import { ExpandLess, ExpandMore } from "@mui/icons-material";


const departmentsData = [
    {
        id: 1,
        name: "AgriCulture & Fishing (5)",
        subDepartments: [
            { id: 11, name: "Agriculture" },
            { id: 12, name: "Crops" },
            { id: 13, name: "Farming Animals &  Livestock" },
            { id: 14, name: "Fishery & Aquaculture" },
            { id: 15, name: "Ranching" },
        ],
    },
    {
        id: 2,
        name: "Business Services (5)",
        subDepartments: [
            { id: 21, name: "Accounting & Accounting Services" },
            { id: 22, name: "Auctions" },
            { id: 23, name: "Business Services-General" },
            { id: 24, name: "Call Centers & Business Centers" },
            { id: 25, name: "Career Planning" },
        ],
    },
];


const Sidebar = () => {
    const [open, setOpen] = useState<number | null>(null);

    type selectedCategoryDto = { id: number, subs: number[] }
    const [selectedCategories, setSelectedCategories] = useState<selectedCategoryDto[]>([])

    const handleToggle = (departmentId: number) => {
        if (open === departmentId) {
            setOpen(null);
        } else {
            setOpen(departmentId);
        }
    };

    const handleSectionToogle = (id: number) => {
        let subs = departmentsData.find((obj) => obj.id == id)?.subDepartments.map((dept) => dept.id)
        const curr_state = selectedCategories.find((obj) => obj.id == id)
        if (subs == undefined) {
            subs = []
        }
        if (!curr_state) {
            return setSelectedCategories([...selectedCategories, { id, subs }])
        }
        return setSelectedCategories([...selectedCategories].filter((obj) => obj.id !== id))
    }

    const handleSubSectionToogle = (dept_id: number,sub_dept:number) => {
        const curr_state = selectedCategories.find((obj) => obj.id == dept_id)
        const curr_state_subs = curr_state?.subs.find((obj)=>obj == sub_dept)
            
            if(!curr_state){
                if(!curr_state_subs){
                    const updatedObj = {id:dept_id,subs:[sub_dept]}
                    return setSelectedCategories([...selectedCategories,updatedObj])
                }
            }else{
                if(!curr_state_subs){
                    const updatedObj = {id:dept_id,subs:[...curr_state.subs,sub_dept]}
                    return setSelectedCategories([...selectedCategories].map((obj)=>obj.id == updatedObj.id ? updatedObj: obj))
                }else{
                    const updatedObj = {id:dept_id,subs:curr_state.subs.filter((obj)=> obj!== sub_dept)}
                    return setSelectedCategories([...selectedCategories].map((obj)=>obj.id == updatedObj.id ? updatedObj: obj))
                }
            }
    }

    const isCategorySelected = (dept_id: number): boolean => {
        const all_subCategories = departmentsData[dept_id - 1].subDepartments.map((sub_dept) => sub_dept.id)
        const department = selectedCategories.find((obj) => obj.id == dept_id)
        if (department && all_subCategories.every((sub_id) => department.subs.includes(sub_id))) {
            return true
        }
        return false
    }

    const isSubCategorySelected = (dept_id: number, category_id: number) => {
        if (selectedCategories.find((obj) => obj.id == dept_id)?.subs.includes(category_id)) {
            return true
        } else {
            return false
        }
    }
    return (
        <List component="nav" >

            {departmentsData.map((department) => (
                <div key={department.id}>

                    <ListItem onClick={() => handleToggle(department.id)}>
                        <ListItemIcon onClick={() => handleSectionToogle(department.id)}>
                            <Checkbox checked={isCategorySelected(department.id)} />
                        </ListItemIcon>
                        <ListItemText primary={department.name} />
                        {open === department.id ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>

                    <Collapse in={open === department.id} timeout="auto" unmountOnExit>
                        <List component="div"  >
                            {department.subDepartments.map((subDept) => (
                                <ListItem key={subDept.id}>
                                    <ListItemIcon onClick={()=>handleSubSectionToogle(department.id,subDept.id)}>
                                        <Checkbox checked={isSubCategorySelected(department.id, subDept.id)} />
                                    </ListItemIcon>
                                    <ListItemText primary={subDept.name} />
                                </ListItem>
                            ))}
                        </List>
                    </Collapse>

                </div>
            ))}
        </List>
    );
};

export default Sidebar;
