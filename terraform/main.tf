# Initialize terraform
terraform {
  required_providers {
    digitalocean = {
      source  = "digitalocean/digitalocean"
      version = "~> 2.37.1"
    }
  }
}

# Declare variables from *.tfvars
variable "do_token" {}
variable "public_key_path" {}

# Configure the DigitalOcean Provider
provider "digitalocean" {
  token = var.do_token
}

# Create a new SSH key
resource "digitalocean_ssh_key" "default" {
  name       = "ssh-pub-artistify-prd-001"
  public_key = file(var.public_key_path)
}

# Create droplet
resource "digitalocean_droplet" "web" {
  image  = "ubuntu-20-04-x64"
  name   = "drp-web-artistify-prd-001"
  region = "sgp1"
  size   = "s-1vcpu-512mb-10gb"
  ssh_keys = [digitalocean_ssh_key.default.fingerprint]
  backups = true
}