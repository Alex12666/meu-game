resource "aws_ecr_repository" "meu_ecr" {
  name         = "minha_imagem"
  force_delete = true  # <--- ADICIONE ESTA LINHA AQUI
}