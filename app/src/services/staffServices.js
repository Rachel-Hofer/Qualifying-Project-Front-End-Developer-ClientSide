import axios from 'axios';

class staffServices {

    constructor() {
        let service = axios.create({
            baseURL: 'http://localhost:5000/api',
        });

        this.staffServices = service;
    }


    listAllStaff = () => {
        return this.staffServices.get('/all-staff')
            .then(response => response.data)

    }


    createStaff = (firstName, lastName, age, phoneNumber, color, birthday, email, file) => {
        let formData = new FormData();
        formData.append('firstName', firstName)
        formData.append('lastName', lastName)
        formData.append('age', age)
        formData.append('phoneNumber', phoneNumber)
        formData.append('color', color)
        formData.append('birthday', birthday)
        formData.append('email', email)
        formData.append('file', file)

        return this.staffServices.post('/create-staff', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
            .then((response) => {
                return response.data
            })
    }


    editStaff = (firstName, lastName, age, phoneNumber, color, birthday, email, file, id) => {
        let formData = new FormData();
        formData.append('firstName', firstName)
        formData.append('lastName', lastName)
        formData.append('age', age)
        formData.append('phoneNumber', phoneNumber)
        formData.append('color', color)
        formData.append('birthday', birthday)
        formData.append('email', email)
        formData.append('file', file)

        return this.staffServices.post('/edit-staff/' + id, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
            .then((response) => {
                return response.data
            })
    }

    deleteStaff = (staffID, id) => {
        console.log(staffID)
        return this.staffServices.post(`/delete-staff/` + id)
            .then((staffDeleted) => {
                console.log("This staff member has been deleted successfully", staffDeleted)

            })
    }

}

export default staffServices;