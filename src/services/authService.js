


const login = async ({ data, dispatch }) => {
    try {
        const token = JSON.parse(localStorage.getItem('auth'))?.access_token
        const res = await axios.post(`${apiUrl}`)
    }catch(error){
        return error
    }
} 

const authService = {
    login,
    register
}


export default authService


/* authService.login({data, dispatch})
    .then((res)=> {
        console.log("login")
    }
) */
