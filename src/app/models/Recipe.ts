export class Recipe
{
public name  : string;
public description : string;
public imagePath : string;

constructor(_name, _description ,_imagePath)
{
this.name = _name;
this.description = _description;
this.imagePath = _imagePath;
}

}