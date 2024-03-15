import profilePic from './assets/4kSuitLeyam.jpg'

function Student(){
    
    const students = [{id: 1, name: "Liam Nicholas C. Tudtud", email: "liamtudtud645@gmail.com"}, 
                {id: 2, name: "Liam Nicholas C. Tudtud", email: "liamtudtud645@gmail.com"},
                {id: 3, name: "Liam Nicholas C. Tudtud", email: "liamtudtud645@gmail.com"},
                {id: 4, name: "Liam Nicholas C. Tudtud", email: "liamtudtud645@gmail.com"},
                {id: 5, name: "Liam Nicholas C. Tudtud", email: "liamtudtud645@gmail.com"},];

const listOfStudent = students.map(students => <li key={students.id}> 
                                    {students.name} &nbsp; {students.email}</li>);
return(
    <>
        {students.map((student) => (
            <div className = "card">
                <img src ={profilePic} alt="Profile Picure"></img>
                <p>{student.name}</p>
                <p>{student.email}</p>
            </div>
        ))}
    </>
   );

}

export default Student