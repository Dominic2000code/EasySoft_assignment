const router = require('express').Router();

const employeeList =[

    {
        name:" Dominic Bluawofogbe ",
        jobDescription:" Developer/Python Programmer ",
        employeeID: 'ES219001',
        image:"images/e.jpg",
    },
    {
        name:" Yvette Klu ",
        jobDescription:" Project Manager ",
        employeeID: 'ES219002',
        image:"images/a.jpg",
    },
    {
        name:" Sara Sidatha",
        jobDescription:" Computer Engineer ",
        employeeID: 'ES219011',
        image:"images/d.jpg",
    },
    
    {
        name:" Christopher Ahinkora ",
        jobDescription:" Analyst ",
        employeeID: 'ES219004',
        image:" images/g.jpg ",
    },
    {
        name:" Derick Mensah ",
        jobDescription:" Technical Rep ",
        employeeID: 'ES219005',
        image:"images/h.jpg",
    },
    {
        name:" Fred Awote ",
        jobDescription:" Developer ",
        employeeID: 'ES219006',
        image:"images/l.jpg",
    },
    {
        name:" Beatrice Okyere-Darko ",
        jobDescription:" HR/Manager ",
        employeeID: 'ES219007',
        image:"images/b.jpg",
    },
    {
        name:" Carl Carlson ",
        jobDescription:" HR",
        employeeID: 'ES219008',
        image:"images/i.jpg",
    },
    {
        name:" Fredrick Volk ",
        jobDescription:" Developer ",
        employeeID: 'ES219009',
        image:"images/j.jpg",
    },
    {
        name:" Alice Achampong ",
        jobDescription:" Sales Manager/Developer ",
        employeeID: 'ES219010',
        image:"images/c.jpg",
    },
    
    {
        name:" Parkman Joe ",
        jobDescription:" Security consultant ",
        employeeID: 'ES219012',
        image:"images/k.jpg",
    },
    {
        name:" Kelvin Ohene-Amoako ",
        jobDescription:" Blogger ",
        employeeID: 'ES219003',
        image:" images/f.jpg ",
    }
]

router.get('/',(req,res)=>{
    res.render('home',{employeeList,title:'Home'})
});


module.exports = router;