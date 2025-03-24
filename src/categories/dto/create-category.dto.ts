import { IsNotEmpty } from "class-validator";




export class CreateCategoryDto {

    @IsNotEmpty({message: 'El nombre de la Categoría no puede ir vacio'})
    name: string
}
