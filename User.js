import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

export default function User()
{
    //const{id}=useParams()
    const users=useSelector((state)=>state.userInfo.eusers)
    console.log('the users:',users)
    return(
        <>
        <h1> im the USER</h1>
        {
            users.map( (user,index)=>{
                return(
                    <div key={index}>
                        <h1>{user.roll}</h1>
                        <h1>{user.name}</h1>
                        <h1>{user.city}</h1>

                    </div>
                )
            })
        }
        </>
    )
}

//<h1> im the USER {id}</h1>if used params...in place 11....