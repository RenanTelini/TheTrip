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

import br.com.thetrip.model.Promocoes;
import br.com.thetrip.repositorys.PromocoesRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "/promocoes")
public class PromocoesController {

	@Autowired
	private PromocoesRepository promocoesRepository;
	
	//GET
	@GetMapping
	public ResponseEntity<List<Promocoes>> findAll() {
		
		List<Promocoes> promocoes = promocoesRepository.findAll();
		
		return ResponseEntity.ok().body(promocoes);
 	}
	
	//GET por id
	@GetMapping(value = "/{id}")
	public ResponseEntity<Promocoes> findById(@PathVariable Integer Id_Promocao){
	
		Promocoes promocoes = promocoesRepository.findById(Id_Promocao).get();
	
		return ResponseEntity.ok().body(promocoes);
	}
	
	//CREATE
	@PostMapping
	public Promocoes createEmployee(@RequestBody Promocoes Promocoes) {
		
		return promocoesRepository.save(Promocoes);
	}
	
	//UPDATE
	@PutMapping("{id}")
	public ResponseEntity<Promocoes> update(@PathVariable Integer Id_Promocao, @RequestBody Promocoes promocoesDetails) {
		
		Promocoes updatePromocoes = promocoesRepository.findById(Id_Promocao).get();
		
		updatePromocoes.setValor_Promocao(promocoesDetails.getValor_Promocao());
		
		promocoesRepository.save(updatePromocoes);
		
		return ResponseEntity.ok(updatePromocoes);
	}
	
	//DELETE
	@DeleteMapping("{id}")
	public ResponseEntity<HttpStatus> delete (@PathVariable Integer Id_Promocao) {
		
		Promocoes promocoes = promocoesRepository.findById(Id_Promocao).get();
		
		promocoesRepository.delete(promocoes);
		
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}
