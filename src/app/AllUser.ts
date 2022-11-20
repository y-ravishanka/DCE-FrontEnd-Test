import { User } from "./User";

export interface AllUser {
    page?: number,
    per_page?: number,
    total?: number,
    total_pages?: number,
    data: User[]
}