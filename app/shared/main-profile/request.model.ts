import {Comment}  from './comment.model'
import { from } from 'rxjs';
export class Post{
Post_ID	:number ; 
UserName:string	;
Text:string	;
Date:Date;
BloodType	:string	;
City	:string	;
Address	:string	;
username:string	;
Comments :Comment[] ;
}