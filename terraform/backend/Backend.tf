# state.tf 
terraform { 
  backend "s3" { 
    bucket = "my-balde-alexandre-projeto-2026"  
    key     = "" 
    region = "us-east-2" 
  } 
}
