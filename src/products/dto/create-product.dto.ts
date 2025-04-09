import { IsInt, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateProductDto {

    @IsNotEmpty({message: 'Nombre del producto es obligatorio'})
    @IsString({message:'Valor no válido'})
    name: string

    
    @IsNotEmpty({message: 'La imagen del producto es obligatorio'})
    image: string

    @IsNotEmpty({message: 'El valor es obligatorio'})
    @IsNumber({maxDecimalPlaces: 2}, {message: 'Precio no válido'})
    price: number

    @IsNotEmpty({message: 'Cantidad no puede ir vacia'})
    @IsNumber({maxDecimalPlaces: 0}, {message: 'Cantidad no válida'})
    inventory: number

    @IsNotEmpty({message: 'La categoría es obligatoria'})
    @IsInt({message: 'La categoría no es válida'})
    categoryId: number

}
