resource "aws_ecr_repository" "myimage" {
  name                 = "minha_imagem"
  image_tag_mutability = "MUTABLE"


}