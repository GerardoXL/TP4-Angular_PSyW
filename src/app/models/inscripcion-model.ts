export interface InscripcionModel{  //datos del alumno
    dni: number;
    precio: number;
    categoriaAlumno: number; // 1= Estudiante, 2= Egresado, 3=particular
    fechaInscripcion: string;
    email: string;
    curso: string;
    precioFinal: number;
}