export interface listausuarios{
  username:string;
  nombre:string;
  apellidos:string;
  email:string;
  telefono:string;

}



export interface nuevaLista{
  user ?: usuarios[]
}

export interface  usuarios{
  apellidos?: string;

  email?: string;

  id?: number;
  imagen ?: string;
  nombre?: string;
  protectora?: boolean
  rol?: string;
  telefono?: string;
  username?:string;


}
