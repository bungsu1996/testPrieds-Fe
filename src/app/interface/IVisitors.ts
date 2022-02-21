import listClinic from "./IClinic";

export default interface inputVisitor {
  visitorId?: string;
  visitorName: string;
  visitorBirthDate: string;
  visitorAge: string;
  visitorContact: string;
  clinic: listClinic;
  visitorWeight: string;
  visitorHeight: string;
  visitorBlood: string;
  visitorAdres: string;
  visitorAdres2: string;
  visitorAnamnesis: string;
  visitorTreatment: string;
  createdAt?: string;
}
