
import { HttpStatus, Injectable } from '@nestjs/common';
import { dbConnection } from 'src/app.module';
import { ResponseMessageEnum } from 'src/models/enum/response-message.enum';
import ResponseInterface from 'src/models/interface/response.interface';
import {
  PostUserDetailsInterface,
  UpdateUserDetailsInterface,
} from '../../../models/interface/comments-from-study-app.interface';
import * as mysql from 'mysql2';

import { DateTimeService } from 'src/common/services/date-time/date-time.service';

@Injectable()
export class UserDetailsService {
  constructor(private _dateTimeService: DateTimeService) {}
async getUsetDetails(): Promise<ResponseInterface> {
    try {
      const data=await dbConnection.query(`
      SELECT * FROM user.user_details;
        `);
        console.log(data,'sevice');
        
      return {
        message: ResponseMessageEnum.GET,
        statusCode: HttpStatus.CREATED,
        data:data
    
      };
    } catch (error) {
      throw error;
    }
  }
  async postUserDetails(
    userDetails: PostUserDetailsInterface,
 
  ): Promise<ResponseInterface> {
    try {
      const data=await dbConnection.query(`
        INSERT INTO user.user_details(user_name,email_id,mobile_no,address) VALUES
        (
          ${mysql.escape(userDetails.user_name)},
          ${mysql.escape(userDetails.email_id)},
          ${mysql.escape(userDetails.mobile_no)},
          ${mysql.escape(userDetails.address)}
        );
        
        `);
      return {
        message: ResponseMessageEnum.ADD,
        statusCode: HttpStatus.CREATED,
        data: true,
      };
    } catch (error) {
      throw error;
    }
  }
  async updateUserDetails(
    user_id: number,
    userDetails: UpdateUserDetailsInterface,
  ) {
    try {
     await dbConnection.query(`
      UPDATE user.user_details 
      SET 
      user_name=${mysql.escape(userDetails.user_name)},
      email_id=${mysql.escape(userDetails.email_id)},
      mobile_no=${mysql.escape(userDetails.mobile_no)},
      address=${mysql.escape(userDetails.address)} 
      WHERE user_id=${mysql.escape(user_id)};
      `);
      return {
        message: ResponseMessageEnum.UPDATE,
        statusCode: HttpStatus.ACCEPTED,
        data: true,
      };
    } catch (error) {
      throw error;
    }
  }
  async deleteUserDetails(
    user_id: number,
  ): Promise<ResponseInterface> {
    try {
    await dbConnection.query(`
      DELETE FROM user.user_details WHERE user_id=${mysql.escape(user_id)};
      `);
      return {
        message: ResponseMessageEnum.DELETE,
        statusCode: HttpStatus.OK,
        data: true,
      };
    } catch (error) {
      throw error;
    }
  }
}
