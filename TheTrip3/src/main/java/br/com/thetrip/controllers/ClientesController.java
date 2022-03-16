package br.com.thetrip.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.thetrip.model.Clientes;
import br.com.thetrip.model.Contatos;
import br.com.thetrip.model.Destinos;
import br.com.thetrip.model.Promocoes;
import br.com.thetrip.repositorys.ClientesRepository;
import br.com.thetrip.repositorys.ContatosRepository;
import br.com.thetrip.repositorys.DestinosRepository;
import br.com.thetrip.repositorys.PromocoesRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "/clientes")
public class ClientesController {
	
	@Autowired
	private ClientesRepository clientesRepository;
	
	@Autowired
	private ContatosRepository contatosRepository;
	
	@Autowired
	private DestinosRepository destinosRepository;
	
	@Autowired
	private PromocoesRepository promocoesRepository;
	
	@GetMapping
	public ResponseEntity<List<Clientes>> findAll(){
		
		List<Clientes> clientes = clientesRepository.findAll();
		
		return ResponseEntity.ok().body(clientes);
	}

	@GetMapping(value ="/{id}")
	public ResponseEntity<Clientes> findById(@PathVariable Integer Id_Cliente) {
		
		Clientes clientes = clientesRepository.findById(Id_Cliente).get();
		
		return ResponseEntity.ok().body(clientes);
	}
	
	// CREATE
    @PostMapping
    public Clientes createEmployee(@RequestBody Clientes clientes) {
    	
        return clientesRepository.save(clientes);
    }
	
    
    //UPDATE
    @PutMapping("{id}")
    public ResponseEntity<Clientes> update(@PathVariable Integer Id_Cliente, @RequestBody Clientes clientesDetails){
    	
    	Clientes updateClientes = clientesRepository.findById(Id_Cliente).get();
    	
    	Contatos contatos = contatosRepository.findById(clientesDetails.getContatos().getId_Contato()).get();
    	Destinos destinos = destinosRepository.findById(clientesDetails.getDestinos().getId_Destino()).get();
    	Promocoes promocoes = promocoesRepository.findById(clientesDetails.getPromocoes().getId_Promocao()).get();
    	
    	updateClientes.setNome_Cliente(clientesDetails.getNome_Cliente());
    	updateClientes.setCidade_Cliente(clientesDetails.getCidade_Cliente());
    	updateClientes.setEstado_Cliente(clientesDetails.getEstado_Cliente());
    	updateClientes.setContatos(contatos);
    	updateClientes.setDestinos(destinos);
    	updateClientes.setPromocoes(promocoes);
    	
    	clientesRepository.save(updateClientes);
    	
    	return ResponseEntity.ok(updateClientes);
    }
    
    
    // DELETE
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> delete(@PathVariable Integer Id_Cliente) {

    	Clientes clientes = clientesRepository.findById(Id_Cliente).get();

    	clientesRepository.delete(clientes);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
    
}
