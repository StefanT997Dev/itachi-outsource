import { MentorRegisterDto } from "@/models/mentorRegisterDto";
import { UserDto } from "@/models/userDto";
import axios from "axios";
import { makeAutoObservable, runInAction } from "mobx";

export default class DataStore {
    // Account fields
    token: string = '';

    constructor() {
        makeAutoObservable(this);
    }

    // Account methods
    registerMentor = async (credentials: MentorRegisterDto) => {
        try {
            const axiosUserResponse = await axios.post<UserDto>('http://localhost:5000/account/register/mentor', credentials);
            const user = axiosUserResponse.data;
            runInAction(() => (this.token = user.token));
        } catch (error) {
            throw error;
        }
    };
}