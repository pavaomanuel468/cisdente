export class User{ 

    name: string
    genero: string
    email: string
    dataNascimento: string

    constructor(name:string, numero: string, genero:string, email:string, dataNascimento:string){
        this.name = name
        this.genero = genero
        this.email = email
        this.dataNascimento = dataNascimento
    }
    toString(){
        return `Nome: ${this.name}
        Genero: ${this.genero} E-mail: ${this.email} Data de nascimento: ${this.dataNascimento}`
    }

}