import axios from "axios"

export const api = axios.create({
    baseURL : "http://localhost:8080"
})


export const getHeader = () => {
    const token = localStorage.getItem("token")
    return {
        Authorization: `Bearer ${token}`,
        "Content-Type" : "application/json"
    }
}

// This function adds a new room to the database
export async function addRoom(photo, roomType, roomPrice){
    const formData = new FormData()
    formData.append("photo", photo)
    formData.append("roomType", roomType)
    formData.append("roomPrice", roomPrice)

    const response = await api.post("/rooms/add/new-room", formData)
    if (response.status === 201 ) {
        return true
    }else{
        return false
    }
    

}

// This function get all room types from the database
export async function getRoomTypes() {
    try {
        const response = await api.get("/rooms/room/types")
        return response.data
        
    } catch (error) {
        throw new Error("Error fetching room types")
    }
}

// this functions gets all rooms from database
export async function getAllRooms() {
    try {
        const result = await api.get("/rooms/all-rooms")
        return result.data
    }catch(error){
        throw new Error("Error fetching rooms")
    }
}

// this functions delete room by id
export async function deleteRoom(roomId){
    try {
        // const result = await api.delete(`/rooms/delete/room/${roomId}`, {
        //     headers: getHeader()
        // })
        const result = await api.delete(`/rooms/delete/room/${roomId}`)
        return result.data
    } catch (error)  {
        throw new Error(`Error deleting room ${error.message}`)
    } 
}     