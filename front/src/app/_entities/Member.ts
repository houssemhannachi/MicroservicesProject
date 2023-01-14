export interface Member{
  id?:number;
  email: string;
  cin: String | undefined;
  createdDate: String | undefined;
  cv: String | undefined;
  nom: String | undefined;
  prenom: String | undefined;
  grade: String | undefined;
  dateNaissance: Date | undefined;
  diplome?:string;
  etablissement?:string;
  type_mbr:String;
  dateInscription?:Date;
  typeMbr?:string;
}
