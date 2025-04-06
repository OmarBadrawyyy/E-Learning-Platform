import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Request,
  UseGuards
} from '@nestjs/common';
import { QuizService } from 'src/quizzes/quiz.service';
import { Quiz } from 'src/schemas/quiz.schema';
import { createQuizDto } from 'src/quizzes/dto/createQuiz.dto';
import { updateQuizDto } from 'src/quizzes/dto/updateQuiz.dto';
import { Roles } from 'src/decorators/roles.decorator';
import { AuthenticationGuard } from 'src/guards/authentication.guard';
import { AuthorizationGuard } from 'src/guards/authorization.guard';
import mongoose from 'mongoose';
import { SubmitQuizDto } from './dto/submitQuiz.dto';




@Controller('quiz')
@UseGuards(AuthenticationGuard, AuthorizationGuard)
export class QuizController {
  constructor(private quizService: QuizService) {}

  //Get all quizzes
  @Roles(['student', 'instructor', 'admin'])
  @Get()
  async getAllQuizzes(): Promise<Quiz[]> {
    return await this.quizService.findAll();
  }

  @Roles(['student', 'instructor'])
  @Get('MyQuizzes')
  async getQuizzesByRole(@Request() req: any) {
    const userId = req.user.user_id;
    const role = req.user.role;
    console.log(userId, role)
    return await this.quizService.getQuizzesByRole(userId, role);
  }

  @Roles(['instructor', 'student'])
  @Get('module/:module_id')
  async getQuizzesByModuleId(@Param('module_id') module_id: string){
    return await this.quizService.findByModuleId(module_id);
  }


  //get quiz by id
  @Get(':quiz_id')
  @Roles(['instructor'])
  async getQuizById(@Param('quiz_id') quiz_id: string, @Request() req:any) {
    // Get the quiz ID from the route parameters
    const quiz = await this.quizService.findById(quiz_id);
    return quiz;
  }

  @Post()
  @Roles(['instructor'])
  async createQuiz(@Body() quizData: createQuizDto, @Request() req: any) {
    const instructorId = req.user.user_id; // Extract the user ID from the request
    const newQuiz = await this.quizService.create(quizData, instructorId);
    return newQuiz;
  }  


  @Put(':quiz_id')
  @Roles(['instructor'])
  async updateQuiz(
    @Param('quiz_id') quiz_id: string,
    @Body() quizData: updateQuizDto,
    @Request() req: any
  ) {
    const instructorId = req.user.user_id;
    return await this.quizService.update(quiz_id, quizData, instructorId);
  }
  
  
  @Delete(':quiz_id')
  @Roles(['instructor'])
  async deleteQuiz(@Param('quiz_id') quiz_id: string, @Request() req: any) {
      const instructorId = req.user.user_id;
      const deletedQuiz = await this.quizService.delete(quiz_id, instructorId);
      return deletedQuiz;
  }



  @Roles(['student'])
  @Post('submit/:quizId')
  async submitQuiz(@Request() req: any, @Param('quizId') quizId: string, @Body() submitQuizDto: SubmitQuizDto) {
    const studentId = req.user.user_id;
    return this.quizService.submitQuiz(studentId, quizId, submitQuizDto.answers);
  }
  

  @Roles(['student'])
  @Get(':quizId/questions')
  async getQuizQuestions(@Param("quizId") quizId: string, @Request() req:any){
    const studentId = req.user.user_id
    return this.quizService.getQuizQuestions(quizId, studentId)
  }

}
