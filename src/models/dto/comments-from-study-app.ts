import { ApiProperty } from '@nestjs/swagger';
export class PostUserDetailsDto {
  @ApiProperty()
 user_name:string;

  @ApiProperty()
  email_id: string;

  @ApiProperty()
  mobile_no: number;

  @ApiProperty()
  address: string;
}
export class UpdateUserDetails {
 
  @ApiProperty()
  user_name:string;
 
   @ApiProperty()
   email_id: string;
 
   @ApiProperty()
   mobile_no: number;
 
   @ApiProperty()
   address: string;
}
export class CommentsFromStudyUpdateDto {
  @ApiProperty()
  is_public: number;
}

