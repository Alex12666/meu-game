resource "aws_instance" "my_machine" {

  ami = "ami-0fe18bc3cfa53a248"

  instance_type = "t3.micro"


  key_name = "Devops-Automation"


  subnet_id = aws_subnet.subnet_publica.id

  vpc_security_group_ids = [aws_security_group.allow_sg.id]

  tags = {
    Name = "maquina-front-projeto"
  }
}