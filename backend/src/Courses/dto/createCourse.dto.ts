
import { IsString, IsNotEmpty, IsEnum, IsUrl, IsMongoId, IsOptional } from 'class-validator';

export class CreateCourseDto {

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsEnum(['beginner', 'intermediate', 'advanced'])
  @IsNotEmpty()
  difficulty_level: string;

  @IsString()
  @IsUrl()
  @IsNotEmpty()
  pdf: string

  @IsString()
  @IsUrl()
  @IsNotEmpty()
  video: string

  threads?: string[]

  @IsOptional()
  isOutdated: boolean;
  created_at: Date;

}