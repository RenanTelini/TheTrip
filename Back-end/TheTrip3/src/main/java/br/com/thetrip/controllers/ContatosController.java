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

import br.com.thetrip.model.Contatos;
import br.com.thetrip.repositorys.ContatosRepository;

@CrossOrigin(origins ="*")
@RestController
@RequestMapping(value = "/contatos")
public class ContatosController {
	
	@Autowired
	private ContatosRepository contatosRepository;
	
	// GET
	@GetMapping
	public ResponseEntity<List<Contatos>> findAll() {
		
		List<Contatos> contatos = contatosRepository.findAll();
		
		return ResponseEntity.ok().body(contatos);
	}
	
	
	// GET por id
	@GetMapping(value = "/{id}")
	public ResponseEntity<Contatos> findById(@PathVariable Integer Id_Contato) {
		
		Contatos contatos = contatosRepository.findById(Id_Contato).get();
		
		return ResponseEntity.ok().body(contatos);
	}
	
	// CREATE
    @PostMapping
    public Contatos create(@RequestBody Contatos contatos) {
    	
        return contatosRepository.save(contatos);
    }

    
    // UPDATE
	@PutMapping("{id}")
    public ResponseEntity<Contatos> update(@PathVariable Integer Id_Contato,@RequestBody Contatos contatosDetails) {
    	
		Contatos updateContatos = contatosRepository.findById(Id_Contato).get();

		updateContatos.setEmail_Contato(contatosDetails.getEmail_Contato());
		updateContatos.setTelefone_Contato(contatosDetails.getTelefone_Contato());

    	contatosRepository.save(updateContatos);

        return ResponseEntity.ok(updateContatos);
    }
	
	// DELETE
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> delete(@PathVariable Integer Id_Contato) {

    	Contatos contatos = contatosRepository.findById(Id_Contato).get();

    	contatosRepository.delete(contatos);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
