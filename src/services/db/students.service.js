import { studentsModel } from './models/students.js'
//TODO: Implementar las operaciones CRUD:
export default class StudentService {
    constructor() {
        console.log("Working students with Database persistence in mongodb");
    }

    getAll = async () => {
        let students = await studentsModel.find() ;
        return students.map(student => student.toObject());
    }
    save = async (student) => {
        // Completar
        try {
            const newStudent = await studentsModel.create(student);
            return {newStudent: newStudent, status: true}
        } catch (error) {
            return {status: false, msg: error}
        }
    }
}