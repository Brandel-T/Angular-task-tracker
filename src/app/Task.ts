export interface Task {
    id?: number ; // '?' --> optional to avoid error messages
    text: string ;
    day: string ;
    reminder: boolean ;
}