import api from "../AxiosApi"

interface addressPayload{
  "street": string,
  "city": string,
  "state": string,
  "postal_code": string,
    }

interface userProfilePayload{
    "id": string
  "name": string,
  "email": string,
  "phone_number": string,
}

export const UpdateUserAdderess = async (payload:addressPayload)=>{
    try{
        //fetching current address
        const res = await api.get('/addresses')
        const id = res?.data?.data?.id; //getting id
        
        //updating address 
        const res_updated = await api.patch(`/addresses/${id}`,payload)
        return res_updated.data.data;
    }catch(err:any){
        throw err.response?.data || err;  
    }
}

export const CreateUserAddress = async (payload:addressPayload)=>{
    try{
        const res = await api.post('/addresses',payload)
        return res.data.data;
    }catch(err:any){
        throw err.response?.data || err;  
    }
}


export const UpdateUserProfile = async (profilePayload:userProfilePayload,addressPayload:addressPayload)=>{
    try{

        const res_profile = await api.post(`/users/${profilePayload.id}`,profilePayload);
        const res_address = await UpdateUserAdderess(addressPayload);
        return {ras_profile: res_profile.data.data, res_address: res_address.data.data, };
    }catch(err:any){
        throw err.response?.data || err;  
    }
}
