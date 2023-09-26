import { StaticImageData } from "next/image";

export interface Mentor{
    id: string; 
    image: StaticImageData;
    firstName: string; 
    lastName: string;
    category: string; 
    bio: string;
    skills: string[]; 
    worksAt: string;
}