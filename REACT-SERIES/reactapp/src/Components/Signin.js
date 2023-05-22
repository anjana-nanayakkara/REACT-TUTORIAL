import React from 'react'
import { useParams,useLocation } from 'react-router-dom'

const Signin = () => {

    const { username } = useParams();
    const location = useLocation();
    const history = useHistory();
  return (
    <>
    
    <h1 className='text-center py-4'>Hello {username}</h1>
    {
        location.pathname!==`/signin/anjana`?(<button className='btn btn-dark'>Get membership</button>): null
    }
    
    </>
  )
}

export default Signin