import React from 'react';

   
const CartContext = React.createContext ({
    //value: isCheckbox ? event.target.checked : event.target.value,
    personalInfo: 
        {  
            fname: '',
            lname: '',
            email: '',
            cell: '',
            date: '',
        },
    products : [
        { id: 1, name: 'Governance Committe', img: 'governance.png', selected: false,},
        {   id:2, name: 'System of Record/Dashboard',  img:  'dashboard.png', selected: false,},
        {   id:3, name: 'Workforce Scheduling',  img: 'scheduling.png', selected: false,},
        {   id:4, name: 'Custom Playbook for COVID Testing Workflow',  img: 'playbook.png', selected: false,},
        {   id:5, name: 'COVID Testing',  img: 'testing.png', selected: false,},
        {   id:6, name: 'Diagnosis',  img: 'diagnosis.png', selected: false,},
        {   id:7, name: 'Contact Tracing',  img: 'tracing.png', selected: false, },
        {   id:8, name: 'Quarantine Management',  img: 'quarentine.png', selected: false,},

        ],
    currentCart: {},
    prodError: null,
        
})

export default CartContext;