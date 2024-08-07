Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/jammy64"
  config.vm.define "servidor" do |servidor|
    servidor.vm.network "private_network", ip: "192.168.33.10"
  end
end
