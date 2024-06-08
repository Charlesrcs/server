import {
  PostUserDetailsDto,
  UpdateUserDetails,
} from '../../../models/dto/comments-from-study-app'
import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { UserDetailsService } from './user-details.service';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('user-details')
@Controller('user-details')
export class UserDetailsController {
  constructor(
    private _commentsFromStudyAppService: UserDetailsService,
  ) {}
  @Get('get-user-details')
  async getUserDetails() {
    try {
      const data = await this._commentsFromStudyAppService.getUsetDetails();
      console.log(data);
      
      return data;
    } catch (error) {
      throw error;
    }
  }
  @Post('post-userDetails')
  async postComments(
    @Body() userDetails: PostUserDetailsDto,
  ) {
    try {
      return await this._commentsFromStudyAppService.postUserDetails(
        userDetails,
      );
    } catch (error) {
      throw error;
    }
  }
  @Put('update-userDetails')
  async updateUserDetails(
    @Query('user_id') user_id: number,
    @Body() userDetails: UpdateUserDetails,
  ) {
    try {
      return await this._commentsFromStudyAppService.updateUserDetails(
        user_id,
        userDetails
      );
    } catch (error) {
      throw error;
    }
  } 
  @Delete('delete-userDetails')
  async deleteUserDetails(
    @Query('user_id') user_id: number,
  ) {
    try {
      return await this._commentsFromStudyAppService.deleteUserDetails(
      user_id
      );
    } catch (error) {
      throw error;
    }
  }
}
